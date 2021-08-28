const N = 5;
const M = 6;
const map = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1,1 , 1],
    [1, 1, 1, 1,1 , 1]
]

let row = 0;
let col = 0;

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const isIn = (row, col) => {
    return N > row && row >= 0 && M > col && col >= 0;
}

const visited = Array.from(Array(N), () => Array(M).fill(false));
let answer = -1;
let fin = true;
visited[row][col] = true;
const q = [[row, col]];
while(q.length > 0) {
    const [r, c] = q.shift();
    answer++;
    for (let i=0; i<4; i++) {
        const nuRow = r + dx[i];
        const nuCol = c + dy[i];
        if (nuRow === N-1 && nuCol === M-1) {
            fin = false;
            break;
        }
        if (isIn(nuRow, nuCol) && map[nuRow][nuCol] === 1 && !visited[nuRow][nuCol]) {
            visited[nuRow][nuCol] = true;
            q.push([nuRow, nuCol]);
        }
    }
    if (!fin) {
        break;
    }
}

console.log(answer);