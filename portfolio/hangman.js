var trackGuesses = 8;
var guess = " ";

var pickWord = function () {
    var words = [
        //"javascript",
        "monkey",
        "amazing",
        "pancake",
        "moose",
        "dolphin",
        "author",
        "curtain"
    ];
    // Pick a random word
    return words[Math.floor(Math.random() * words.length)];
}

var setupAnswerArray = function (word) {
    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

var showPlayerProgress = function (answerArray) {
    if(remainingLetters===0){
        alert("Congratulations  you guessed the word correctly "+ word);
    
    }
    alert(answerArray.join(" "));
}

var getGuess = function () {

    return prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
    

}


var updateGameState = function (guess, word, answerArray, remainingLetters, trackGuesses) {
    correctGuesses = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === "_") {
                answerArray[j] = guess;
                correctGuesses++;
                remainingLetters--;
                trackGuesses--;
            } else {
                alert("You already entered this letter.");
                trackGuesses--;
    
            }
        }
    }
    if (correctGuesses === 0) {
        alert("The letter is incorrect.");
        
    }
    return correctGuesses;
}

var showAnswerAndCongratulatePlayer = function (answerArray,remainingLetters,trackGuesses) {
    showPlayerProgress(answerArray);

   // alert("Congratulations you guessed the word correctly " + answerArray.join(" "));
    alert(answerArray.join(" "));
    if (trackGuesses >= 0 && remainingLetters <= 0) {
        alert("Congratulations! You guessed the word: " + word);
    } else {
        alert("Too bad! The word was: " + word);
    }

}

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;


while (remainingLetters > 0 && trackGuesses>0){
    alert("You have " + trackGuesses + " left.");
    showPlayerProgress(answerArray);
    var guess = getGuess();
   trackGuesses--;
    if (guess === null) {
        alert("You quit too soon")
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");

    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;


    }
}
showAnswerAndCongratulatePlayer(answerArray)

