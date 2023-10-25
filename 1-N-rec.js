let num = 10;
let n = 0;
function recurssionJs(n) {
    console.log(n);
    if (n === num) {
        return;
    }
    recurssionJs(n + 1);
}
recurssionJs(n);

let neN = 10;

function revrecurssionJs(n) {
    console.log(n+ "revrec");
    if (n === 0) {
        return;
    }
    revrecurssionJs(n-1);
}
revrecurssionJs(neN);

