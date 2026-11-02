import "./styles.css";

const board = document.getElementById("board");

const player = document.createElement("div");
player.textContent = "@";
player.classList.add("player");

function createBoard() {
    let arr = [];

    for(let row = 0; row < 10; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add(`row${row}`);
        let arrCols = [];
        for(let col = 0; col < 10; col++) {
            const div = document.createElement("div");
            div.classList.add(`row${row}:col${col}`, "square");
            arrCols.push(div);
            board.append(div);
        }
        arr.push(arrCols);
    }
    return arr;
}


createBoard()

board.append(player);