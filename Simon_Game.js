let gameSeq = [];
let userSeeq = [];
let btns = ["yellow","red","purple","green"]; 

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

// 1st Step -> Game was Started
document.addEventListener("keypress",function (){
    if (started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

// 2nd Step -> level Up -> button Flash -> Update Value 
function gameFlashFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    // random btn choose
    let ranIdx = Math.floor(Math.random()*4);
    let randColor = btns[ranIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(ranIdx);
    console.log(randColor);
    console.log(randbtn);
    gameFlash(randbtn);
}

// Event Listener 
function btnPress (){
    console.log(this);
    let btn = this;
    userFlash(btn);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

