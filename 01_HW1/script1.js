

function validationNum(value) {
if (Number.isInteger(value)) {
    return true;
} else {
    return false;
}
}

//1.	Если а – четное посчитать а*б, иначе а+б
function fEven(a,b) {
    if (validationNum(a) && validationNum(b)) {
        if ((a % 2) == 0)
            return a * b;
        else return a + b;
    } else
        return false;
}

//2.	Определить какой четверти принадлежит точка с координатами (х,у)
function  fCoard(x,y) {
    if (validationNum(x) && validationNum(y)) {
        if (x > 0 && y > 0) return 1;
        else if (x > 0 && y < 0) return 4;
        else if (x < 0 && y < 0) return 3;
        else if (x < 0 && y > 0) return 2;
        else return 0;
    } else {
        return false;
    }
}

//3.	Найти суммы только положительных из трех чисел
function fSum(a,b,c) {
   let sum=0;
    if (a>0) sum+=a;
    if (b>0) sum+=b;
    if (c>0) sum+=c;
    return sum;
}

//4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
function fMax(a,b,c) {
   let exMul=a*b*c;
   let exSum=a+b+c;
   if (exMul>exSum) return exMul+3;
   else return exSum+3;
}

//5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function fGrade(rate) {
    if (rate==0 && rate<=19)
        return 'F';
    else if (rate=>20 && rate<=39)
        return  'E';
    else if (rate=>40 && rate<=59)
        return 'D';
    else if (rate=>60 && rate<=74)
        return 'C';
    else if (rate=>75 && rate<=89)
        return 'B';
    else if (rate=>90 && rate<=100)
        return 'A';
    else return 'error'
}

module.exports ={fEven,fCoard,fSumб, fGrade};