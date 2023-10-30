let array = [3, 2, 3,4,4,4,4,4];
let n = array.length / 2;
let count = 0;
for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            count++;
            if (count > n) {
                console.log(array[i] + "Appears more then N");
            }
        }
    }
}