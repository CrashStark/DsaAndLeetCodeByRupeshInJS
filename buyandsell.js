let arr = [7, 1, 5, 3, 6, 4];
let value = 0, max = 0;
let sellArr = [];

//in this example is will be start form 7 and j will be one because 
//j=a[j] is n0 > a[i] so the loop will not perform any iteraton and hence max will be 0 but if a[j]>a[i]  then it will do the 
//decrease operation on it and we get the max between them;
for (let i = 0; i < arr.length; i++) {
    max = 0;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            value = arr[j] - arr[i];
            max = Math.max(max, value);
        }
    }
    sellArr.push(max);
}

console.log(sellArr.sort());
console.log(sellArr[sellArr.length - 1]);