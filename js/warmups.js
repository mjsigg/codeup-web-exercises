"use strict"

console.log('Yay! I completed the warm-up!')

function fizzBuzz () {
    for (let count = 1; count < 101; count++) {
        if(count % 3 === 0 && count % 5 === 0) {
            console.log('FizzBuzz')
        }else if (count % 3 === 0) {
            console.log ('Fizz')
        }else if (count % 5 === 0) {
            console.log ('Buzz')
        } else {
            console.log ('Number is:' + count)
        }
    }
}

fizzBuzz()


// let arrOfStrings = ['dog','cat','frog','bat']
//
// function arrOfStrings(letter) {
// arrOfStrings.forEach(arrOfStrings,) {
//     letter.
//     }
// }


function allFirstLetters(arr) {
    let bucket = '';
    for (let el of arr) {
        bucket +=el[0]
    }
    return bucket
}

const testArrStrings = ['dog','cat','frog','bat']
console.log(allFirstLetters(testArrStrings))

let arr1 = ['c','d','e','o','p','u']
let index = 1,4
console.log(arr1.index(1, 4));






