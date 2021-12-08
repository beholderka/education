
//1.	Найти минимальный элемент массива
function  fArrayMin(arr) {
    if (arr.length>0)
    {
        let min=arr[0];
        for (let i=0;i<arr.length;i++)
        {
            if (min>arr[i])
                min=arr[i];
        }
        return min;
    }
    else
        return 'error';
}

//2.	Найти максимальный элемент массива
function  fArrayMax(arr) {
    if (arr.length>0)
    {
        let max=arr[0];
        for (let i=0;i<arr.length;i++)
        {
            if (max<arr[i])
                max=arr[i];
        }
        return max;
    }
    else
        return 'error';
}
//3.	Найти индекс минимального элемента массива
function  fArrayMinIndex(arr) {
    if (arr.length>0)
    {
        let min=arr[0];
        let index=0;
        for (let i=0;i<arr.length;i++)
        {
            if (min>arr[i]) {
                min = arr[i];
                index=i;
            }
        }
        return index;
    }
    else
        return -1;
}
//4.	Найти индекс максимального элемента массива
function  fArrayMaxIndex(arr) {
    if (arr.length>0)
    {
        let max=arr[0];
        let index=0;
        for (let i=0;i<arr.length;i++)
        {
            if (max<arr[i]) {
                max = arr[i];
                index=i;
            }
        }
        return index;
    }
    else
        return -1;
}
//5.	Посчитать сумму элементов массива с нечетными индексами
function  fEvalSum(arr) {
    if (arr.length>0)
    {
        let sum=0;
        for (let i=0;i<arr.length;i++)
        {
            if (i%2!=0) {
                sum+= arr[i];
            }
        }
        return sum;
    }
    else
        return 'error';
}
//6.	Сделать реверс массива (массив в обратном направлении)
function fRevers(arr) {
    let temp;
    let j=arr.length-1;
    for (let i=0;i<arr.length;i++)
    {
        if(i<(arr.length/2))
        {
            temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            j--;
        }
        else break;
    }
return arr;
}
//7.	Посчитать количество нечетных элементов массива
function fnEvalArray(arr) {
    let count=0;
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
            count++;
    }
    return count;
}
//8.	Поменять местами первую и вторую половину массива, например, для массива
// 1 2 3 4, результат 3 4 1 2
function fSwap(arr) {
    let temp;
    let j=arr.length/2;
    if(arr.length%2!=0)
        j-=0.5;

    for (let i=0;i<arr.length;i++)
    {
        if(i<(arr.length/2))
        {
            temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            j++;
        }
        else break;
    }
    return arr;
}

//9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
function  fBubbleSort(arr) {
    let min;
    let temp;
    for (let j = 0; j < arr.length; j++) {
        let f = 0;
        min = j;
        for (let i = j; i < arr.length - j; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                f = 1;
            }
            if (arr[i] < arr[min]) {
                min = i;
            }
        }
        if (f = 0) break;
        if (min != j) {
            temp = arr[j];
            arr[j] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function  fSelectSort(arr) {
    for (let i = 0; i < arr.length-1; i++)
    {
        let min = i;
        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[j] < arr[min])
            {
                min = j;
            }
        }
        let dummy = arr[i];
        arr[i] = arr[min];
        arr[min] = dummy;
    }
    return arr;
}

function  fInsertSort(arr) {
    let i;
    for (let j = 1; j < arr.length; j++)
    {
        let key = arr[j];
        i=j-1;
        while (i>=0 && arr[i]>key)
        {
            arr[i+1]=arr[i];
            i--;
        }
        arr[i+1]=key;
    }
    return arr;
}



//10.	Отсортировать массив (Quick, Merge, Shell, Heap)
//быстрая сортировка
//метод возвращающий индекс опорного элемента
function Partition(array, minIndex, maxIndex)
{
    let pivot = minIndex - 1;
    for (let i = minIndex; i < maxIndex; i++)
    {
        if (array[i] < array[maxIndex])
        {
            pivot++;
            let temp=array[pivot];
            array[pivot]=array[i];
            array[i]=temp;
        }
    }

    pivot++;
    let temp=array[pivot];
    array[pivot]=array[maxIndex];
    array[maxIndex]=temp;
    return pivot;
}
function QuickSort(array, minIndex, maxIndex)
{
    if (minIndex >= maxIndex)
    {
        return array;
    }

    let pivotIndex = Partition(array, minIndex, maxIndex);
    QuickSort(array, minIndex, pivotIndex - 1);
    QuickSort(array, pivotIndex + 1, maxIndex);

    return array;
}

function fQuickSort(array)
{
    return QuickSort(array, 0, array.length - 1);
}


//метод для слияния массивов
function Merge(array,lowIndex, middleIndex, highIndex)
{
    let left = lowIndex;
    let right = middleIndex + 1;
    let tempArray=[0];
    let index = 0;

    while ((left <= middleIndex) && (right <= highIndex))
    {
        if (array[left] < array[right])
        {
            tempArray[index] = array[left];
            left++;
        }
        else
        {
            tempArray[index] = array[right];
            right++;
        }

        index++;
    }

    for (let i = left; i <= middleIndex; i++)
    {
        tempArray[index] = array[i];
        index++;
    }

    for (let i = right; i <= highIndex; i++)
    {
        tempArray[index] = array[i];
        index++;
    }

    for (let i = 0; i < tempArray.length; i++)
    {
        array[lowIndex + i] = tempArray[i];
    }
}

//сортировка слиянием
function MergeSort(array, lowIndex, highIndex)
{
    if (lowIndex < highIndex)
    {
        let middleIndex = (lowIndex + highIndex) / 2;
        if (middleIndex%2!=0)
            middleIndex-=0.5;
        MergeSort(array, lowIndex, middleIndex);
        MergeSort(array, middleIndex + 1, highIndex);
        Merge(array, lowIndex, middleIndex, highIndex);
    }

    return array;
}

function fMergeSort( array)
{
    return MergeSort(array, 0, array.length - 1);
}

function fShellSort(array)
{
    //расстояние между элементами, которые сравниваются
    let d = array.length / 2;
    if (array.length/2%2!=0)
        d-=0.5;
    while (d >= 1)
    {
        for (let i = d; i < array.length; i++)
        {
            let j = i;
            while ((j >= d) && (array[j - d] > array[j]))
            {
                let temp=array[j];
                array[j]=array[j-d];
                array[j-d]=temp;
                j = j - d;
            }
        }

        d = d / 2;
    }

    return array;
}

//пирамидальная

function fSortHeap (arr)
{
    let n = arr.length;

    // Построение кучи (перегруппируем массив)
    for (let i = n / 2 - 1; i >= 0; i--)
    fHeap(arr, n, i);

    // Один за другим извлекаем элементы из кучи
    for (let i=n-1; i>=0; i--)
    {
        // Перемещаем текущий корень в конец
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // вызываем процедуру fHeap на уменьшенной куче
        fHeap(arr, i, 0);
    }
    return arr;
}

// Процедура для преобразования в двоичную кучу поддерева с корневым узлом i, что является
// индексом в arr[]. n - размер кучи

function fHeap(arr, n, i)
{
    let largest = i;
// Инициализируем наибольший элемент как корень
    let l = 2*i + 1; // left = 2*i + 1
    let r = 2*i + 2; // right = 2*i + 2

    // Если левый дочерний элемент больше корня
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // Если правый дочерний элемент больше, чем самый большой элемент на данный момент
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // Если самый большой элемент не корень
    if (largest != i)
    {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Рекурсивно преобразуем в двоичную кучу затронутое поддерево
        fHeap(arr, n, largest);
    }
}