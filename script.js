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

    // resets display

    let restartBtn = document.getElementById("restartBtn");

    restartBtn.addEventListener("click", () => {
        window.location.reload();
    })
   
    console.log(gameDisplay);
    console.log(gameBoardArr);

    const getGameDisplay = () => {
        return gameBoardArr;
    }

    // make values available to other modules
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
            let checkPlayer1 = players.player1.selection
            let checkPlayer2 = players.player2.selection

            console.log(players.player1.selection)
            console.log(players.player2.selection)

            for (let i = 0; i < 8; i++) {

            let checkWinningComb = winningCombination[i]

            // checks every item in checkWinningComb against players selection arr
            // have a feeling this will have a negative impact on performance?

            if (checkWinningComb.every(j => checkPlayer1.includes(j))) {
                player1Wins();
                return 
            } else if (checkWinningComb.every(j => checkPlayer2.includes(j))) {
                player2Wins();
                return
            } 
        }

        // if both arrays are full returns tie

        if (checkPlayer1.length === 5 && checkPlayer2.length === 4) {
            console.log("It's a tie!")
            popup.style.display = "block";
            winnerText.innerHTML = "It's a tie, try again!"
        }
        }

        // turn this into display objects to give a pop up
        // displays winners name

        let player1Wins = () => {
            console.log(players.player1.name + " is the winner!")
            popup.style.display = "block";
            winnerText.innerHTML = players.player1.name + " is the winner!"
        }

        let player2Wins = () => {
            console.log(players.player2.name + " is the winner!")
            popup.style.display = "block";
            winnerText.innerHTML = players.player2.name + " is the winner!"
        }

        // display winner on screen

        let popup = document.getElementById("myModal")
        let closeBtn = document.getElementById("close")
        let winnerText = document.getElementById("winnerText")

        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        })

    return {

    }
})();

const setName = (() => {
    let player1Name = document.getElementById("player1Name")
    let player2Name = document.getElementById("player2Name")
    let submitBtn = document.getElementById("submit")

    submitBtn.addEventListener("click", () => {
        //updates names
        players.player1.name = player1Name.value
        players.player2.name = player2Name.value

        // resets input fields 
        player1Name.value = ""
        player2Name.value = ""
    })

    return {
        player1Name,
        player2Name,
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
