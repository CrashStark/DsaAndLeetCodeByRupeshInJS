let k = 9;
let n = 3, sum = 0;
let arr = [2, 4, 1, 1, 4, 5];


// for (let i = 0; i < arr.length; i++) {
//     sum = arr[i] + sum;
//     if (sum === k) {
//         console.log(i);
//     }
// }

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        sum = arr[j] + sum;
        console.log(sum + "Sum Value");
        console.log(j);
        if (sum === k) {
            console.log(j + "Here is the Answer");
        }
        else if (sum > k && j === n) {
            // console.log(sum);
            sum = 0;
            //console.log("else if running");
        }
    }

}

console.log('Running');