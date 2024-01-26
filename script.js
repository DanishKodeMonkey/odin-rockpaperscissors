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

  while (round < 5) {
    let playerSelection = prompt("Rock, paper, or scissors?")
    let computerSelection = getComputerChoice()
    let result = playRound(playerSelection, computerSelection)

    console.log(result)

    if (result === "You win!") {
      playerScore++
      round++
    } else if (result === "You lose!") {
      computerScore++
      round++
    } else if (
      result ===
      "Invalid choice, please choose between rock, paper, or scissors"
    ) {
      continue
    } else {
      round++
    }
    console.log(
      `Round ${round} complete! Player ${playerScore} - Computer ${computerScore}`
    )
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You win!")
  } else if (computerScore > playerScore) {
    console.log("The computer wins. Ouch...")
  } else {
    console.log("It's a draw! Everybody wins!")
  }
}

game()
