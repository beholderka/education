import './styles.scss';
import { getNode } from './utils';

export function initApp() {
  const state = {
    arrayPhoto: [],
  };
  getPhoto(state);
}

export function renderPicture(arrayPhoto) {
  const root = getNode('root');
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  const fragment = document.createDocumentFragment();
  const divBigImageWrapper = document.createElement('div');
  divBigImageWrapper.setAttribute('class', 'wrapper__show-image');
  const input = document.createElement('input');
  input.setAttribute('type', 'button');
  input.setAttribute('class', 'button');
  input.setAttribute('value', '🞂');
  const bigPicture = document.createElement('img');
  bigPicture.setAttribute('src', arrayPhoto[0].download_url);
  bigPicture.setAttribute('class', 'image__main');
  bigPicture.setAttribute('id', 'image_main');
  const divWrapper = document.createElement('div');
  divWrapper.setAttribute('class', 'wrapper__image');
  for (let i = 0; i < 20 && i < arrayPhoto.length; i += 1) {
    const smallPicture = document.createElement('img');
    smallPicture.setAttribute('src', arrayPhoto[i].download_url);
    smallPicture.setAttribute('class', 'image__small');
    divWrapper.append(smallPicture);
  }
  divWrapper.addEventListener('click', clickSmallImage);
  input.addEventListener('click', showAll.bind(null, arrayPhoto, 0));
  divBigImageWrapper.append(bigPicture);
  divBigImageWrapper.append(input);
  fragment.append(divBigImageWrapper);
  fragment.append(divWrapper);
  root.append(fragment);
}

export function showAll(arrayPhoto, i) {
  const root = getNode('root');
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  const divWrapper = document.createElement('div');
  divWrapper.setAttribute('class', 'wrapper__show-image');
  const picture = document.createElement('img');
  picture.setAttribute('src', arrayPhoto[i].download_url);
  picture.setAttribute('class', 'image');
  const divInput = document.createElement('div');
  divInput.setAttribute('class', 'wrapper__input');
  const input = document.createElement('input');
  input.setAttribute('type', 'button');
  input.setAttribute('class', 'button');
  input.setAttribute('value', '✖');
  const inputPause = document.createElement('button');
  // inputPause.setAttribute('type', 'button');
  inputPause.setAttribute('class', 'button');
  inputPause.setAttribute('id', 'pause');
  inputPause.innerHTML = '&#10074;&#10074;';
  // inputPause.setAttribute('value', '&#x23f8;');
  divInput.append(inputPause);
  divInput.append(input);
  divWrapper.append(picture);
  divWrapper.append(divInput);
  root.append(divWrapper);
  const statusInterval = {
    i: i,
    hasInterval: false,
  };
  const interval = setInterval(() => {
    statusInterval.i++;
    statusInterval.hasInterval = true;
    if (statusInterval.i === 20 || i >=arrayPhoto.length) {
      statusInterval.i = 0;
    }
    picture.src = arrayPhoto[statusInterval.i].download_url;
  }, 2000);
  input.addEventListener('click', stopShow.bind(null, interval, arrayPhoto));
  inputPause.addEventListener('click', pauseShow.bind(null, interval, arrayPhoto, statusInterval));

}

export function stopShow(interval, arrayPhoto) {
  clearInterval(interval);
  renderPicture(arrayPhoto);
}

export function pauseShow(interval, arrayPhoto, statusInterval) {
  const inputPause =getNode('pause');
  if (statusInterval.hasInterval) {
    clearInterval(interval);
    statusInterval.hasInterval = false;
    inputPause.innerHTML = '🞂';
  } else {
    statusInterval.hasInterval = true;
    showAll(arrayPhoto, statusInterval.i);
    inputPause.innerHTML = '&#10074;&#10074;';  //23F5
  }
}


export function getPhoto(state) {
  fetch('https://picsum.photos/v2/list')
    .then((response) => response.json())
    .then((data) => {
      state.arrayPhoto = data;
      console.log(state.arrayPhoto);
      renderPicture(data);
    })
    .catch(() => {

    });
}

export function clickSmallImage(event) {
  const image = <HTMLImageElement>getNode('image_main');
  image.src = event.target.src;
}

document.addEventListener('DOMContentLoaded', initApp);
