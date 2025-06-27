/**
 * @param {character[][]} board
 * @return {boolean}
 */

const checkRows = (board)=>{
    for(let i = 0; i < 9; i++){
        const set = new Set()
        for(let j = 0; j < 9; j++){
            if(board[i][j] !== "."){
                if(set.has(board[i][j]))
                return false
                set.add(board[i][j])
            }
        }
    }
    return true
}

const checkCols = (board)=>{
    for(let i = 0; i < 9; i++){
        const set = new Set()
        for(let j = 0; j < 9; j++){
            if(board[j][i] !== "."){
                if(set.has(board[j][i]))
                return false
                set.add(board[j][i])
            }
        }
    }
    return true
}

const checkSquare=(board,row,col)=>{
    const set = new Set()
    for(let i = row; i < row + 3; i++){
        for(let j = col; j < col + 3; j++){
            if(board[i][j] !== "."){
                if(set.has(board[i][j]))
                return false
                set.add(board[i][j])
            }   
        }   
    }
    return true
}

const checkSquares = (board)=>{
    let valid = true
    for(let i = 0; i < 9; i+=3){
        for(let j = 0; j < 9; j+=3){
            if(!checkSquare(board,i,j))
            return false
        }
    }
    return valid
}

const validSudoku = (board) =>{
    const rows = Array.from({length:board.length},()=>new Set())
    const cols = Array.from({length:board.length},()=>new Set())
    const box = Array.from({length:board.length},()=>new Set())

    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[0].length; col++){
            const num = board[row][col] 
            if(board[row][col] === ".") continue
            if(rows[row].has(num) || cols[col].has(num))return false
            const boxRow = Math.floor(row / 3)
            const boxCol = Math.floor(col / 3)
            const boxIndex = (boxRow * 3)  + Math.floor(col / 3)
            if(box[boxIndex].has(num)) return false

            rows[row].add(num)
            cols[col].add(num)
            box[boxIndex].add(num)
        }
    }
    return true
}


var isValidSudoku = function(board) {
    return validSudoku(board)
    // return checkRows(board) && checkCols(board) && checkSquares(board)
};
