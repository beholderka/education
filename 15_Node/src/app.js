import * as http from 'http';
import fs from 'fs';
import { Transform } from 'stream';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import sharp from 'sharp';

dotenv.config();
const fileSizes = process.env.SIZE.split(';').map((value) =>
{
  return value.split(',');
});
const s3 = new AWS.S3({
  accessKeyId: process.env.ID_ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'us-east-1',
});
const uploadFile = (fileName, fileContent) => {
  // Read content from the file

  // Setting up S3 upload parameters
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName, // File name you want to save as in S3
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. 
    ${data.Location}`);
  });
};

const app = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  response.end(request.url);
  const fileName = request.url
    .split('')
    .filter((value) => value !== '/')
    .join('');

  const data = new Transform();
  console.log(request.headers['content-type']);
  request.on('data', (chunk) => {
    data.push(chunk);
  });

  request.on('end', () => {
    const file = data.read();
    fileSizes.forEach((value) => {
      resize(`${fileName}_${value[0]}x${value[1]}.jpg`, file, Number(value[0]), Number(value[1]));
    });
  });
});
app.listen(process.env.PORT || 3000);

function resize(fileName, dataInput, width, height) {
  sharp(dataInput)
    .resize(width, height)
    .toBuffer()
    .then((data) => {
      uploadFile(fileName, data);
    });
}

// resize('storage-directory/image.jpg');
