let num = 5, sum = 0;
function factorial(n) {
    // Base Condition.
    if (n === 0) {
        return 1;
    }
    // Problem broken down into 2 parts and then combined.
    console.log(n);
    return n // suppose this n is 5 and we call the function providing n-1 which is 4 then this n become three but how the multiplication will happen
     * factorial(n - 1);
}


console.log(factorial(5));