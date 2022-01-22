let board = [];
let rowBtns = document.getElementsByClassName('rowBtns');
let playerOne;
let playerTwo;


let Start = () =>{
    let rows = document.getElementsByClassName('boardRows');

    for (let row = 0; row < rows.length; row++){
        console.log(rows[row]);
        let rowDots = rows[row].getElementsByClassName('dot');

        board[row] = [];
        for (let dot = 0; dot < rowDots.length; dot++){
            board[row][dot] = rowDots[dot];
            console.log(board[row][dot]);
        }
    }
}
let getNames = () =>{
    playerOne = document.getElementById('player1Name').value;
    playerTwo = document.getElementById('player2Name').value;
    console.log(playerOne,playerTwo);
}
let RemoveDot = (row, evt) => {
    let dotsLeft = board[row].length

    if (dotsLeft == 1){
        board[row][dotsLeft - 1].style.visibility = 'hidden';
        board[row] = 0;
        evt.disabled = true;
        evt.isEmpty = true;

        CheckWin();
    }
    else if (dotsLeft > 0){
        board[row][dotsLeft - 1].style.visibility = 'hidden';
        board[row].pop();
    }

    for (btn in rowBtns){
        if (rowBtns[btn] != evt){
            rowBtns[btn].disabled = true;
        }
    }
}

let NextTurn = () => {
    for (btn in rowBtns){
        if (rowBtns[btn].isEmpty != true){
            rowBtns[btn].disabled = false;
            
        if(counter == 1){
            var chat= document.getElementById("playerTurnIndicator").value;
            var chatbot = document.getElementById('chatboxText');
            chatbot.innerText = playerOne +" says: " + chat;
            console.log(counter);
        }else if(counter == 0){
            var chat= document.getElementById("playerTurnIndicator").value;
            var chatbot = document.getElementById('chatboxText');
            chatbot.innerText = playerTwo +" says: " + chat;
            console.log(counter);
        }
        }
    }
    // change player turn
}

let CheckWin = () => {
    for (row in board){
        if (board[row] != 0){
            return;
        }
    }
    // declare winner
    console.log('you lose/win');
}

//you can get play one and player 2 name

Start();