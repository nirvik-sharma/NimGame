let board = [];
let rowBtns = document.getElementsByClassName('rowBtns');
<<<<<<< HEAD
let playerOne;
let playerTwo;

=======
let players = [];
let playerTurn = 0;
>>>>>>> d4944a39a7ba9d68a012bd892ea74d1e8f86c529

let Start = () =>{
    let rows = document.getElementsByClassName('boardRows');
    let player1 = document.getElementById('player1Name').value;
    let player2 = document.getElementById('player2Name').value;

    players = [player1, player2];
    playerTurn = 0;
    EnableRowButtons();
    // document.getElementById('chatboxText').innerHTML += `<br>${players[playerTurn]}'s turn!`

    for (let row = 0; row < rows.length; row++){
        console.log(rows[row]);
        let rowDots = rows[row].getElementsByClassName('dot');

        board[row] = [];
        for (let dot = 0; dot < rowDots.length; dot++){
            board[row][dot] = rowDots[dot];
            board[row][dot].style.visibility = 'visible';
            //console.log(board[row][dot]);
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
    if(playerTurn == 0){
        playerTurn++;
    } else{
        playerTurn--;
    }

    // says who turn it is
    // document.getElementById('chatboxText').innerHTML += `<br>${players[playerTurn]}'s turn!`
}

let CheckWin = () => {
    for (row in board){
        if (board[row] != 0){
            return;
        }
    }
    NextTurn();
    // declare winner
    // document.getElementById('chatboxText').innerHTML += `<br>${players[playerTurn]} won!`
}

<<<<<<< HEAD
//you can get play one and player 2 name

Start();
=======
let EnableRowButtons = () =>{
    for (btn in rowBtns){
        rowBtns[btn].disabled = false;
    }
}
