// module
// if you only need one of something, use a module
// remember to add parenthesis at the end of a module

const gameBoard = (() => {
    let gameDisplay = document.getElementById("gameDisplay");
    let gameBoardArr = [];
    let newDiv; 

    // creates grid for gameboard

    for (i = 0; i < 9; i++) {
        newDiv = document.createElement("div");    
        newDiv.className = "square";
        newDiv.id = i;
        newDiv.innerHTML = "O"
        gameBoardArr.push(newDiv);
        gameDisplay.appendChild(newDiv);
    }
   
    console.log(gameDisplay);
    console.log(gameBoardArr);

    const getGameDisplay = () => {
        return gameBoardArr;
    }

    // make values available to other modules
    // call as function ();
    return {
        getGameDisplay
    }

})();

const displayController = (() => {
    let gameBoardArr = gameBoard.getGameDisplay();
    let checked;
    console.log(gameBoard.getGameDisplay());
    console.log(gameBoardArr);

    // checks if div has been clicked 
        gameBoardArr.forEach(gameBoardArr => {
            gameBoardArr.addEventListener("click", () => {
                gameBoardArr.innerHTML = "X"
                checked = gameBoardArr.id;
                console.log(checked)
             //   players.player1.selection.push(checked)
                // check updated array
                console.log(players.player1)
                addToSelection(checked)
                return checked;
                
            })   
            
        })


        let addToSelection = () => {
            console.log("add to selection launched")

            for (let i = 0; i < players.player1.selection.length; i ++) {
                if (players.player1.selection[i] == undefined) {
                    players.player1.selection.push(checked);
                    console.log(players.player1)
                } 
                
            }
        }
    return {

    }
})();

const players = (() => {
    let player1 =  {
        name: "Player 1",
        marker: "X",
        selection: []
    }

    let player2 = {
        name: "Player 2",
        marker: "O",
        selection: []
    }
console.log("Player 1 selection is " + player1.selection)
console.log("Player 2 selection is " + player2.selection)

return {
    player1,
    player2,
}

})();



const playGame = () => {



}
