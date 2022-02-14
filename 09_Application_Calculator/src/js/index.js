const {setNodeValue,setNodeInnerHTML,addListener} = require('./utils');
const math = require('mathjs');

function calculate() {
  const state = {
    value: '0',
    valueAll: '',
    operandA: 0,
    operandB: 0,
    prevSign: '+',
    nd: false,
    isOperand: true,
    memory: 0,
    sign: '',
    actionTwoOperands: ['+', '-', '/', '*', 'xy', 'yx', 'x√y', 'EE', 'logy'],
    actionOneOperands: [
      'x2',
      'x3',
      '1/x',
      'ex',
      'sin',
      'cos',
      'tan',
      'asin',
      'acos',
      'atan',
      'sinh',
      'cosh',
      'tanh',
      'asinh',
      'acosh',
      'atanh',
      '√',
      '3√x',
      '10x',
      'log',
      'log2',
      'ln',
      'x!',
      '%'
    ],
    actionValue: ['Rand', '+/-', 'e', 'П'],
    memoryValue: ['mc', 'mr', 'm+', 'm-'],
  };
  addListener('.calc__buttons', 'click', eventClickButton.bind(null, event, state));
}

document.addEventListener('DOMContentLoaded', calculate);

function eventClickButton(event, state) {
  if (!event.target.activeElement.classList.contains('button')) return;
  const action = event.target.activeElement.value;
  if (String(action) === '2nd') {
    setNodeValue('2nd', 'a2nd');
    setNodeValue('ex', 'yx');
    setNodeInnerHTML('ex', 'y<sup>x</sup>');
    setNodeValue('sin', 'asin');
    setNodeInnerHTML('sin', 'sin<sup>-1</sup>');
    setNodeValue('cos', 'acos');
    setNodeInnerHTML('cos', 'cos<sup>-1</sup>');
    setNodeValue('tan', 'atan');
    setNodeInnerHTML('tan', 'tan<sup>-1</sup>');
    setNodeValue('sinh', 'asinh');
    setNodeInnerHTML('sinh', 'sinh<sup>-1</sup>');
    setNodeValue('cosh', 'acosh');
    setNodeInnerHTML('cosh', 'cosh<sup>-1</sup>');
    setNodeValue('tanh', 'atanh');
    setNodeInnerHTML('tanh', 'tanh<sup>-1</sup>');
  } else if (String(action) === 'a2nd') {
    setNodeValue('2nd', '2nd');
    setNodeValue('ex', 'ex');
    setNodeInnerHTML('ex', 'e<sup>x</sup>');
    setNodeValue('sin', 'sin');
    setNodeInnerHTML('sin', 'sin');
    setNodeValue('cos', 'cos');
    setNodeInnerHTML('cos', 'cos');
    setNodeValue('tan', 'tan');
    setNodeInnerHTML('tan', 'tan')
    setNodeValue('sinh', 'sinh');
    setNodeInnerHTML('sinh', 'sinh');
    setNodeValue('cosh', 'cosh');
    setNodeInnerHTML('cosh', 'cosh');
    setNodeValue('tanh', 'tanh');
    setNodeInnerHTML('tanh', 'tanh');
  } else if (String(action) === 'a2nd') {
  } else {
    addValue(state, action);
  }
}

function addValue(state, action) {
  if (Number(action) >= '0' && Number(action) <= '9') {
    if (Number(state.value) === 0 && !String(state.value).split('').includes('.')) {
      state.value = action;
    } else {
      state.value += action;
    }
  } else if (action === '.') {
    if (!state.value.split('').includes('.')) {
      state.value += action;
    }
  } else if (action === 'AC') {
    state.operandA = 0;
    state.operandB = 0;
    state.sign = '';
    state.value = '0';
    state.valueAll = '0';
  } else if (action === '(' || action === ')') {
    if (state.operandA !== 0) {
      if (state.sign !== '') {
        if (action === '(') {
          state.valueAll = `${state.operandA + state.sign + state.operandB}=`;
          state.value = math.evaluate(`${state.operandA + state.sign + state.operandB}`);
          state.operandA = state.value;
          state.operandB = 0;
          state.sign = '';
        } else {
          state.operandB = String(state.value + ')');
          state.valueAll = `${state.operandA + state.sign + state.operandB}=`;
          state.value = math.evaluate(`${state.operandA + state.sign + state.operandB}`);
          state.operandA = state.value;
          state.operandB = 0;
          state.sign = '';
        }
      } else {
        state.sign = '*(';
      }
    } else {
      state.operandA = '(';
      state.value = '(';
    }
  } else if (state.actionOneOperands.includes(action)) {
    state.operandA = state.value;
    state.prevSign = state.sign;
    state.sign = action;
    state.value = actionOneOperandsEqual(state);
    state.operandB = state.value;
    state.valueAll = `${state.sign}(${state.operandA})`;
  } else if (state.actionTwoOperands.includes(action)) {
    state.operandA = state.value;
    state.prevSign = state.sign;
    state.sign = action;
    state.value = '0';
    state.operandB = 0;
    state.valueAll = state.operandA + state.sign;
  } else if (state.actionValue.includes(action)) {
    state.value = actionActionValue(state, action);
  } else if (state.memoryValue.includes(action)) {
    state.memory = actionMemory(state, action);
  } else if (action === '=') {
    if (state.sign === '') {
      state.sign = state.prevSign;
    }
    if (state.sign === '*(' || String(state.operandA).split('').includes('(')) {
      if (!String(state.operandB).split('').includes(')')) {
        state.operandB = String(state.operandB + ')');
      }
      state.valueAll = `${state.operandA + state.sign + state.operandB}=`;
      state.value = math.evaluate(`${state.operandA + state.sign + state.operandB}`);
    } else if (state.operandB === 0) {
      state.prevSign = state.sign;
      state.operandB = state.value;
      state.value = actionTwoOperandsEqual(state);
      state.valueAll = `${state.operandA + state.sign + state.operandB}=`;
      state.operandA = state.value;
      state.operandB = 0;
      state.sign = '';
    } else {
      state.operandA = state.value;
      // state.sign = action;
      state.value = actionOneOperandsEqual(state);
      state.valueAll = `${state.sign}(${state.operandA})`;
      state.operandA = state.value;
      state.operandB = 0;
      state.sign = '';
    }
  }
  setNodeInnerHTML('expression', state.valueAll);
  setNodeInnerHTML('calc_text', state.value);
}

