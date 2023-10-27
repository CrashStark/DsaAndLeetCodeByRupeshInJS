let arr = [2, 6, 5, 8, 11];
let target = 19, size = 5, sum = 0;

for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr.length; j++) {
        if (i !== j)
            sum = sum + arr[i] + arr[j];
            console.log(sum);
        if (sum === target) {
            console.log(sum, i, j +"Found it");
            break;
        }
        sum=0;
    }
}