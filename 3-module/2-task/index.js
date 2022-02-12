function filterRange(arr, a, b) {
    return arr.filter(function(item) {
        if (a <= item && item <= b) {
            return item;
        }
    })

    //return arr.filter(item => (a <= item && item <= b));    -либо стрелочная функция
}