const elements = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let index =  Math.floor(Math.random()*3);
    return elements[index];
}

function getHumanChoice(){
    do{
        var choice = prompt("Enter 'rock', 'paper' or 'scissors' ");
        choice = choice.toLowerCase();
    } while (! elements.includes(choice));
    return choice; 
}

function playRound(h, c){
    let winner = "No one";
    if (h == c){
        return winner;
    }
    else if (h == 'rock' && c != 'paper' || h == 'paper' && c !='scissors' || h == 'scissors' && c != 'rock'){
        winner = "human";
        humanScore++;
    }
    else if (c == 'rock' && h != 'paper' || c == 'paper' && h !='scissors' || c == 'scissors' && h != 'rock'){
        winner = "computer";
        computerScore++;
    }
    else {
        console.log("something went wrong");
    }

    return winner;
}

const results = document.querySelector("#results");
const score = document.querySelector("#score");

function handleClick(playerChoice) {
    if (computerScore >= 5 || humanScore >= 5) {
        results.textContent = `Game Over!`;
        return;
    }

    let winner = playRound(playerChoice, getComputerChoice());
    results.textContent = `${winner} Won`;
    score.textContent = `Computer Score ${computerScore}, Human Score ${humanScore}`;

    if (computerScore >= 5 || humanScore >= 5) {
        results.textContent = `Game Over! ${winner} is the winner`;
    }
}

document.querySelector("#rock").addEventListener("click", () => handleClick("rock"));
document.querySelector("#paper").addEventListener("click", () => handleClick("paper"));
document.querySelector("#scissors").addEventListener("click", () => handleClick("scissors"));
document.querySelector("#restart").addEventListener("click", () => {
    computerScore = 0;
    humanScore = 0;
    results.textContent = "";
    score.textContent = "";
});


