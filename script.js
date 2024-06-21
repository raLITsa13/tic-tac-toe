let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//winning apttern array
let winningPattern = [ 
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
//player 'X' plays first
let xTurn = true;
let count = 0;

//disable all buttons
const disableButtons = () =>{
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
};

//enable all buttons
const enableButtons = () => {
    btnRef.forEach(element => {
        element.innerText = "";
        element.disabled = false;
    });
    //disable popup
    popupRef.classList.add("hide");
};

//this function is executed when a player wins
const winFunction = (letter) => {
    disableButtons();
    if(letter == "X"){
     msgRef.innerHTML = "&#x1F389; <br> 'X' wins";  
    }
    else{
        msgRef.innerHTML = "&#x1F389; <br> 'O' wins";
    }
};

//function for draw
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F61E; <br> It's a draw";
};

//new game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

//function to check for win
const winChecker = () => {
    //loop through all win patterns
    for(let i of winningPattern){
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //check if elements are filled
        //if 3 empty elements are same and would give win as would
        if (element1 != "" && element2 != "" & element3 != "")
            {
                if (element1 == element2 && element2 == element3)
                {
                   //if all 3 buttons have same value
                   winFunction(element1);
                }
            
            }
    }
};

//display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn)  {
            xTurn = false;
            //display X
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            xTurn = true;
            //display O
            element.innerText = "O";
            element.disabled = true;
        }
        //increment count on each click
        count+=1;
        if(count == 9){
            //it's a draw
            drawFunction();
        }
        //check for win on every click
        winChecker();
});
});
//enable buttons and disable popup on page load
window.onload = enableButtons;