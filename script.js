function determineWinner(humanchoice, computerchoice) {
    if(humanchoice === computerchoice){
        return "It's a tie!";
    } else if(humanchoice === "rock"){
        if(computerchoice === "scissors"){
            return "You win!";
        } else {
            return "Computer wins!";
        }
    } else if(humanchoice === "paper"){
        if(computerchoice === "rock"){
            return "You win!";
        } else {
            return "Computer wins!";
        } 
    } else if(humanchoice === "scissors"){
        if(computerchoice === "paper"){
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
}
const choices = ["rock", "paper", "scissors"];
const humanchoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
const computerchoice = choices[Math.floor(Math.random() * choices.length)];
const result = determineWinner(humanchoice, computerchoice);
alert(`You chose: ${humanchoice}\nComputer chose: ${computerchoice}\n${result}`);
