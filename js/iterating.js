(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Will','Smith', 'Chris', 'Rock']

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
// for loop
    for (names; names < names.length; names--) {

    } console.log(names)

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for (names; names < names.length; names--) {
    //
    // } console.log(names)
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function (output) {
    console.log(output)
})
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function returnFirst() {
        return names[0]
    }

    function returnSecond() {
        return names[1]
    }

    function returnLast() {
        return names[3]
    }

    returnFirst()
    returnSecond()
    returnLast()
    console.log(returnFirst(),returnSecond(),returnLast())
})();
