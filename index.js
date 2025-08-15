console.log("Hello World");


// Create a new function named getComputerChoice
// In this function create rng with Math.random * 100
// split the numbers equally into three groups then assign rock, paper, or scissors
// then test with console.log 
function getComputerChoice() {
    let randomNumber = Math.random();
    let randomNumberTwo = randomNumber * 100;
    let randomNumberThree = (Math.floor(randomNumberTwo));

    if (randomNumberThree <= 33) {
        randomNumberThree = "rock";
    } else if (randomNumberThree <= 66) {
        randomNumberThree = "paper";
    } else {
        randomNumberThree = "scissors";
    }

    return randomNumberThree;

}

console.log(getComputerChoice);
// Create a new function named getHumanChoice 
// set prompt to ask for Input 
// return input 

// Declare two variables for humanScore and computerScore with a starting value of 0

// create new function named playRound
// the two parameters will be humanChoice and getComputerChoice
// make parameters case insensitive
// write if else statements declaring the winner 
// then write console.log string value declaring the winner of the playRound 
// increment either the computers score or the humans score 

// create a new function named playGame
// declare playRound function and score variables so theyre inside playGame
// write if else statement first score to 5, wins