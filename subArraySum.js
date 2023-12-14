let arr = [3, 1, 2, 4];
let k = 6;
let sum = 0;
let total = [];
let anotherArray = [];
for (let i = 0; i < arr.length; i++) {
  total = [];
  sum = 0;
  for (let j = i; j < arr.length; j++) {
      console.log(sum);
    sum += arr[j];
    if (sum <=k) {
      total.push(j);
      if (sum === k) {
      anotherArray.push([total]);
      console.log(anotherArray);
    } 
    } else if (sum > k) {
      continue;
    }
  }
}

for (let i = 0; i < anotherArray.length; i++) {
  console.log(anotherArray[i]);
}
