

let counter = 1
let total = 16
let base = 2

while (counter <= total) {

    console.log(Math.pow(base,counter))
    counter ++;

}
//
// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
let customerOrder = Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
//     1. Finally, commit the changes to your git repository, and push to GitHub.

console.log('Total cone count is:' + allCones)

let customerPurchase = allCones - customerOrder
let coneInventory = function coneInventory() {
    return customerPurchase
}

do{
    if(coneInventory >= 0) {
        console.log('Thank you for your purchase of ' + customerOrder + ' cones.')
    }
}while (coneInventory())

