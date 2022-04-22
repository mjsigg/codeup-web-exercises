"use strict";

// 2 & 3
function showMultiplicationTable (input) {
    let z = Math.floor(Math.random() * 200 )+ 20
    for (let incr = 1; incr < 10; incr++){
        // console.log(input + ' * ' + incr + ' = ' + input * incr)
        // if (incr % 2 === 0) {
        //     console.log(incr * z + ' is even.')
        // }
        // console.log(incr * z + ' is odd.')

    }
}

// function randomNumber() {
//     let z = Math.floor(Math.random() * 200 )+ 20
//     return z
// }
// randomNumber()

showMultiplicationTable()

// 4

// function question4 (a) {
//     // let repeat = num.repeat
//     // for (let x = num; x <= num; num++) {
//     //     console.log(num)
//     // } if ( num > 9) {
//     //     console.log(repeat)
//     // }
//     let count = 1;
//     let x = 9;
//     for (a = 0; a<=5; a +=1){
//         console.log(x.repeat(count));
//         count +=1;
//     }
// }
//
//
// question4(9)

// let count = 1;
// let x = 9;
// for (a = 0; a<=5; a +=1){
//     console.log(x.repeat(count));
//     count +=1;
// }

function question5() {
    for (let x = 100; x > 4;) {
        console.log(x);
        x-=5
    }
}
question5()


