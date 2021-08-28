const N = 4;
const M = 5;
const arr = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
];

const visited = Array.from(Array(N), () => Array(M).fill(false));
const isIn = (row, col) => {
    return N > row && row >= 0 && M > col && col >= 0;
}

function dfs(row, col) {
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    for (let i=0; i<4; i++) {
        const nuRow = row + dy[i];
        const nuCol = col + dx[i];
        if (isIn(nuRow, nuCol) && arr[nuRow][nuCol] === 0 && !visited[nuRow][nuCol]) {
            visited[nuRow][nuCol] = true;
            dfs(nuRow, nuCol);
        }
    }
};
let answer = 0;
for (let row=0; row < N; row++) {
    for (let col=0; col < M; col++) {
        if (arr[row][col] === 0 && !visited[row][col]) {
            answer++;
            dfs(row, col);
        }
    }
}

console.log(answer);