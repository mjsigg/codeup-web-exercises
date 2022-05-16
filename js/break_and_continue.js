"use strict"

// function randomTo200() {
//     let numberSkip = Math.floor(Math.random(numberSkip % 2 === 1) * 200) + 1
//     if (numberSkip % 2 === 1) {
//         return true
//     }
// }

function promptPlease(){

}


function question6() {
    let askNumber = prompt('Please enter an odd number.')
    if (askNumber % 2 === 1 && askNumber < 1 && askNumber < 50) {
        return true
    } else if (askNumber === false || undefined || isNaN(parseFloat(askNumber))) {
        question6()
    }

    console.log('The number to skip is ' + askNumber + '.')

    for (let count = 1; count <= 50;count++) {
        if (count == askNumber) {
            console.log('Yikes! Skipping number: '+ askNumber)
            continue;
        }else {
            console.log('The number is: ' + count)
        }
    }
}

question6()