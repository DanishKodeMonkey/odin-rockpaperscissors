function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  let computerSelection = choices[Math.floor(Math.random() * choices.length)]
  return computerSelection
}

// Button selector, triggers playRound
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", playRound)
})
//Score and round counters, starting at 0
let playerSelection = ""
let computerSelection = ""
let playerScore = 0
let computerScore = 0
let rounds = 0 + "/5"
let pScore = document.querySelector("#playerScore")
let cScore = document.querySelector("#computerScore")
let pChoice = document.querySelector("#playerChoice")
let cChoice = document.querySelector("#computerChoice")
let rResult = document.querySelector("#roundResult")

function playRound() {
  let computerSelection = getComputerChoice()
  let playerSelection = this.id
  pChoice.textContent = this.id
  cChoice.textContent = computerSelection

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "It's a draw!"
          break
        case "paper":
          computerScore++
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "You lose!"
          break
        case "scissors":
          playerScore++
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "You win"
          break
      }
      break
    case "paper":
      switch (computerSelection) {
        case "rock":
          playerScore++
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "You win"
          break
        case "paper":
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "It's a draw!"
          break
        case "scissors":
          computerScore++
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "You lose!"
          break
      }
      break
    case "scissors":
      switch (computerSelection) {
        case "rock":
          computerScore++
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "You lose!"
          break
        case "paper":
          playerScore++
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "You win"
          break
        case "scissors":
          console.log("PC Score: " + computerScore)
          console.log("Player Score: " + playerScore)
          rResult.textContent = "It's a draw!"
          break
      }
      break
    default:
      return "Invalid choice, please choose between rock, paper, or scissors"
  }

  updateScore()
  if (checkWinner()) {
    playerScore = computerScore = 0
    pChoice.textContent = cChoice.textContent = "?"
    rResult.textContent = "?"
    updateScore()
  }
}
function updateScore() {
  pScore.textContent = playerScore
  cScore.textContent = computerScore
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5
        ? "You win the game! Congratulations!"
        : "The computer wins the game, try again!"
    alert(winner)
    return true
  }
  return false
}
