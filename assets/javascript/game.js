// Defining variables for the game 



var wordBank = ['notoriousbig','tupac','mobbdeep','eminem','tribecalledquest','snoopdog','gangstarr','wutangclan']

var randomNumberGenerator = [Math.floor(Math.random() * wordBank.length)];

var chosenArtist= wordBank[randomNumberGenerator]

var remainingGuesses = 10

var wins = 0

var letters = []

var wrongLetters = []

var output = []


function gameStart() {

remainingGuesses = 10
wrongLetters = [];
output = [];


for (let i =0;i < chosenArtist.length; i++){
    output.push(" _ ");
    console.log(output)
   
}


var guessingLines = document.getElementById("guessing-lines")
guessingLines.textContent = output.join(" ")

var numGuessRemain = document.getElementById("number-guess-remain")
numGuessRemain.textContent = "Number of guesses remaining: " + remainingGuesses

var lettersGuessed = document.getElementById("letters-already-guessed")
lettersGuessed.textContent = "Letters already guessed: " + wrongLetters.join(" ")

};
gameStart()
// // variable sets empty string
// var generateLines = ''


// // function that generates underscores

// function underscoreGenerator () {
//     for (let i=0; i < chosenArtist.length; i++){
//     generateLines += ' _ ';
//     } return generateLines;
// }



// // creates underscores on html page 
// guessingLines.textContent = underscoreGenerator()


// // function to update with guesses 

//  // This function is run whenever the user presses a key.
//  document.onkeyup = function(event) {


// // makes variable for 
// // Determines which key was pressed.
// var userLetter = event.key;


//  for(let i=0; i<chosenArtist.length; i++){
//   if(chosenArtist[i] === userLetter){
//       guessingLines.textContent = guessingLines.textContent.replace('_', chosenArtist[i]);
//   }else{
//   }
//      }

//  }


