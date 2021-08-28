const N = 4;
const M = 4;
const start = [1, 1, 0];
const map = [
    [1,1,1,1],
    [1,0,0,1],
    [1,1,0,1],
    [1,1,1,1]
];

const directions = ['N', 'E', 'S', 'W'];
const movable = {
    N: [0, -1],
    E: [-1, 0],
    S: [0, 1],
    W: [1, 0]
};

const back = {
    N: [1, 0],
    E: [0, -1],
    S: [-1, 0],
    W: [0, 1]
}

let [startRow, startCol, currentDirection] = start;
let answer = 0;
const visited = Array.from(Array(N), () => Array(M).fill(false));

function recursive(row, col, dir, visited) {
    const d = directions[dir];
    const [r, c] = movable[d];
    const nuRow = row + r;
    const nuCol = col + c;
    if (--dir < 0) {
        dir = 3;
    }

    if (map[nuRow][nuCol] === 0 && !visited[nuRow][nuCol]) {
        answer++;
        visited[nuRow][nuCol] = true;
        recursive(nuRow, nuCol, dir, visited);
    } else {
        let trial = 0;
        for (let i=0; i<3; i++) {
            const nuD = directions[dir];
            dir--;
            if (dir < 0) {
                dir = 3;
            }
            trial++;
            const [nuR, nuC] = movable[nuD];
            const nuRow2 = row + nuR;
            const nuCol2 = col + nuC;
            if (map[nuRow2][nuCol2] === 0 && !visited[nuRow2][nuCol2]) {
                answer++;
                visited[nuRow2][nuCol2] = true;
                recursive(nuRow2, nuCol2, dir, visited);
                break;
            }
        }
        if (trial === 3) {
            const [backR, backC] = back[directions[dir]];
            const backRow = row + backR;
            const backCol = col + backC;
            if (map[backRow][backCol] === 1) {
                return;
            }
            recursive(backRow, backCol, dir, visited);
        }
    }
}

recursive(startRow, startCol, currentDirection, visited);

console.log(answer);