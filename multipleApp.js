let arr = [11, 33, 33, 11, 33, 11];
let count = 0;
let str = "";
for (let i = 0; i < arr.length; i++) {
  count = 1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      if (count == 3) {
        str = "" + arr[i];
       break;
      }
    }
  }
}
console.log(str);
