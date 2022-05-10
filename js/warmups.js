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


// function allFirstLetters(arr) {
//     let bucket = '';
//     for (let el of arr) {
//         bucket +=el[0]
//     }
//     return bucket
// }
//
// const testArrStrings = ['dog','cat','frog','bat']
// console.log(allFirstLetters(testArrStrings))
//
// let arr1 = ['c','d','e','o','p','u']
// console.log(arr1.index(1, 4));
//
// function sumOfElements()  {
//     let arraySum = ([1,2,3,4,5])
//     return arraySum



//     console.log(arraySum.substring)
// }

// 03May2022

let product1 = {
    name: 'Hammar',
    priceInCents: 400,
    description: 'It is a a hammar.',
    inventory: 25034
}

let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}


// function returnProductEssentialDetails(product) {
//     console.log(product1.name,product1.priceInCents)
// }
//
// console.log(returnProductEssentialDetails());
//
// function returnProductAllEssentialDetails() {
//
//     let product1Array = [returnProductEssentialDetails(product1)]
//
// }


const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

let hamstersString = [hamsters].toString()
console.log(hamstersString);

function returnObject(){


}

returnObject()