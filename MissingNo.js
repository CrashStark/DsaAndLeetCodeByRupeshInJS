let arr = [0,1, 2, 3, 5];
// let preval, currval, actval;
// for (let i = 0; i < arr.length; i++) {
//     if (i <= arr.length - 1) {
//         if (arr[i] < arr[i + 1]) {
//             console.log("inside If");
//             currval = arr[i + 1] - arr[i];
//             console.log(currval);
//             preval = currval;
//             if (preval != currval) {
//                 actval = preval > currval ? preval : currval;
//                 console.log(actval);

//             }
//         }
//     }
// }
// console.log(actval);

let flag=0;
for (let i = 0; i < arr.length; i++) {
   if(i===arr[i])
   {
    flag=0;
   }else if(i!==arr[i])
   {
    flag=1;
    console.log(i+"is the missing number");
  
   }
}

function missingNum()
{
    let gn=7;
let anotherARr=[1,2,3,5,6,7];
let total=0,sum=0;;
while(gn>=1)
{
    total=total+gn;
    gn--;
}

for(let i=0;i<anotherARr.length;i++)
{
sum=sum+anotherARr[i];
}

let missingNumber=total-sum;
console.log(missingNumber);
}

missingNum();