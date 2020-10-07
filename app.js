// let choices = [
//   {
//     name: 'rock',
//     img: 'https://vignette.wikia.nocookie.net/mskmdndwfka/images/3/36/Rock.jpg/revision/latest?cb=20200105230915'
//   },
//   {
//     name: 'paper',
//     img: 'https://rollandinc-production.s3.ca-central-1.amazonaws.com/app/uploads/2019/07/22145855/paper-digital-white.jpg'
//   },
//   {
//     name: 'scissors',
//     img: 'https://www.ikea.com/us/en/images/products/sy-scissors__0112301_PE263788_S5.JPG?f=s'
//   }
// ]

let choices = ['rock', 'paper', 'scissors']

let rock = {
  name: 'rock',
  img: 'https://pngimg.com/uploads/stone/stone_PNG13601.png'
}

let paper = {
  name: 'paper',
  img: 'https://lh3.googleusercontent.com/proxy/DBFLrmRyAOwyXNKyZfJN_JSqZVXoLs6QtT_X629WLxVhH01eoRg4Sel60KlnveZN7G_o93ajrelK2-Wstl8pUIkxfqH9r1rdG2DEsh6LefyeekYu6wg'
}

let scissors = {
  name: 'scissors',
  img: 'https://i.pinimg.com/originals/94/d2/c1/94d2c1845eaf483ae4e499e6777c2dd8.png'
}

function play(choice) {

  let playerChoice = choice



  let computerChoiceIndex = Math.floor(Math.random() * choices.length)

  let computerChoice = choices[computerChoiceIndex]

  drawChoices(playerChoice, computerChoice)

  determineWinner(playerChoice, computerChoice)

}

function drawChoices(playerChoice, computerChoice) {
  let playerChoiceElem = document.getElementById('player-choice')
  let computerChoiceElem = document.getElementById('computer-choice')

  if (playerChoice == 'rock') {
    playerChoiceElem.src = `${rock.img}`
  } else if (playerChoice == 'paper') {
    playerChoiceElem.src = `${paper.img}`
  } else {
    playerChoiceElem.src = `${scissors.img}`
  }

  if (computerChoice == 'rock') {
    computerChoiceElem.src = `${rock.img}`
  } else if (computerChoice == 'paper') {
    computerChoiceElem.src = `${paper.img}`
  } else {
    computerChoiceElem.src = `${scissors.img}`
  }

}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log("You win!")
    document.getElementById('winner').innerText = "You win!"
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log("Computer wins!")
    document.getElementById('winner').innerText = "Computer wins!"
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("You win!")
    document.getElementById('winner').innerText = "You win!"
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log("Computer wins!")
    document.getElementById('winner').innerText = "Computer wins!"
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win!")
    document.getElementById('winner').innerText = "You win!"
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log("Computer wins!")
    document.getElementById('winner').innerText = "Computer wins!"
  } else {
    console.log("It's a draw!")
    document.getElementById('winner').innerText = "It's a draw!"
  }

}