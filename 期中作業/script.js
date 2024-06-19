document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart-button');
    const size = 4;
    let cells = [];
    let boardArray = [];
    let isGameOver = false;

    function initBoard() {
        boardArray = [];
        for (let i = 0; i < size; i++) {
            boardArray.push(new Array(size).fill(0));
        }
        cells = [];
        board.innerHTML = '';
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            board.appendChild(cell);
            cells.push(cell);
        }
        addNewTile();
        addNewTile();
        updateBoard();
        message.textContent = '';
        isGameOver = false;
    }

    function addNewTile() {
        const emptyCells = [];
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (boardArray[i][j] === 0) {
                    emptyCells.push({ x: i, y: j });
                }
            }
        }
        if (emptyCells.length > 0) {
            const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            boardArray[x][y] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    function updateBoard() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const value = boardArray[i][j];
                const cell = cells[i * size + j];
                cell.textContent = value === 0 ? '' : value;
                cell.dataset.value = value;
            }
        }
    }

    function slide(row) {
        let arr = row.filter(val => val);
        let missing = size - arr.length;
        let zeros = Array(missing).fill(0);
        arr = arr.concat(zeros);
        return arr;
    }

    function combine(row) {
        for (let i = 0; i < size - 1; i++) {
            if (row[i] === row[i + 1]) {
                row[i] *= 2;
                row[i + 1] = 0;
            }
        }
        return row;
    }

    function moveLeft() {
        for (let i = 0; i < size; i++) {
            let row = boardArray[i];
            row = slide(row);
            row = combine(row);
            row = slide(row);
            boardArray[i] = row;
        }
    }

    function moveRight() {
        for (let i = 0; i < size; i++) {
            let row = boardArray[i];
            row = row.reverse();
            row = slide(row);
            row = combine(row);
            row = slide(row);
            boardArray[i] = row.reverse();
        }
    }

    function moveUp() {
        for (let j = 0; j < size; j++) {
            let row = [];
            for (let i = 0; i < size; i++) {
                row.push(boardArray[i][j]);
            }
            row = slide(row);
            row = combine(row);
            row = slide(row);
            for (let i = 0; i < size; i++) {
                boardArray[i][j] = row[i];
            }
        }
    }

    function moveDown() {
        for (let j = 0; j < size; j++) {
            let row = [];
            for (let i = 0; i < size; i++) {
                row.push(boardArray[i][j]);
            }
            row = row.reverse();
            row = slide(row);
            row = combine(row);
            row = slide(row);
            row = row.reverse();
            for (let i = 0; i < size; i++) {
                boardArray[i][j] = row[i];
            }
        }
    }

    function isGameOverCheck() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (boardArray[i][j] === 0) {
                    return false;
                }
                if (i !== size - 1 && boardArray[i][j] === boardArray[i + 1][j]) {
                    return false;
                }
                if (j !== size - 1 && boardArray[i][j] === boardArray[i][j + 1]) {
                    return false;
                }
            }
        }
        return true;
    }

    function control(e) {
        if (isGameOver) return;

        switch (e.key) {
            case 'ArrowLeft':
                moveLeft();
                break;
            case 'ArrowRight':
                moveRight();
                break;
            case 'ArrowUp':
                moveUp();
                break;
            case 'ArrowDown':
                moveDown();
                break;
        }

        addNewTile();
        updateBoard();

        if (isGameOverCheck()) {
            message.textContent = '你輸了';
            isGameOver = true;
        }
    }

    document.addEventListener('keydown', control);
    restartButton.addEventListener('click', initBoard);

    initBoard();
});
