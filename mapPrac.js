let arr=[1,2,3,3,4,5,5,6,6,6,7,6]
let num=new Map();
for(let i=0;i<arr.length;i++)
{
    num.set(arr[i],arr[i]);
}

console.log(num.get(3));