function actionTwoOperandsEqual(state) {
  switch (state.sign) {
    case '*':
      return math.multiply(state.operandA, state.operandB);
    case '/':
      return math.divide(state.operandA, state.operandB);
    case '+':
      return math.add(state.operandA, state.operandB);
    case '-':
      return math.subtract(state.operandA, state.operandB);
    case 'xy':
      state.sign = '^';
      return math.pow(state.operandA, state.operandB);
    case 'yx':
      state.sign = '^';
      [state.operandB, state.operandA] = [state.operandA, state.operandB];
      return math.pow(state.operandA, state.operandB);
    case 'x√y':
      return math.pow(state.operandB, 1 / state.operandA);
    case 'logy':
      return getBaseLog(state.operandB, state.operandA);
    case 'EE':
      return math.multiply(state.operandA, math.pow(10, state.operandB));
    default:
      return '';
  }
}

// ['x2', '1/x', '|x|', 'sqrt', '10^x','log','ln'],
function actionOneOperandsEqual(state) {
  switch (state.sign) {
    case 'x2':
      return math.pow(state.operandA, 2);
    case 'x3':
      return math.pow(state.operandA, 3);
    case '1/x':
      state.sign = '1/';
      return math.divide(1, state.operandA);
    case 'x!':
      return math.factorial(math.abs(state.operandA));
    case '√':
      return math.sqrt(state.operandA);
    case '3√x':
      state.sign = '∛';
      return math.pow(state.operandA, 1 / 3);
    case '10x':
      state.sign = '10^';
      return 10 ** state.operandA;
    case 'log':
      return math.log(state.operandA);
    case 'log2':
      return math.log2(state.operandA);
    case 'ln':
      return math.log10(state.operandA);
    case 'sin':
      return math.sin(state.operandA);
    case 'asin':
      return math.asin(state.operandA);
    case 'sinh':
      return math.sinh(state.operandA);
    case 'asinh':
      return math.asinh(state.operandA);
    case 'cos':
      return math.cos(state.operandA);
    case 'acos':
      return math.acos(state.operandA);
    case 'cosh':
      return math.cosh(state.operandA);
    case 'acosh':
      return math.acosh(state.operandA);
    case 'tan':
      return math.tan(state.operandA);
    case 'atan':
      return math.atan(state.operandA);
    case 'tanh':
      return math.tanh(state.operandA);
    case 'atanh':
      return math.atanh(state.operandA);
    case 'ex':
      return math.exp(1) ** state.operandA;
    case '%':
      return state.operandA/100;
    default:
      return '';
  }
}

function actionActionValue(state, action) {
  switch (action) {
    case 'Rand':
      return Math.random();
    case 'e':
      return Math.exp(1);
    case 'П':
      return Math.PI;
    case '+/-':
      if (Number(state.value) <= 0 || String(state.value).split('').includes('i')) {
        return String(math.abs(state.value));
      }
      return `-${state.value}`;
    default:
      return '';
  }
}

function actionMemory(state, action) {
  const userValue = Number(state.value);
  switch (action) {
    case 'mc':
      return 0;
    case 'm+':
      state.value = '0';
      return state.memory + userValue;
    case 'm-':
      state.value = '0';
      return state.memory - userValue;
    case 'mr':
      state.value = String(state.memory);
      return state.memory;
    default:
      return '';
  }
}

function getBaseLog(y, x) {
  return Math.log(x) / Math.log(y);
}

module.exports = {calculate,actionActionValue, actionOneOperandsEqual, actionTwoOperandsEqual,actionMemory,getBaseLog, eventClickButton,addValue}