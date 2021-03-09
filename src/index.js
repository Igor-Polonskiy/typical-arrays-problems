exports.min = function min(array) {
    if (array!=undefined) {
        if (array.length == 0) {
            return 0
        } else 
        array.sort((a, b) => a - b);
            return array[0];
    }
    return 0
}

exports.max = function max(array) {
    if (array) {
        if (array[0] == undefined) {
            return 0
        }
        array.sort((a, b) => b - a);
        return array[0];
    }
    return 0
}

exports.avg = function avg(array) {
    if (array) {
        if (array[0] == undefined) {
            return 0
        }
        let summ = 0
        array.forEach(item => {
            summ += item
        })
        return summ / array.length
    } else
        return 0
}
