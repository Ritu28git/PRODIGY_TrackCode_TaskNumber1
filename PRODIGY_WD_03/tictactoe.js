let turn = 'O';
let total_turn = 0;
let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 4, 8], [2, 4, 6], [0, 3, 6],
    [1, 4, 7], [2, 5, 8]
];

let board_array = new Array(9).fill("E");

function checkWinner() {
    for (let [index0, index1, index2] of winner) {
        if (board_array[index0] !== "E" && board_array[index0] === board_array[index1] && board_array[index1] === board_array[index2]) {
            return true;
        }
    }
    return false;
}

const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const container0 = document.querySelector('.container0');
const container2 = document.querySelector('.container2');
const winningMessage = document.querySelector('#winningMessage');
const board = document.querySelector('.board');
const restartButton = document.getElementById("restartButton");

player1.classList.add('active');

const printer = (event) => {
    const element = event.target;
    if (!element.classList.contains('cell') || board_array[element.id] !== "E") return;

    total_turn++;
    element.innerHTML = turn;
    board_array[element.id] = turn;

    if (checkWinner()) {
        winningMessage.innerHTML = `Winner is ${turn}`;
        if (turn === 'O') {
            container0.classList.add('winner');
        } else {
            container2.classList.add('winner');
        }
        board.removeEventListener('click', printer);
        return;
    }

    if (total_turn === 9) {
        winningMessage.innerHTML = `Match is Draw`;
        return;
    }

    turn = turn === 'O' ? 'X' : 'O';
    active_player();
};

board.addEventListener('click', printer);

restartButton.addEventListener('click', () => {
    board_array.fill('E');
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    turn = "O";
    total_turn = 0;
    winningMessage.innerHTML = "";
    board.addEventListener('click', printer);
    container0.classList.remove('winner');
    container2.classList.remove('winner');
    active_player();
});

const active_player = () => {
    if (turn === 'O') {
        player1.classList.add('active');
        player2.classList.remove('active');
        player12.classList.add('active');
        player21.classList.remove('active');
    } else {
        player2.classList.add('active');
        player1.classList.remove('active');
        player21.classList.add('active');
        player12.classList.remove('active');
    }
};