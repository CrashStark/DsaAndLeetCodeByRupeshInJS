let str = "CATAA";
let str2 = "ACTAA";
count=0;
if (str.length != str2.length) {
  console.log(false);
} else {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str.charAt(i) == str2.charAt(j)) {
        count++;
        if(count==str.length){
            console.log(true);
        }
      }
    }
  }
}
