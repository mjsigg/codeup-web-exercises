// Apr 26th 2022 Notes for Assessment
//
// function isANumber(num) {
//     return typeof num === 'number'
// }



// !isNaN(parseFloat(num))

function parseNumber(x) {
    return parseFloat(x)
}

function decrement(num) {
    if(!isNaN(parseNumber(num))) {
        return -- num;
    }else {
        return false
    }
}

function getHighestNumber(a,b,c) {
    if (isANumber(a) && isANumber(b) && isANumber(c)) {
        return Math.max(a,b,c)
    }
}

function add (x,y) {
    if (!isNaN(parseNumber(x)) && !isNaN(parseNumber(y))) {
    return parseNumber(x) + parseNumber(y)
    }else {
        return false
    }
}

function add (x,y) {
    if (!isNaN(parseNumber(x)) && !isNaN(parseNumber(y))) {
        return parseNumber(x) + parseNumber(y)
    }else {
        return false
    }
}

function add (x,y) {
    if (!isNaN(parseNumber(x)) && !isNaN(parseNumber(y))) {
        return parseNumber(x) * parseNumber(y)
    }else {
        return false
    }
}

function add (x,y) {
    if (!isNaN(parseNumber(x)) && !isNaN(parseNumber(y))) {
        return parseNumber(x) + parseNumber(x)
    }else {
        return false
    }
}

function sumOfSquares() {
    return add(square(x), square(y));
}

function isPalindrome (str) {
    if (typeof str !== 'string' ||
        !isNaN(parseNumber(str))) {
        return false;
    } else {
        str = str.toLowerCase();
        return str == -str.split('').reverse().join('');
    }
}