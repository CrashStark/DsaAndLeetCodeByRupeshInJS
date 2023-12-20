let power = 10;
let num = 2;
let n = 1
function powFunction(num, pow) {
    if (pow == 0) {
        return 1;
    }

    return 2 * powFunction(2, power - 1);

}
//Today i have not committed any js code as i was working on company project on Java
//will complete once the project is finished
//right now understanding Java
console.log(powFunction(2,power));