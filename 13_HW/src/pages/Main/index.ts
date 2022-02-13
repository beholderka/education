import './styles.scss';
import {
  setNodeDisabled,
  getNode,
  getNodeValue,
  setNodeValue,
  randomNumber,
  randomArrayElement,
  addListener,
  promiseTemplate
} from './utils';

export function initApp() {
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
  addListener('clear', 'click', clearAll.bind(null, candidate));
}

export function clearAll(candidate) {
  candidate.length = 0;
  const canvas =  <HTMLCanvasElement>getNode('canvas');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  setNodeDisabled('add', false);

}

export function generateAll(names, balance, age, englishLevel, documents) {
  setNodeValue('name', randomArrayElement.bind(null, names, 0, 9));
  setNodeValue('balance', randomArrayElement.bind(null, balance, 0, 9));
  setNodeValue('age', randomArrayElement.bind(null, age, 0, 9));
  setNodeValue('englishLevel', randomArrayElement.bind(null, englishLevel, 0, 9));
  setNodeValue('document', randomArrayElement.bind(null, documents, 0, 4));
}

export function addCandidate(candidate, maxCountCandidate) {
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
      drawAge(time, red, green) {
        drawInTime(time, this.age, 3, this.number, red, green);
      },
      drawBalance(time, red, green) {
        drawInTime(time, this.balance, 2, this.number, red, green);
      },
      drawEnglishLevel(time, red, green) {
        drawInTime(time, this.englishLevel, 5, this.number, red, green);
      },
      drawDocuments(time, red, green) {
        drawInTime(time, this.documents, 4, this.number, red, green);
      },
    });
    setNodeDisabled('init', false);
  } else {
    setNodeDisabled('add');
  }
}


export function startRace(candidate) {
  const candidatePromise = [];
  setNodeDisabled('race');
  candidate.forEach((person) => {
      let time = randomNumber(5, 10) * 1000;
      person.drawBalance(time, 0, 255);
      promiseTemplate(person, 'balance', time, (balance) => balance >= 2000)
        .then(() => {
          time = randomNumber(1, 3) * 1000;
          person.drawAge(time, 0, 255);
          const promiseAge = promiseTemplate(person, 'age', time, (age) => (age >= 18 && age <= 60))
            .then(() => Promise.resolve())
            .catch(() => {
              drawCircle(person.age, 3, person.number, 255, 0);
            });
          time = randomNumber(10, 20) * 1000;
          person.drawDocuments(time, 0, 255);
          const promiseDocuments = promiseTemplate(person, 'documents', time, (documents) => documents)
            .then(() => Promise.resolve())
            .catch(() => {
              drawCircle(person.documents, 4, person.number, 255, 0);
            });
          time = randomNumber(5, 10) * 1000;
          person.drawEnglishLevel(time, 0, 255);
          const promiseEnglishLevel = promiseTemplate(person, 'englishLevel', time, (englishLevel) => (englishLevel !== 'A1' && englishLevel !== 'A2'))
            .then(() => Promise.resolve())
            .catch(() => {
              drawCircle(person.englishLevel, 5, person.number, 255, 0);

            });
          Promise.all([promiseAge, promiseDocuments, promiseEnglishLevel]).then(() => {
            candidatePromise.push(new Promise((resolve) => {
              setTimeout(() => {
                resolve(person);
              }, 0);
            }));
            Promise.race(candidatePromise).then((data) => {
              drawText('WINNER', 1, data.number + 0.2);
            });
          });
        })
        .catch(() => {
          drawCircle(person.balance, 2, person.number, 255, 0);
        });
    },
  );

}

export function drawInTime(time, text, offsetX, offsetY, red, green) {
  let angle = 0;
  for (let i = time / 8; i <= time; i += time / 8) {
    angle = angle + 2 * Math.PI / 8;
    setTimeout(drawCircle.bind(null, text, offsetX, offsetY, red, green, angle), i);
  }
}

export function initDraw(candidate) {
  setNodeDisabled('add');
  setNodeDisabled('init');
  setNodeDisabled('race', false);
  // @ts-ignore
  const context = getNode('canvas').getContext('2d');
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  candidate.forEach((person) => {
    drawCircle(person.name, 1, person.number, 0, 255);
  });
}

export function drawCircle(text, offsetX, offsetY, red, green, angle = 2 * Math.PI) {
  const R = 25;
  const x = 100;
  const y = 70;
  // @ts-ignore
  const context = getNode('canvas').getContext('2d');
  context.fillStyle = `rgb(${red},${green},${150})`;
  context.beginPath();
  context.arc(x * offsetX, y * offsetY, R, 0, angle);
  context.fill();
  drawText(text, offsetX, offsetY);
}

export function drawText(text, offsetX, offsetY) {
  const x = 100;
  const y = 70;
  // @ts-ignore
  const context = getNode('canvas').getContext('2d');
  context.fillStyle = `rgb(${0},${0},${0})`;
  context.font = '10px serif';
  context.fillText(text, x * offsetX, y * offsetY);
}


document.addEventListener('DOMContentLoaded', initApp);
