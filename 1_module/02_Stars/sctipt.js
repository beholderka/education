const lengthMatrix = 7;


function showMatrixOne() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            stringArray = stringArray + ' * ';
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}

function showMatrixTwo() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === 0) || (j === 0) || (i === lengthMatrix - 1) || (j === lengthMatrix - 1))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}
console.log(showMatrixTwo())
function showMatrixThree() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === 0) || (j === 0) || (i + j === lengthMatrix - 1))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}

function showMatrixFour() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === lengthMatrix - 1) || (j === 0) || (i === j))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}

function showMatrixFive() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === lengthMatrix - 1) || (j === lengthMatrix - 1) || (i + j === lengthMatrix - 1))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}

function showMatrixSix() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === 0) || (j === lengthMatrix - 1) || (i === j))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}

function showMatrixSeven() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i + j === lengthMatrix - 1) || (i === j))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}

function showMatrixEight() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            if (((i + j === lengthMatrix - 1)
                || (i === j)
                || (i === 0))
                && (lengthMatrix / 2 >= i))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}

function showMatrixNine() {
    let stringArray = '';
    for (let i = 0; i < lengthMatrix; i++) {
        for (let j = 0; j < lengthMatrix; j++) {
            if (((i + j === lengthMatrix - 1)
                || (i === j)
                || (i === lengthMatrix - 1))
                && ((lengthMatrix - 1) / 2 <= i)) {
                stringArray = stringArray + ' * ';
            } else {
                stringArray = stringArray + '   ';
            }
        }
        stringArray = stringArray + '\n';
    }
    return stringArray;
}

module.exports.showMatrixOne=showMatrixOne;
module.exports.showMatrixTwo=showMatrixTwo;
module.exports.showMatrixThree=showMatrixThree;
module.exports.showMatrixFour=showMatrixFour;
module.exports.showMatrixFive=showMatrixFive;
module.exports.showMatrixSix=showMatrixSix;
module.exports.showMatrixSeven=showMatrixSeven;
module.exports.showMatrixEight=showMatrixEight;
module.exports.showMatrixNine=showMatrixNine;