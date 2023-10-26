let arr = [1, 1, 3];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count === 1) {
        console.log(arr[i]);
    }

}
