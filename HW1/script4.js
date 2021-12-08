
//3.	Вводим число(0-999), получаем строку с прописью числа.
let nums_1_9Array = 'ноль один два три четыре пять шесть семь восемь девять'.split(' ');
let nums_10_19Array = 'десять одиннадцать двенадцать тринадцать четырнадцать пятнадцать шестнадцать семнадцать восемнадцать девятнадцать'.split(' ');
let nums_20_90Array = 'ноль десять двадцать тридцать сорок пятьдесят шестьдесят семьдесят восемьдесят девяносто'.split(' ');
let nums_100_900Array = 'ноль сто двести триста четыреста пятьсот шестьсот семьсот восемьсот девятьсот'.split(' ');
let dischargeArray = ' тысяч миллион миллиард триллион квадриллион квинтиллион секстиллион септиллион октиллион нониллион дециллион андециллион дуодециллион тредециллион кваттордециллион квиндециллион сексдециллион септемдециллион октодециллион новемдециллион вигинтиллион анвигинтиллион дуовигинтиллион тревигинтиллион кватторвигинтиллион квинвигинтиллион сексвигинтиллион септемвигинтиллион октовигинтиллион новемвигинтиллион тригинтиллион антригинтиллион'.split(' ');

let stringNumArray=[['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто','сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот','тысяч','миллион','миллиард'],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,1000000,1000000000]];
//2. Вводим число (0-999), получаем строку с прописью числа.

function fPrint0_999(n,flag=true) {
    let temp=0;
    let discharge=10**(String(n).length-1);
    let result='', tempResult='';
    if(flag)
        n=flipInt(n);
    if (String(n).length>=   2)
    {
        if (String(n)[1]=='1')
        {
            tempResult=' '+fDigitToString(Number(String(n)[0]),11);
            n=Number(String(n).substr(2,String(n).length));
        }
    }
    while (n!=0)
    {
        temp= n%10;
        n =(n-temp)/10;
        result+=' ' +fDigitToString(temp,discharge);
        discharge/=10;
    }
    return result+tempResult;
}
function flipInt(n){
    let digit, result = 0;

    while( n ){
        digit = n % 10;
        result = (result * 10) + digit  ;
        n = n/10|0 ;
    }

    return result;
}  
function fDigitToString(n,d) {

    switch (d) {
        case 1:
            return nums_1_9Array[n];
            break;
        case 11:
            return  nums_10_19Array[n];
            break;
        case 10:
            return nums_20_90Array[n];
            break;
        case 100:
            return  nums_100_900Array[n];
            break;

    }
}
//5. Для задания 2 расширить диапазон до 999 миллиардов
function fPrint0_999b(n) {
   let nString = String(n).split('').reverse().join('');
    let temp = 0;
    let  stringsArray = [];
    let result='';
    let lengthN = String(n).length, tempLengthN = String(n).length;
    let ii = Math.ceil(lengthN / 3);
    for (let i = 0; i < ii; i++) {
        if (tempLengthN > 0) {
            if (tempLengthN >= 3) {
                stringsArray[i] = nString.substr(0, 3);
                nString = nString.substr(3, tempLengthN);
                tempLengthN -= 3;
            } else {
                stringsArray[i] = nString;
            }
        }
    }
    for(let i = ii-1; i >=0; i--)
    {
        let a=Number( stringsArray[i]);
        result+=fPrint0_999(Number( stringsArray[i]),false)+' '+dischargeArray[i];
    }
return result;
}

//3. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

function fPrintNum0_999(n) {
let arrayN=n.split(' ');
let result=0;
let arrResult=[0];
let ii=0;
for(let i=0;i<arrayN.length;i++)
{
    for(let j=0;j<stringNumArray[0].length;j++)
    {
        let a=stringNumArray[0][j];
        let b=arrayN[i];
        if(arrayN[i]==stringNumArray[0][j]) {
            if ((arrayN[i] == 'тысяч') || (arrayN[i] == 'миллион') || (arrayN[i] == 'миллиард')) {
                arrResult[ii] *= stringNumArray[1][j];
                ii++;
                arrResult[ii]=0;
            } else
                arrResult[ii] += +stringNumArray[1][j];
            break;
        }
    }
}
for(let i=0;i<=ii;i++)
    result+=arrResult[i];
return result;
}

//1. Получить строковое название дня недели по номеру дня. 
function fDayWeek(day) {
    let week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
    if (day>=1 && day <=7)
        return week[day-1];
    else return 'error'

}

//4. Найти расстояние между двумя точками в двумерном декартовом пространстве.

function  fAB(x1,y1,x2,y2) {
   return Math.sqrt((x2-x1)**2+(y2-y1)**2);
}