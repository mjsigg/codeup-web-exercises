
////codeup

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this

function acceptGitHubUserName (userName, returnPromise) {
    const URL = `https://api.github.com/users/${userName}/events/public`

    fetch(URL, {headers: {Authorization: `token ${GITHUB_KEY}`}})
        .then(response => response.json())
        // .then(results => console.log(results))
        .then(results => console.log(results[0].created_at))
        .catch(error => console.error(error))
}


acceptGitHubUserName('mjsigg')







// const octokit = new Octokit({
//     auth: GITHUB_KEY
// })
//
// await octokit.request('GET /users/{username}/events/public', {
//     username: mjsigg
// })

// function getGitHubUserName ()