function post() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/');
  xhr.setRequestHeader('Content-type', 'image/png');
  const files = document.getElementById('data').files[0];
  xhr.send(files);
}
