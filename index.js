// console.log("Hello World");


// Create a new function named getComputerChoice
// In this function create rng with Math.random * 100
// split the numbers equally into three groups then assign rock, paper, or scissors
// then test with console.log 


function getComputerChoice(choice) {
    let randomNumber = Math.random();
    let randomNumberTwo = randomNumber * 100;
    let randomNumberThree = (Math.floor(randomNumberTwo));

    if (randomNumberThree <= 33) {
        choice = "rock";
    } else if (randomNumberThree <= 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;

}
let ComputerChoice = getComputerChoice();
// console.log(ComputerChoice);

// Create a new function named getHumanChoice 
// set prompt to ask for Input 
// return input 

function getHumanChoice() {
    let userInput = prompt("Pick: Rock, Paper, or Scissors");
    return userInput;
}
let HumanChoice = getHumanChoice();
// console.log(HumanChoice);

// Declare two variables for humanScore and computerScore with a starting value of 0

let humanScore = 0; 
let computerScore = 0;

// create new function named playRound
// the two parameters will be humanChoice and getComputerChoice
// make parameters case insensitive
// write if else statements declaring the winner 
// then write console.log string value declaring the winner of the playRound 
// increment either the computers score or the humans score 

// function playRound(theHumanChoice, theComputerChoice) {
//     theHumanChoice = HumanChoice.toLowerCase(); 
//     theComputerChoice = ComputerChoice; 

// if (theHumanChoice == theComputerChoice) {
//     console.log("You tied, loser.");
// } else if (theHumanChoice == "rock" && theComputerChoice == "scissor" || theHumanChoice == "scissor" && theComputerChoice == "paper" || theHumanChoice == "paper" && theComputerChoice == "rock") {
//     console.log("You win!");
//     ++humanScore; 
// } else {
//     console.log("You lose!");
//     ++computerScore; 
// }
// }

// playRound(HumanChoice, ComputerChoice);

// create a new function named playGame
// declare playRound function and score variables so theyre inside playGame
// write if else statement first score to 5, wins



    function playRound(theHumanChoice, theComputerChoice) {

        function getHumanChoice() {
        let userInput = prompt("Pick: Rock, Paper, or Scissors");
        return userInput;
        }
        let HumanChoice = getHumanChoice();
        console.log(HumanChoice);

        function getComputerChoice(choice) {
    let randomNumber = Math.random();
    let randomNumberTwo = randomNumber * 100;
    let randomNumberThree = (Math.floor(randomNumberTwo));

    if (randomNumberThree <= 33) {
        choice = "rock";
    } else if (randomNumberThree <= 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;

}
let ComputerChoice = getComputerChoice();
console.log(ComputerChoice);

        theHumanChoice = HumanChoice.toLowerCase(); 
        theComputerChoice = ComputerChoice; 

        if (theHumanChoice == theComputerChoice) {
        console.log("You tied, loser.");
        } else if (theHumanChoice == "rock" && theComputerChoice == "scissors" || theHumanChoice == "scissors" && theComputerChoice == "paper" || theHumanChoice == "paper" && theComputerChoice == "rock") {
        console.log("You win!");
        ++humanScore; 
        console.log("Your score", humanScore);
        console.log("Computer score", computerScore);
        } else {
        console.log("You lose!");
        ++computerScore; 
        console.log("Your score", humanScore);
        console.log("Computer score", computerScore);
        }
    }


        while (humanScore < 5 || computerScore < 5) {
            playRound(HumanChoice, ComputerChoice); 

            if (humanScore >= 5) {
                console.log("You have won the game!");
                break; 
            } else if (computerScore >= 5) {
                console.log("You lost the game to a computer :(");
                break;
            }
        }

//This code threw an error because the loop needed to be outside the code
// let TheFinalGame = playGame(); 
// console.log(TheFinalGame);