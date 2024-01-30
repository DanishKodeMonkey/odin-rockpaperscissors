function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  return computerChoice
}

function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase()
  let computerSelection = getComputerChoice()

  let roundResult = () => {
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
  console.log(roundResult())
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.value
    playRound(playerSelection)
  })
})
