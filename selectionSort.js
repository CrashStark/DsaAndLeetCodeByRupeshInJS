let arr=[7, 5, 9, 2, 8];
let num=0;
// Use Copy and pen Idiot
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j])
      {
        num=arr[i];
        arr[i]=arr[j];
        arr[j]=num;
        console.log(arr[i]);
      }
      console.log(arr);
    }
}

console.log(arr)