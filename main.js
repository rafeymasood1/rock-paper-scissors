const elements = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    // 0,1,2 for rock, paper, scissors 
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
    let winner = "none";
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

console.log("Welcome To Rock Paper Scissors\nPlay? (y/n)");
while(1){
    
let choice = getHumanChoice();
let computerChoice = getComputerChoice();
let winner = playRound(choice, computerChoice); 
console.log(`${winner} won!`);
console.log(`Computer score ${computerScore}, Your Score ${humanScore}`);
}
