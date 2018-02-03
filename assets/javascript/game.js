//VARIABLES
//=========================================================

// objects for our word
var word1 = {
  l1: "c",
  l2: "o",
  l3: "d",
  l4: "e",
  l5: "r"
};
// set the score to 0 to start
var score = 0;
// set the number of Guesses
var guesses = 15;
// variable to hold the index of the letters guessed
var letterIndex = 0;
// set an empty array to hold guessed letters
var guessedLetters = [];

//TRY SOME FUNCTIONS
//=========================================================
// function outOfGuesses() {
//   if (guesses === 0) {
//     return;
//   }
// }
// this didn't work, not sure why

//MAIN LOGIC
//=========================================================

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
  //if we're out of guesses, or we've won, end the Game
  // outOfGuesses(); ----- this function call not Working

  
  if (guesses === 0) {
    return;
  }
  if (letterIndex === 5) {
    return;
  }

  // update the number of guesses
  guesses = guesses -1;
  document.querySelector("#guesses").innerHTML = "Number Guesses Remaining " + guesses;

  // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
  var userInput = String.fromCharCode(event.which).toLowerCase();

  // check to see if user already guessed that letter, stop if they have

  //check index of for this
  // if (guessedLetters.indexOf(userInput) !== -1) {
  //
  // }
  for (var i = 0; i < guessedLetters.length; i++) {
    if (guessedLetters[i] === userInput) {
      return;
    }
  }

  // check to see if the userInput matches a letter
  if (userInput === word1.l1) {

    document.querySelector("#one").innerHTML = userInput;
    letterIndex++;

  } else if (userInput === word1.l2) {

    document.querySelector("#two").innerHTML = userInput;
    letterIndex++;

  } else if (userInput === word1.l3) {

    document.querySelector("#three").innerHTML = userInput;
    letterIndex++;

  } else if (userInput === word1.l4) {

    document.querySelector("#four").innerHTML = userInput;
    letterIndex++;

  } else if (userInput === word1.l5) {

    document.querySelector("#five").innerHTML = userInput;
    letterIndex++;

  } else {
    // if it is not one of the letter, push the guess into the guessed array
    guessedLetters.push(userInput);

  }

  // If user guessed all letters update score, stop the game
  // ==================================================== UPDATES FOR MORE WINS FIX
  if (letterIndex === 5) {
    score++;
    document.querySelector("#wins").innerHTML = "Wins " + score;
    return;
  }

  // push already guessed letters to user
  // ==================================================== HOW DO I GET THESE TO DISPLAY UPPERCASE?
  document.querySelector("#used-letters").innerHTML = "<p>" + guessedLetters + "</p>";

}
