// Defining variables for the game 

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var remainingGuesses = 10

var hipHopArtists = ['notoriousbig','tupac','mobbdeep','eminem','tribecalledquest','snoopdog','gangstarr','wutangclan']

var emptyUnderscore = []

var randomNumberGenerator = [Math.floor(Math.random() * hipHopArtists.length)];

var chosenArtist= hipHopArtists[randomNumberGenerator]



// Creates variables to hold place for places we defined in out HTML

var directionsText = document.getElementById('directions-text');

var currentWord = document.getElementById('current-word');

var guessingLines = document.getElementById('guessing-lines');

var guessesRemainingText = document.getElementById('number-guess-remain');

var letterGuessedText = document.getElementById('letters-already-guessed');

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

 // Determines which key was pressed.
 var userLetter = event.key;
 
 for(let i=0; i<chosenArtist.length; i++){
if (i===userLetter){



}

 }
 }
