let gameSeq = [];
let userSeq = [];
let highScore = 0;
let started = false;
let level = 0;
let color = ['red','yellow','green','blue'];
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

document.addEventListener('keypress', function(){
    if(started == false){
        console.log('game is started');
        started = true;

        levelUp();
    };
    
});

// Flash Button function start

function flashBtn(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },300);
};

// Starte Level Up function
function levelUp (){
    userSeq = [];
    level++;
    h2.innerText = `Level : ${level}`;

    let ranNum = Math.floor(Math.random() * 4);
    let ranColor = color[ranNum];
    let ranClass = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    flashBtn(ranClass);
};
// Here Check to array
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Press any key to start again <br> Your Score is : ${level}`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "cadetblue";
        },200);
        if(highScore < level){
            highScore = level;
            h3.innerHTML = `High Score Is : ${highScore}`;
        }else{
            h3.innerHTML = `High Score Is : ${highScore}`;
        }
        reStart();
    }
};

function reStart(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
};
// User Pres function is start here
function userBtnPress(){
    let btn = this;
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    flashBtn(btn);
    checkAns(userSeq.length - 1);
};
let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click', userBtnPress);
};