let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
 //winning pattern array
 let winningPattern = [ [0,1,2], [0,3,6], [2,5,8], [6,7,8], [3,4,5],[1,4,7], [0,4,8],[2,4,6],
];
//player 'X' plays first
let xTurn = true;
let count = 0;

//dsiable all buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
};

//enable all buttons(for new game and restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = "false";
    });
    //dsiable popup
    popupRef.classList.add("hide");
};

//new game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

//this function is executed when a player wins
function winFunction(letter) {
    disableButtons();
}

//win logic
const winChecker = () => {
    //loop through all win patterns
    for (let i of winningPattern){
        let[element1,element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //check if elements are filled
        //3 elements are sae and would give win as would
        if(element1 != "" && element2 != "" & element3 != ""){
            if(element1 == element2 && element2 == element3){
                //if all 3 buttons have same values then pass the values to winFunction
                winFunction(element1);
            }
        }
    }
};

//display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
    if (xTurn){
        xTurn = false;
        //display x
        element.innerText = "X";
        element.disabled = true;
    }
    else{
        xTurn = true;
        //display o
        element.innerText = "O";
        element.disabled = true;
    }
    //increment count
    count +=1;
    if(count === 9){
        //its a draw

    }
    //check for win on every click
    winChecker();
  });
});

//enable buttons and disable popup on page load
window.onload = enableButtons;
