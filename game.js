let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#Comp-score")
const genComputerChoice=()=>{
    const options=["rock","paper","scessior"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];

};
const drawGame=()=>{
    // console.log("Game was draw!");
    msg.innerText="Game was Draw, Play agin!";
    msg.style.backgroundColor="blue";
};
const showWinner=(userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;

        // console.log("You win!");
        msg.innerText=`You win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor="green";
    } else {
        // console.log("You lose");
        compScore++;
        compscorePara.innerText=compScore;
        msg.innerText=`You lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        
        
    }
    
};

const playGame= (userChoice) => {
    console.log("user choice=", userChoice);
    //Generate computer Choice
    const computerChoice= genComputerChoice();
    console.log("computer choice=",computerChoice);
    //draw match
    if(userChoice===computerChoice){
drawGame();
    } else  {
        let userWin=true;
        if(userChoice==="rock"){  // scessior, paper
userWin= computerChoice=== "paper" ? false : true;

        } else if(userChoice==="paper") { //scessior, rock
            userWin= computerChoice==="scessior" ? false : true;

        } else {
            //paper, rock
                userWin=computerChoice==="rock"? false : true;
            }
            showWinner(userWin, userChoice, computerChoice);
        }
           

    }

choices.forEach((choice)=> {
    
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id")
        
        playGame(userChoice);
    }
);
}

);