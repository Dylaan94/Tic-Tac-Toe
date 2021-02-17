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
        newDiv.innerHTML = "";
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

    let winningCombination = [
        ["0","1","2"],
        ["3","4","5"],
        ["6","7","8"],
        ["0","3","6"],
        ["1","4","7"],
        ["2","5","8"],
        ["0","4","8"],
        ["2","4","6"]
    ]

    let gameBoardArr = gameBoard.getGameDisplay();
    let checked;
    console.log(gameBoard.getGameDisplay());
    console.log(gameBoardArr);

    // checks if div has been clicked 
        gameBoardArr.forEach(gameBoardArr => {
            gameBoardArr.addEventListener("click", () => {
                checked = gameBoardArr.id;
                console.log(players.player1)
                console.log(players.player2)
                addToSelection(checked)
                return checked;
            })   
        })


        let addToSelection = () => {
           console.log("add to selection launched")
           console.log(checked)

           // checks if part of the array has been filled, adds if not
           // there must be a simpler way to do this??

           for (let i = 0; i < 5; i++) {
               if (players.player1.selection[i] == undefined){
                   players.player1.selection.push(checked)
                   gameBoardArr[checked].innerHTML = "X"
                   checkForWin();
                   return players.player1
              
                } else if (
                   players.player1.selection[i] !== undefined 
                   && players.player2.selection[i] == undefined
                ) {
                    players.player2.selection.push(checked);
                    gameBoardArr[checked].innerHTML = "O"
                    checkForWin();
                    return players.player1

                } else if (
                    players.player1.selection[i] !== undefined 
                    && players.player1.selection[i+1] == undefined
                    && players.player2.selection[i] == undefined
                ) {
                    players.player1.selection.push(checked)
                    gameBoardArr[checked].innerHTML = "X"
                    checkForWin();
                    return players.player1

               } else if (
                   players.player1.selection[i] !== undefined 
                && players.player1.selection[i+1] !== undefined 
                && players.player2.selection[i] == !undefined 
                && players.player2.selection[i+1] == undefined
                ) {
                    players.player2.selection.push(checked);
                    gameBoardArr[checked].innerHTML = "O"
                    checkForWin();
                    return players.player1
                }
    
           }

      
            
        }

        let checkForWin = () =>{

            // need to stringify values to check them.
            // need to iterate through winning combinations in such a way that 
            // all conbinations can be checked

            // need to compare arrays where order isnt taken into account
            // need to check if player array CONTAINS winning comb array

            console.log(players.player1.selection)
            console.log(players.player2.selection)

            console.log(winningCombination[0]);

            for (let i = 0; i < 7; i++) {

            let winningString = winningCombination[i].toString();
            
            let checkPlayer1 = players.player1.selection
            let checkPlayer2 = players.player2.selection
            

            if (winningString == checkPlayer1) {
                console.log("Player 1 wins!")
            } else if (winningString == checkPlayer2) {
                console.log("Player 2 wins!")
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
