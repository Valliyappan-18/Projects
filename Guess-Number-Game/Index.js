console.log("Guess My Number --- Let's start ");
let score = 10;
let Highscore = 0;
let Player = prompt("Enter Player Name: ");
document.querySelector(".player").textContent = " " + Player;
let secretNumber = Math.trunc(Math.random() * 10) + 1;

console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const myNumber = Number(document.querySelector(".number").value);

  console.log(myNumber, typeof myNumber);
  if (!myNumber) {
    document.querySelector(".message").textContent = "No Number";
  } else if (myNumber < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the Game";
    }
  } else if (myNumber > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the Game";
    }
  } else if (myNumber === secretNumber) {
    document.querySelector(".message").textContent = "corrct answer " + Player;
    document.querySelector(".message").style.color = "#5df542"
    console.log("Correct Answer " + Player);
    if (score > Highscore) {
      Highscore = score;
      document.querySelector(".hs").textContent = Highscore;
    }
  }
});

// Play Again Button

document.querySelector(".again").addEventListener("click", function () {
    score = 10;
     secretNumber = Math.trunc(Math.random() * 10) + 1;
     console.log(secretNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Let's Start guessing again";
  document.querySelector(".number").value = '';
});
