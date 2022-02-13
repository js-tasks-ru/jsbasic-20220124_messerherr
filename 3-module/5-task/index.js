function getMinMax(str) {

    let newArr = str.split(" ");

    let numberArr = newArr.filter(item => isFinite(item));

    let result = {
        min: Math.min.apply(null, numberArr),
        max: Math.max.apply(null, numberArr),
    };
    return result;
}
