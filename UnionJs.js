let FirstArr=[1,2,3,4,5,6,7,8,9];
let SecondArr=[11,12,13,14,7,8,9];
let unionArr=[];
for(let i=0;i<FirstArr.length;i++)
{
    for(let j=0;j<SecondArr.length;j++)
    {
        if(FirstArr[i]===SecondArr[j])
        {
            unionArr.push(FirstArr[i]);
        }
    }

}
console.log(unionArr);