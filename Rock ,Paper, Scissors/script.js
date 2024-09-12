let userScore = 0;
let compScore = 0;
const container = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
};

const gameDraw = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a draw. Play again.";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
    } else {
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
    }
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = false;
        if (userChoice === "Rock") {
            userWin = compChoice === "Scissor";
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Rock";
        } else if (userChoice === "Scissor") {
            userWin = compChoice === "Paper";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

container.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
