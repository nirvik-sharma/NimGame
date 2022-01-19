let board = [];

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
    let btns = document.getElementsByClassName('rowBtns');

    if (dotsLeft > 0){
        board[row][dotsLeft - 1].style.visibility = 'hidden';
        board[row].pop();
    }

    for (btn in btns){
        if (btns[btn] != evt){
            btns[btn].disabled = true;
        }
    }
}

Start();