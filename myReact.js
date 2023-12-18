let eveWord="Hi How are you";
let another='';
let newEve=eveWord.split(" ");
for(let i=newEve.length;i>=1;i--){
    another+=newEve[i].reverse().join('');
}

console.log(another);
