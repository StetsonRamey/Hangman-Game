//VARIABLES
//=========================================================

// objects for our word
var word1 = {
  l1: "w",
  l2: "o",
  l3: "r",
  l4: "d",
  l5: "1"
};
// set the score to 0 to start
var score = 0;
// set the number of Guesses
var guesses = 15;
// variable to hold the index of the letters guessed
var letterIndex = 0;
// set an empty array to hold guessed letters
var guessedLetters = [];

//MAIN LOGIC
//=========================================================

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

  //if we're out of guesses, end the Game
  if (guesses === 0) {
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

    var targetClass = document.getElementById("two");
    targetClass.innerHTML = userInput;
    letterIndex++;

  } else if (userInput === word1.l3) {

    var targetClass = document.getElementById("three");
    targetClass.innerHTML = userInput;
    letterIndex++;

  } else if (userInput === word1.l4) {

    var targetClass = document.getElementById("four");
    targetClass.innerHTML = userInput;
    letterIndex++;

  } else if (userInput === word1.l5) {

    var targetClass = document.getElementById("five");
    targetClass.innerHTML = userInput;
    letterIndex++;

  } else {
    // if it is not one of the letter, push the guess into the guessed array
    guessedLetters.push(userInput);

  }

  // If user guessed all letters update score, stop the game
  if (letterIndex === 5) {
    score++;
    document.querySelector("#wins").innerHTML = "Wins " + score;
    return;
  }

  // push already guessed letters to user
  // ================================================================ HOW DO I GET THESE TO DISPLAY UPPERCASE?
  document.querySelector("#used-letters").innerHTML = "<p>" + guessedLetters + "</p>";

}
