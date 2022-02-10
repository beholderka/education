import './styles.scss';
import { resolve } from 'eslint-import-resolver-typescript';

function initApp() {
  const names = ['Shirley Thompson', 'Edith Cole', 'Clayton Poole', 'Larry Sanders', 'Randall Brown', 'Minnie Diaz', 'Donald Palmer', 'David Hamilton', 'Martha Bishop', 'Melissa Henry'];
  const balance = [1400, 2500, 1840, 2000, 3000, 1000, 2300, 600, 2100, 4000];
  const age = [33, 13, 46, 92, 45, 17, 55, 28, 30, 36];
  const documents = [true, true, true, true, false];
  const englishLevel = ['B1', 'B2', 'C1', 'A1', 'A2', 'A1', 'A2', 'A1', 'A1', 'A2'];
  const candidate = [];
  const maxCountCandidate = 5;
  addListener('generateName', 'click', setNodeValue.bind(null, 'name', randomArrayElement.bind(null, names, 0, 9)));
  addListener('generateBalance', 'click', setNodeValue.bind(null, 'balance', randomArrayElement.bind(null, balance, 0, 9)));
  addListener('generateAge', 'click', setNodeValue.bind(null, 'age', randomArrayElement.bind(null, age, 0, 9)));
  addListener('generateEnglishLevel', 'click', setNodeValue.bind(null, 'englishLevel', randomArrayElement.bind(null, englishLevel, 0, 9)));
  addListener('generateDocument', 'click', setNodeValue.bind(null, 'document', randomArrayElement.bind(null, documents, 0, 4)));
  addListener('generateAll', 'click', generateAll.bind(null, names, balance, age, englishLevel, documents));
  addListener('add', 'click', addCandidate.bind(null, candidate, maxCountCandidate));
  addListener('init', 'click', initDraw.bind(null, candidate));
  addListener('race', 'click', startRace.bind(null, candidate));
}

function generateAll(names, balance, age, englishLevel, documents) {
  setNodeValue('name', randomArrayElement.bind(null, names, 0, 9));
  setNodeValue('balance', randomArrayElement.bind(null, balance, 0, 9));
  setNodeValue('age', randomArrayElement.bind(null, age, 0, 9));
  setNodeValue('englishLevel', randomArrayElement.bind(null, englishLevel, 0, 9));
  setNodeValue('document', randomArrayElement.bind(null, documents, 0, 4));
}

function addCandidate(candidate, maxCountCandidate) {
  if (candidate.length < maxCountCandidate) {
    const name = getNodeValue('name');
    const englishLevel = getNodeValue('englishLevel');
    const documents = Boolean(getNodeValue('document'));
    const balance = Number(getNodeValue('balance'));
    const age = Number(getNodeValue('age'));
    candidate.push({
      'name': name,
      'englishLevel': englishLevel,
      'documents': documents,
      'balance': balance,
      'age': age,
      'number': candidate.length + 1,
    });
  }
}

function promiseTemplate(candidate, property, timeout, callback) {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (callback(candidate[property])) {
        resolve(true);
      } else {
        reject(false);
      }
    }, timeout);
  });
}

function startRace(candidate) {
  const persons = [];
  candidate.forEach((person) => {
      console.log(person.name);
      let time = randomNumber(5, 10) * 1000;
      drawInTime(time, person.balance, 2, person.number, 0, 255);
      promiseTemplate(person, 'balance', time, (balance) => balance >= 2000)
        .then(() => {
          time = randomNumber(1,3) * 1000;
          drawInTime(time, person.age, 3, person.number, 0, 255);
          const promiseAge = promiseTemplate(person, 'age', time, (age) => (age >= 18 && age <= 60))
            .then(() => {
              return Promise.resolve(true);
            }).catch(() => {
              drawCircle(person.age, 3, person.number, 0, 255);
              return Promise.reject();
            });
          time = randomNumber(10,20) * 1000;
          drawInTime(time, person.documents, 4, person.number, 0, 255);
          const promiseDocuments = promiseTemplate(person, 'documents', time, (documents) => documents)
            .then(() => {
              return Promise.resolve(true);
            }).catch(() => {
              drawCircle(person.documents, 4, person.number, 255,0);
              return Promise.reject();

            });
          time = randomNumber(5,10) * 1000;
          drawInTime(time, person.englishLevel, 5, person.number, 0, 255);
          const promiseEnglishLevel = promiseTemplate(person, 'englishLevel', time, (englishLevel) => (englishLevel !== 'A1' && englishLevel !== 'A2'))
            .then(() => {
              drawCircle(person.englishLevel, 5, person.number, 0, 255);
              return Promise.resolve(true);
            }).catch(() => {
              drawCircle(person.englishLevel, 5, person.number, 255,0);
              return Promise.reject();

            });
          Promise.all([promiseAge, promiseDocuments, promiseEnglishLevel]).then((value) => {
            console.log(value);
            persons.push(new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(person);
              }, 0);
            }));
            Promise.race(persons).then((data) => {
              drawText('WINNER', 1, data.number + 0.2);
              console.log(data);
            });
          });
        })
        .catch(() => {
          drawCircle(person.balance, 2, person.number, 255, 0);
        });
    },
  );

}

function drawInTime(time, text, offsetX, offsetY, red, green) {
  let angle = 0;
  for (let i = time / 8; i <= time; i += time / 8) {
    angle = angle + 2 * Math.PI / 8;
    setTimeout(drawCircle.bind(null, text, offsetX, offsetY, red, green, angle), i);
  }
}

function initDraw(candidate) {
  candidate.forEach((person) => {
    drawCircle(person.name, 1, person.number, 0, 255);
    // drawCircle(person.balance, 2, person.number, 255, 255);
    // drawCircle(person.age, 3, person.number, 255, 255);
    // drawCircle(person.documents, 4, person.number, 255, 255);
    // drawCircle(person.englishLevel, 5, person.number, 255, 255);
  });
}

function drawCircle(text, offsetX, offsetY, red, green, angle = 2 * Math.PI) {
  const R = 40;
  const x = 150;
  const y = 90;
  // @ts-ignore
  const context = getNode('canvas').getContext('2d');
  context.fillStyle = `rgb(${red},${green},${0})`;
  context.beginPath();
  context.arc(x * offsetX, y * offsetY, R, 0, angle);
  context.fill();
  drawText(text, offsetX, offsetY);
}

function drawText(text, offsetX, offsetY) {
  const x = 150;
  const y = 90;
  // @ts-ignore
  const context = getNode('canvas').getContext('2d');
  context.fillStyle = `rgb(${0},${0},${0})`;
  context.font = '10px serif';
  context.fillText(text, x * offsetX, y * offsetY);
}

function getNode(id) {
  const node = document.getElementById(id);
  if (node) {
    return node;
  }
  return null;
}

function randomArrayElement(array, minValue, maxValue) {
  return array[randomNumber(minValue, maxValue)];
}

function randomNumber(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

function addListener(id, eventType, callback) {
  const node = document.getElementById(id);
  if (node) {
    node.addEventListener(eventType, callback);
  }
}

function setNodeValue(id, callback) {
  const node = document.getElementById(id);
  if (node) {
    // @ts-ignore
    node.value = callback();
    return true;
  }
  return false;
}

function getNodeValue(id) {
  const node = document.getElementById(id);
  if (node) {
    // @ts-ignore
    return node.value;
  }
  return '';
}


document.addEventListener('DOMContentLoaded', initApp);
