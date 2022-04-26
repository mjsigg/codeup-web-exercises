(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let oscars = {}

    oscars.firstName = 'Will';
    oscars.lastname = 'Smith'
    console.log(oscars.firstName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    oscars.sayHello = function () {
        return 'Hello, ' + oscars.firstName + ' ' + oscars.lastname + '!'
    }

    console.log(oscars.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
// let shoppers = []
//     shoppers.name1 = 'Cameron'
//     shoppers.amount1 = '180'
//
//     shoppers.name2 = 'Ryan'
//     shoppers.amount2 = '250'
//
//     shoppers.name3 = 'George'
//     shoppers.amount3 = '320'


    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},

    ];
    console.log(shoppers[0].name);
    shoppers.sayHello = function () {
        return 'Hello' + name
    }
shoppers.forEach(function(shoppers) {
    if (shoppers.amount > 200) {
        console.log( 'Hello ' + shoppers.name + '.' + ' Your discount is: $'+  (shoppers.amount * .88).toFixed(2))
    } else {
        console.log('Hello ' + shoppers.name + '.' + ' Your total is: $' + shoppers.amount.toFixed(2) )
    }
})

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

 //    let books = []
 //    let bookcase = {books}
 //    books.number = 'Book number:'
 //    books.title = 'Game of Thrones', 'Great Expectations', 'Kingdom Come'
 //    books.author = {firstName:{}, lastname:{} }
 //    books.author.firstName = 'George', 'Charles', 'Marks'
 //    books.author.lastname = 'R.R. Martin', 'Dickens', 'Waid'
 //
 // console.log(bookcase[0])
 //
 //    let shoppers = [
 //        {name: 'Cameron', amount: 180},
 //        {name: 'Ryan', amount: 250},
 //        {name: 'George', amount: 320},
 //
 //    ];

    let books = [
            {title: 'Game of Thrones', author: {firstName:'George', lastName:'R.R Martin'}},
            {title: 'Kingdom Come', author: {firstName:'Mark', lastName:'Waid'}},
            {title: 'Great Expectation', author: {firstName:'Charles', lastName:'Dickens'}},
            {title: 'Greek Mythology', author: {firstName:'The', lastName:'Zeus'}},
            {title: 'Outliers', author: {firstName:'Malcom', lastName:'Gladwell'}},
    ]


    let testBooks = [
        {title:{}, author:{}}
    ]
    testBooks.title = 'book1', 'book2'
    console.log(testBooks)





    books.forEach(function (books) {
        console.log(books)
    })

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach(function (books,index) {
        console.log('Book # ' + (index + 1)+ " Title: " + books.title +  ' Author:' + books.author.firstName + ' ' + books.author.lastName)
    })

    console.log(books)
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



console.log('Answer to createBook:' + books)


})();
