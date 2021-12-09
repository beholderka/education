const lengthMatrix = 7;

console.log(showMatrixOne())
console.log(showMatrixTwo())
console.log(showMatrixThree())
console.log(showMatrixFour())
console.log(showMatrixFive())
console.log(showMatrixSix())
console.log(showMatrixSeven())
console.log(showMatrixNine())
console.log(showMatrixEight())

function showMatrixOne() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray='';
        for (let j = 0; j < lengthMatrix; j++) {
            stringArray=stringArray+' * ';
        }
        console.log(stringArray);
    }
    return '';
}
function showMatrixTwo() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray = '';
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === 0) || (j === 0) || (i === lengthMatrix - 1) || (j === lengthMatrix - 1))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        console.log(stringArray);
    }
    return '';
}

function showMatrixThree() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray = '';
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === 0) || (j === 0) || (i+j===lengthMatrix-1))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        console.log(stringArray);
    }
    return '';
}

function showMatrixFour() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray = '';
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === lengthMatrix-1) || (j === 0) || (i===j))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        console.log(stringArray);
    }
    return '';
}

function showMatrixFive() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray = '';
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === lengthMatrix-1) || (j === lengthMatrix-1) || (i+j===lengthMatrix-1))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        console.log(stringArray);
    }
    return '';
}

function showMatrixSix() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray = '';
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i === 0) || (j === lengthMatrix-1) || (i===j))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        console.log(stringArray);
    }
    return '';
}

function showMatrixSeven() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray = '';
        for (let j = 0; j < lengthMatrix; j++) {
            if ((i + j === lengthMatrix-1) || (i===j))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        console.log(stringArray);
    }
    return '';
}

function showMatrixEight() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray = '';
        for (let j = 0; j < lengthMatrix; j++) {
            if (((i + j === lengthMatrix - 1)
                || (i === j)
                || (i === 0))
                && (lengthMatrix / 2 >= i))
                stringArray = stringArray + ' * ';
            else
                stringArray = stringArray + '   ';
        }
        console.log(stringArray);
    }
    return '';
}

function showMatrixNine() {
    for (let i = 0; i < lengthMatrix; i++) {
        let stringArray = '';
        for (let j = 0; j < lengthMatrix; j++) {
            if (((i + j === lengthMatrix - 1)
                || (i === j)
                || (i === lengthMatrix - 1))
                && ((lengthMatrix - 1) / 2 <= i)) {
                stringArray = stringArray + ' * ';
            }
            else {
                stringArray = stringArray + '   ';
            }
        }
        console.log(stringArray);
    }
    return '';
}
