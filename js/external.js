
alert('Welcome to my Website!')

let favoriteColor = prompt('What is your favorite color?')
alert('Great, ' + favoriteColor +'is my favorite color too!')

let userInputMovieLM = prompt('How many days would you like to rent little mermaid?')
alert(userInputMovieLM + ' days. Your total is $' + userInputMovieLM * 3 +'.')

let userInputMovieBB = prompt('How many days would you like to rent Brother Bear?')
alert(userInputMovieBB + ' days. Your total is $' + userInputMovieBB * 3 + '.')

let userInputMovieHS = prompt('How many days would you like to rent Hercules?')
alert(userInputMovieHS + ' days. Your total is $' + userInputMovieBB * 3 + '.')

function googlePay() {
    let promptHours = prompt('How many hours did you work at Google?')
    alert('Your pay is $ ' + promptHours * 400)
}

googlePay()

function amazonPay() {
    let promptHours = prompt('How many hours did you work at Amazon?')
    alert('Your pay is $ ' + promptHours * 380 + '.')
}

amazonPay()

function facebookPay() {
    let promptHours = prompt('How many hours did you work at Facebook?')
    alert('Your pay is $ ' + promptHours * 350 + '.')
}

facebookPay()

function studentEnrolled() {
    if (confirm("Is your class full?") == true) {
        alert("Sorry you aren't eligible to enroll.")
    } else if (confirm('Is there a conflict with your schedule?') == true) {
        alert("Sorry you aren't eligible to enroll.")
    } else (alert('Congratulations, you are enrolled.'))
}

studentEnrolled()

function productOffer () {
    if (prompt('How many items will you purchase?') < 2) {
        alert('Sorry, we are unable to extend an offer.')
    } else if (confirm('Is your offer expired?') == true) {
        alert('Sorry, we are unable to extend an offer.')
    } else (alert('We would like to extend you an offer.'))
}

productOffer()