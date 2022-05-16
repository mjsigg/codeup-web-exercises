

/// 7 * ''

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++){
        console.log(num + '*' + i + '=' + (num*i));
    }
}

showMultiplicationTable(7)

// console.log(showMultiplicationTable(7));
//
// function showMultiplicationTable(num) {
//     for (let p = 1; p <= 10; p++) {
//         console.log(num + " x " + p + " = " + (num * p));
//     }
// }

function randomNumber() {

    for (let i = 0; i <= 10; i++){
        let z = Math.floor(Math.random() * 200) + 20
        if (z % 2 === 0) {
            console.log(z + 'is an even number.')
        }else
            console.log(z + 'is an odd number.')
    }
        }


randomNumber()


function subtractByFive() {
    for (let count = 100; count >= 0; count -=5){
        console.log(count);
    }
}

subtractByFive()