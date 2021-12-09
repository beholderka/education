
function validationNum(value) {
    if (Number.isInteger(value)) {
        return true;
    } else {
        return false;
    }
}

//1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function fSumEval() {
    let Sum = 0;
    let countEval = 0;
    for (let i = 1; i <= 99; i++) {
        if (i % 2 === 0) {
            Sum += i;
            countEval++;
        }
    }
    return 'Sum: ' + Sum + '; Count: ' + countEval;
}

//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)'
function fPrime(a) {
    if (validationNum(a)) {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) return false;
        }
        if (a != 2 && a > 0) {
            return true;
        }
    }
    return false;
}

//3.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function fSqRootSeq(key) {
    if (validationNum(key)) {
        for (let i = 1; ; i++) {
            let q = i * i;
            if (key === q)
                return i;
            if (key < q)
                return i - 1;
        }
    } else
        return false;
}

function fSqRootBinary(key)
{
    if (!validationNum(key)) {
        return false;
    } else if (key<0) {
        return false;
    }

    let min = 1;
    let max = key;
    let prev = 0;
    for (;;) {
        let mid = (min + max) / 2;
        if ((min + max) % 2 != 0)
            mid -= 0.5;
        if (prev === mid)
            return mid;
        let q = mid * mid;
        if (key === q)
            return mid;
        if (key < q)
            max = mid;
        else
            min = mid;
        prev = mid;
    }
}

//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function fFactorial(n) {
    if (!validationNum(n)) {
        return false;
    } else if (n<0) {
        return false;
    }
    let vFact = 1;
    for (let i = 1; i <= n; i++)
        vFact *= i;
    return vFact;
}

//5.	Посчитать сумму цифр заданного числа
function  fSumNumber(n) {
    if (!validationNum(n)) {
        return false;
    }
    if (n < 0) {
        n = n * (-1);
    }
    let sum = 0;
    let temp = 0;
    while (n != 0) {
        temp = n % 10;
        n = (n - temp) / 10;
        sum += temp;
    }
    return sum;
}


//6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321
function  fReflection(n) {
    if (!validationNum(n)) {
        return false;
    }
    if (n < 0) {
        n = n * (-1);
    }
    let number='';
    let temp=0;
    while (n!=0)
    {
        temp= n%10;
        n =(n-temp)/10;
        number=number+temp;
    }
    return number;
}
module.exports ={fSumEval,fPrime,fSqRootSeq,fSqRootBinary,fFactorial,fSumNumber,fReflection};
