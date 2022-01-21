let board = [];
let rowBtns = document.getElementsByClassName('rowBtns');

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
        if (rowBtns[btn].isEmpty != true)
            rowBtns[btn].disabled = false;
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

Start();