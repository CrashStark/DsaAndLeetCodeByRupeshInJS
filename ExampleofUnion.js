
function findUnion(arr1, arr2) {
    let freq = new Map();
    let union = [];

    for (let num of arr1) {
        //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        console.log(num);
        //if we get undefined then it will return 0 else it will return the number's appearance in the code
        console.log(freq.get(num)|| 0);
        console.log((freq.get(num) || 0) + 1);
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let num of arr2) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let [num, count] of freq) {
        union.push(num);
    }

    return union;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];

let union = findUnion(arr1, arr2);

console.log("Union of arr1 and arr2 is:");
console.log(union.join(" "));

