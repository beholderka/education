import * as http from 'http';
import { Transform } from 'stream';
// @ts-ignore
import * as AWS from 'aws-sdk';
// @ts-ignore
import * as dotenv from 'dotenv';
import sharp from 'sharp';
import * as fs from 'fs';

dotenv.config();
const fileSizes = (process.env.SIZE || '300x300;1024x1024')
  .split(';')
  .map((value) => value.split(','));
const s3 = new AWS.S3({
  accessKeyId: process.env.ID_ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

function checkContentType(ct) {
  const validContentType = (process.env.CONTENT_TYPE || 'image/png').split(';');
  return validContentType.includes(ct);
}

function checkImageExtension(extension) {
  const validContentType = (process.env.IMG_EXTENSION || 'png').split(';');
  return validContentType.includes(extension);
}

async function uploadFile(fileName, fileContent) {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName,
    Body: fileContent,
  };

  return new Promise((resolve) => {
    s3.upload(params, async (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data.Location);
    });
  });
}

async function resize(fileName, dataInput, width, height) {
  return new Promise((resolve) => {
    sharp(dataInput)
      .resize(width, height)
      .toBuffer()
      .then(async (data) => {
        await uploadFile(fileName, data).then((value) => {
          resolve(value);
        });
      });
  }).then((resolve) => Promise.resolve(resolve));
}

const app = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  response.setHeader('Access-Control-Allow-Headers', '*');
  const fileName = request.url
    .split('')
    .filter((value) => value !== '/')
    .join('')
    .split('.');

  if (request.url.includes('main')) {
    if (request.url === '/main.html') {
      fs.readFile(`./../web/dist/main.html`, (err, data) => {
        // response.writeHead(200, { 'content-Type': 'text/html', 'Content-Length': data.length });
        if (err) {
          throw err;
        }
        console.log(data);
        response.write(data);
        response.statusCode = 200;
        response.end();
      });
    } else {
      const name = request.url.split('/')[1];
      fs.readFile(`./../web/dist/${name}`, (err, data) => {
        if (err) {
          throw err;
        }
        response.write(data);
        response.statusCode = 200;
        response.end();
      });
    }

  } else {
    if (request.method === 'OPTIONS') {
      response.statusCode = 200;
      response.end();
    }
    const data = new Transform();
    request.on('data', (chunk) => {
      data.push(chunk);
    });

    request.on('end', () => {
      const file = data.read();

      if (Number(request.headers['content-length']) >= Number(process.env.MAX_SIZE)) {
        response.statusCode = 422;
        response.end(JSON.stringify({ 422: 'file to large' }));
      } else if (checkContentType(request.headers['content-type'])) {
        const responseAWS = [];
        if (checkImageExtension(fileName[1])) {
          fileSizes.forEach((value) => {
            responseAWS.push(
              resize(
                `${fileName[0]}_${value[0]}x${value[1]}.${fileName[1]}`,
                file,
                Number(value[0]),
                Number(value[1]),
              ),
            );
          });
        } else {
          responseAWS.push(uploadFile(fileName.join('.'), file));
        }

        Promise.all(responseAWS).then((values) => {
          const responseUser = {};
          if (responseAWS.length !== 1) {
            fileSizes.forEach((value, index) => {
              responseUser[`${value[0]}x${value[1]}`] = values[index];
            });
          } else {
            // eslint-disable-next-line prefer-destructuring
            // @ts-ignore
            responseUser.file = values[0];
          }
          response.statusCode = 200;
          response.end(JSON.stringify(responseUser));
        });
      } else {
        response.statusCode = 400;
        response.end(JSON.stringify({ 400: 'wrong content-type' }));
      }
    });
  }
});
app.listen(process.env.PORT || 3000);
