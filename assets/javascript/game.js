// Defining variables for the game 

var remainingGuesses = 10

var hipHopArtists = ['notoriousbig','tupac','mobbdeep','eminem','tribecalledquest','snoopdog','gangstarr','wutangclan']

var randomNumberGenerator = [Math.floor(Math.random() * hipHopArtists.length)];

var chosenArtist= hipHopArtists[randomNumberGenerator]



// Creates variables to hold place for places we defined in out HTML

var directionsText = document.getElementById("directions-text");

var currentWord = document.getElementById("current-word");

var guessingLines = document.getElementById("guessing-lines");

var guessesRemainingText = document.getElementById("number-guess-remain");

var letterGuessedText = document.getElementById("letters-already-guessed");


// variable sets empty string
var generateLines = ''


// function that generates underscores

function underscoreGenerator () {
    for (let i=0; i < chosenArtist.length; i++){
    generateLines += ' _ ';
    } return generateLines;
}



// creates underscores on html page 
guessingLines.textContent = underscoreGenerator()


// function to update with guesses 

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {


// makes variable for 
// Determines which key was pressed.
var userLetter = event.key;


 for(let i=0; i<chosenArtist.length; i++){
  if(chosenArtist[i] === userLetter){
      guessingLines.textContent = guessingLines.textContent.replace('_', chosenArtist[i]);
  }else{
  }
     }

 }


   