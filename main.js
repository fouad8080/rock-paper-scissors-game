const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors")
const result = document.getElementById("result");
let can_play=true;


const bot=["rock","paper","scissors"];


function getBotChoice(){
    const randomIndex = Math.floor(Math.random() * bot.length);
    return bot[randomIndex];
}
function dispaly_botchoice(botch,ifend){
    const bot_gambit=document.getElementById("bot"+botch);
        bot_gambit.style.borderColor=ifend == true ? "black":"blue";
}



function playGame(userChoice){
    if (can_play){
        can_play=false
        let gambit=document.getElementById(userChoice);
        gambit.style.borderColor="blue"
        const botChoice = getBotChoice();
        dispaly_botchoice(botChoice,false)
        if(userChoice === botChoice){
        document.body.style.backgroundColor = "green";
        result.textContent="IT'S A DRAW"
        }
        else{
            if (botChoice==="rock" || userChoice==="paper"){
                result.textContent="YOU WIN";
                document.body.style.backgroundColor="gold"
            }
            else if(botChoice==="rock" || userChoice==="scissors"){
                result.textContent="YOU LOSS such loser "
                document.body.style.backgroundColor="red"
            }
            else if (botChoice==="paper" || userChoice==="scissors"){
                result.textContent="YOU WIN"
                document.body.style.backgroundColor="gold"
            }
            else if (botChoice==="scissors" || userChoice==="rock"){
                result.textContent="YOU WIN "
                document.body.style.backgroundColor="gold"
            }
            
            else if(botChoice==="paper" || userChoice==="rock"){
                result.textContent="YOU LOSS such loser "
                document.body.style.backgroundColor="red"
            }
            else if(botChoice==="scissors" || userChoice==="paper"){
                result.textContent="YOU LOSS such loser "
                document.body.style.backgroundColor="red"
            }   
        }
        setTimeout(() => {
            gambit.style.borderColor="black";
            document.body.style.backgroundColor = "white";
            result.textContent="";
            can_play=true
            dispaly_botchoice(botChoice,true)
        }, 2000);
    }
}