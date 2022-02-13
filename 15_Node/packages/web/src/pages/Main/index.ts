import './styles.scss';

function responseToUser(response) {
  const div = document.getElementById('response');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  const fragment = document.createDocumentFragment();
  const keys = Object.keys(response);
  if (keys.length <= 1) {
    if (keys[0] === '400') {
      div.innerHTML = 'Not supported file type!';
    } else if (keys[0] === '422') {
      div.innerHTML = 'File to large';
    } else {
      div.innerHTML = JSON.stringify(response);
    }
  } else {
    keys.forEach((value) => {
      const a = document.createElement('a');
      a.setAttribute('href', response[value]);
      a.innerHTML = value;
      fragment.append(a);
    });
    div.append(fragment);
  }
}

function post() {
  const files = (<HTMLInputElement>document.getElementById('data')).files[0];
  fetch(`http://localhost:3000/${files.name}`, {
    method: 'POST',
    body: files,
    headers: {
      'Content-Type': files.type,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      responseToUser(response);
    });
}

(function initApp() {
  document.getElementById('data').addEventListener('input', post);
})();
