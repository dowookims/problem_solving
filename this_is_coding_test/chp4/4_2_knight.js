const input ='d4';

const alphabetToNum = (char) => {
    return char.charCodeAt() - 97;
}
const [row, col] = input.split('').map(v => {
    const num = parseInt(v, 10);
    return isNaN(num) ? alphabetToNum(v): num -1;
});

const dir = [
    [-2, -1], [-2, 1],
    [-1, -2], [-1, 2],
    [2, 1], [2, -1],
    [1, 2], [1, -2]
];

const isWall = (r, c)=> {
    return 8 > r  && r >= 0 && 8 > c && c >= 0
};

let ans = 0;
dir.forEach(d => {
    const nuRow = row + d[0];
    const nuCol = col + d[1];
    if (isWall(nuRow, nuCol)) {
        ans++
    }
});

console.log(ans);