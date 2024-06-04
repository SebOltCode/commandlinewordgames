
const Scissors = 1
const Stone = 2
const Paper = 3
const userChoice = process.argv
const ComputerChoice
const possiblechooices = Scissors + Stone + Paper

function ComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possiblechooices.length) + 1

  if (randomNumber === 1) {ComputerChoice = "Scissors"}
  
  if (randomNumber === 2) {ComputerChoice = "Stone"}

  if (randomNumber === 3) {ComputerChoice = "Paper"}
  
 
};
console.log(randomNumber);