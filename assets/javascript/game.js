// Defining variables for the game 



var wordBank = ['notoriousbig','tupac','mobbdeep','eminem','tribecalledquest','snoopdog','gangstarr','wutangclan']

var randomNumberGenerator = [Math.floor(Math.random() * wordBank.length)];

var chosenArtist= wordBank[randomNumberGenerator]

var remainingGuesses = 10

var wins = 0

var letters = []

var wrongLetters = []

var output = []

var letterInWord = false;

function gameStart() {

remainingGuesses = 10
wrongLetters = [];
output = [];


for (let i =0;i < chosenArtist.length; i++){
    output.push(" _ ");
   
}


var guessingLines = document.getElementById("guessing-lines")
guessingLines.textContent = output.join(" ")

var numGuessRemain = document.getElementById("number-guess-remain")
numGuessRemain.textContent = "Number of guesses remaining: " + remainingGuesses

var lettersGuessed = document.getElementById("letters-already-guessed")
lettersGuessed.textContent = "Letters already guessed: " + wrongLetters.join(" ")

};



function checkLetter (letter) {
    

var letterInWord = false;

for (let i = 0; i < chosenArtist.length; i ++){

    if(letter===chosenArtist[i]){
    letterInWord = true; 
    };
}
if(letterInWord) {
    for(let i = 0;i < chosenArtist.length; i++){
        if(chosenArtist[i]===letter){
            output[i] = letter;
            console.log(output)
        }
    }
}else{
    wrongLetters.push(letter);
    remainingGuesses--;
    console.log(wrongLetters)
}


var guessingLines = document.getElementById("guessing-lines")
guessingLines.textContent = output.join(" ")

var numGuessRemain = document.getElementById("number-guess-remain")
numGuessRemain.textContent = "Number of guesses remaining: " + remainingGuesses

var lettersGuessed = document.getElementById("letters-already-guessed")
lettersGuessed.textContent = wrongLetters

};



gameStart();

document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkLetter(userGuess);
        };




