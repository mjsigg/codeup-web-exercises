const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//     Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//     Use .reduce to get the longest email from the list of users.
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let data = users.map(function(all) {
    return all.languages
})

console.log(data)

let threeLangsPlus = users.filter(function(data) {
    return data.languages.length >= 3
})

console.log(threeLangsPlus)

let uniqueLang = users.filter(function(data) {
    if (data.languages !== users.languages) {
        return data.languages
    }
});

console.log(uniqueLang)

let emailQuestion = users.map(function (email) {
    return email.email
})

console.log(emailQuestion)


let longestEmail = users.reduce(function(total,user) {
    let result =  user.email.length - total

    if(result === user.email.length) {
        return user
    }

},0)

console.log(longestEmail)

const introduction = users.reduce((str,user,index) => {
    if(index === users.length-1) {
        return `${str}${user.name}.`;
    } else {
        return `${str}${user.name},`
    }
}, 'Your instructors are:');

console.log(introduction)