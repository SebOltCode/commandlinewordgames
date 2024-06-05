const playerSelection = process.argv[2];
 
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 +1)
let computerChoice;
if (randomNumber === 1) {computerChoice = "scissors"}

if (randomNumber === 2) {computerChoice = "stone"}

if (randomNumber === 3) {computerChoice = "paper"}

return computerChoice;
};
// console.log(generateComputerChoice());

function play() {
    const computerChoice = generateComputerChoice();
  if (playerSelection === computerChoice) {
      console.log("it's a draw!");
  } else if ((playerSelection === 'stone' && computerChoice === 'scissors')) {
      console.log("You win! Rock beats scissors.");
  } else if ((playerSelection === 'stone' && computerChoice === 'paper')) {
      console.log("You lose! Paper beats rock."); 
  } else if ((playerSelection === 'paper' && computerChoice === 'stone')) {
      console.log("You win! Paper beats rock."); 
  } else if ((playerSelection === 'paper' && computerChoice === 'scissors')) {
      console.log("You lose! Scissors beats paper."); 
  } else if ((playerSelection === 'scissors' && computerChoice === 'paper')) {
      console.log("You win! Scissors beats paper."); 
  } else if ((playerSelection === 'scissors' && computerSelection === 'stone')) {
      console.log("You lose! Rock beats scissors."); 
 }

}
play();