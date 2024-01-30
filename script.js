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
          return "You lose!"
        case "scissors":
          return "You win!"
      }
      break
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You win!"
        case "paper":
          return "It's a tie!"
        case "scissors":
          return "You lose!"
      }
      break
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You lose!"
        case "paper":
          return "You win!"
        case "scissors":
          return "It's a draw!"
      }
      break
    default:
      return "Invalid choice, please choose between rock, paper, or scissors"
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0
  let round = 0
}

game()
