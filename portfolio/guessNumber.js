

//let answer = prompt("Please guess the secret number(1-20)");
 //guess = parseInt(prompt("Please  guess the secret number(1-20)"));


/*

if (guess === secret) {
    alert("Correct Guess! ")
} else {
    alert("Sorry, incorrect Guess")

}
*/





///*
function getGuess() {
    return parseInt(prompt("Please  guess the secret number(1-20)"));
}
let secret = Math.floor(Math.random()*21);
let guess=getGuess();

while (guess != secret) {
    if (guess < secret) {
        alert("Incorrect,too low")
      
    } else if (guess > secret) {
        alert("Incorrect,too high")
       
    } 

    guess=getGuess();
}

alert("Correct Guess! "+guess)
//*/

