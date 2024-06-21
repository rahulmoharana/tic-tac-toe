const boxes =document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const btn = document.querySelector(".btn");
let currentPlayer;
let gameGrid;

const winningPosition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function initGame(){
    currentPlayer ="X";
    gameGrid =["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerText =""
        box.classList.remove("win");

    })
    btn.classList.remove("active");
    
    gameinfo.innerText = `Current Player - ${currentPlayer}`;
}
initGame();
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handelClick(index);
        console.log(index);
    })
})
function swapTurn(){
    if(currentPlayer =="X"){
        currentPlayer ="O"
    }else{
        currentPlayer ="X";
    }
    gameinfo.innerText =`Current Player - ${currentPlayer};`
}
function handelClick(index){
    if(gameGrid[index]==""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] =currentPlayer;
        swapTurn();
        checkGameover();
    }

}
function checkGameover(){
    let ans="";
    winningPosition.forEach((position)=>{
        if((gameGrid[position[0]] !=="" || gameGrid[position[1]]!== "" || gameGrid[position[2]!==""])&&
        (gameGrid[position[0]]===gameGrid[position[1]])&&(gameGrid[position[1]]=== gameGrid[position[2]])){

            if(gameGrid[position[0]==="X"]){
                ans = "x"
            }else{
                ans = "O"
            }
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");


        }
    })
    if( ans !==""){
        gameinfo.innerText = `Winner Player - ${ans}`;
        btn.classList.add("active");
        
    }


}

btn.addEventListener("click",initGame);