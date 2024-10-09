// Generate a random number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;

// Variable to store the user's guess
let userGuess = null;

// While loop to keep asking until the correct number is guessed
while (userGuess !== correctNumber) {
    // Prompt the user to guess a number
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

    // Check if the input is a valid number
    if (isNaN(userGuess)) {
        console.log("Please enter a valid number.");
    } else if (userGuess < correctNumber) {
        console.log("Too low! Try again.");
    } else if (userGuess > correctNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations! You've guessed the correct number: " + correctNumber);
    }
}
