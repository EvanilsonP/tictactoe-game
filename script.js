/*
We store our game status element here to allow us to more easily 
use it later on 
*/
const statusDisplay = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
/*
We set the inital message to let the players know whose turn it is
*/
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleCellClick() {

}
function handleRestartGame() {

}

document.querySelectorAll('.cell').forEach(cell => 
cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {
/*
We will save the clicked html element in a variable for easier further use
*/ 
const clickedCell = clickedCellEvent.target;
/*
Here we will grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid. 
Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an 
integer(number)
*/
const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
/* 
Next up we need to check whether the call has already been played, 
or if the game is paused. If either of those is true we will simply ignore the click.
*/
if(gameState[clickedCell] !== "" || !gameActive) {
    return;
}
/* 
If everything is in order we will proceed with the game flow
*/ 
handleCellPlayed(clickedCell, clickedCellIndex);
handleResultValidation();
};

function handleCellPlayed(clickedCell, clickedCellIndex) {
/*
We update our internal game state to reflect the played move, 
as well as update the user interface to reflect the played move
*/
gameState[clickedCellIndex] = currentPlayer;
clickedCell.innerHTML = currentPlayer;
}