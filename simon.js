let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"]

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },500);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },500);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}, Please press your sequence`;
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    gameSeq.push(randomColor);
    let randomButton=document.querySelector(`.${randomColor}`);
    btnFlash(randomButton);
}

function checkAns(index){
    if(gameSeq[index]==userSeq[index]){
        h2.innerText=`Level ${level}, press ${gameSeq.length-index-1} more color to complete`;
        if(userSeq.length==gameSeq.length){
            h2.innerText=`Hurray!! Now, Level ${level+1} Please observe the blinking color`;
            setTimeout(levelUp,5000);
        }


    } else {
        h2.innerText=`Game over! Your score:${level-1} Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="pink";
        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}
        

