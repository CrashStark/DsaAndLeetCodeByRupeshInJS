let power = 10;
let num = 2;
let n = 1
function powFunction(num, pow) {
    if (pow == 0) {
        return 1;
    }

    return 2 * powFunction(2, power - 1);

}

console.log(powFunction(2,power));