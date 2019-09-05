// Defining variables for the game 

var wordBank = ['notoriousbig','tupac','mobbdeep','eminem','tribecalledquest','snoopdogg','gangstarr','wutangclan']

var randomNumberGenerator = [Math.floor(Math.random() * wordBank.length)];
    
var chosenArtist = '';

var remainingGuesses = 10

var wins = 0

var losses = 0

var wrongLetters = []

var output = []

var letterInWord = false;


function gameStart() {

chosenArtist = wordBank[Math.floor(Math.random() * wordBank.length)];

    

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

        }
    }
}else{
    wrongLetters.push(letter);
    remainingGuesses--;
}


var guessingLines = document.getElementById("guessing-lines")
guessingLines.textContent = output.join(" ")

var numGuessRemain = document.getElementById("number-guess-remain")
numGuessRemain.textContent = "Number of guesses remaining: " + remainingGuesses

var lettersGuessed = document.getElementById("letters-already-guessed")
lettersGuessed.textContent = "Letters already guessed: " + wrongLetters

};

function playMedia() {
    if(chosenArtist==='notoriousbig'){
document.getElementById('image').src = "./assets/images/notorious.jpg";
    }else if(chosenArtist==='tupac'){
document.getElementById('image').src = "./assets/images/tupac.jpeg";
    }else if(chosenArtist==='mobbdeep'){
document.getElementById('image').src = "./assets/images/mobbdeep.jpg";
    }else if(chosenArtist==='eminem'){
document.getElementById('image').src = "./assets/images/eminem.jpg";
    }else if(chosenArtist==='tribecalledquest'){
document.getElementById('image').src = "./assets/images/tcq.jpg"; 
    }else if(chosenArtist==='snoopdogg'){
document.getElementById('image').src = "./assets/images/snoop.jpg";
    }else if(chosenArtist==='gangstarr'){
document.getElementById('image').src = "./assets/images/gangstarr.jpeg";
    }else if(chosenArtist==='wutangclan'){
document.getElementById('image').src = "./assets/images/wutang.jpeg";
    }
    
    };
    
    


function loopGame() {


    if((output.join("")) === chosenArtist){
wins++;
var winsText = document.getElementById('wins-text');
winsText.textContent = "Wins: " + wins;
playMedia();
gameStart();
    }else if(remainingGuesses === 0){
losses++;
var lossesText = document.getElementById('losses-text');
lossesText.textContent = "Losses: " + losses;
gameStart();
    }
};


gameStart();

document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(userGuess);
    loopGame();
        };


    
