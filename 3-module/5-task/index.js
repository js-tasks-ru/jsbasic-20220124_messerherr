function getMinMax(str) {
    let newArray = str.split(" "); //разделям строку
    let numberArray = newArray.filter(item => isFinite(item)); //для проверки параметра на то, что он является конечным числом
    let result = { //вывод данных в массив по мин и макс
        min: Math.min.apply(null, numberArray),
        max: Math.max.apply(null, numberArray),
    };
    return result;
}
console.log(getMinMax(inputData));