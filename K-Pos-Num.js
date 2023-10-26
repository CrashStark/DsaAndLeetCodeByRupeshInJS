let k = 9;
let n = 3, sum = 0;
let arr = [2, 3 ,4 ,5];


for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
    if (sum === k) {
        console.log(i);
    }
}