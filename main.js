const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors")
const result = document.getElementById("result");



const bot=["rock","paper","scissors"];


function getBotChoice(){
    const randomIndex = Math.floor(Math.random() * bot.length);
    return bot[randomIndex];
}



function playGame(userChoice){
    let gambit=document.getElementById(userChoice);
    gambit.style.borderColor="blue"
    const botChoice = getBotChoice();
    console.log("Bot choice:", botChoice);
    if(userChoice === botChoice){
    document.body.style.backgroundColor = "green";
    result.textContent="IT'S A DRAW"
    }
    else{
        if (botChoice==="rock" || userChoice==="paper"){
            result.textContent="YOU LOSS such loser"
        }
        else if (botChoice==="paper" || userChoice==="scissors"){
            result.textContent="YOU LOSS such loser"
        }
        else if (botChoice==="scissors" || userChoice==="rock"){
            result.textContent="YOU WIN such winner"
        }
        else if(botChoice==="rock" || userChoice==="scissors"){
            result.textContent="YOU WIN such winner"
        }
        else if(botChoice==="paper" || userChoice==="rock"){
            result.textContent="YOU WIN such winner"
        }
        else if(botChoice==="scissors" || userChoice==="paper"){
            result.textContent="YOU WIN such winner"
        }   
    }
    setTimeout(() => {
        gambit.style.borderColor="black"
        document.body.style.backgroundColor = "white";
        result.textContent=""
    }, 2000);
    
}