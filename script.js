function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  return computerChoice
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "It's a draw!"
        case "paper":
          return "You lose! paper beats rock!"
        case "scissors":
          return "You win! rock beats scissors!"
      }
      break
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You win! paper beats rock!"
        case "paper":
          return "It's a tie!"
        case "scissors":
          return "You lose! scissors beat paper!"
      }
      break
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You lose! rock beats scissors!"
        case "paper":
          return "You win! scissors beats paper!"
        case "scissors":
          return "It's a draw!"
      }
      break
    default:
      return "Invalid choice, please choose between rock, paper, or scissors"
  }
}

const playerSelection = prompt("Rock, paper, or scissors?")
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
