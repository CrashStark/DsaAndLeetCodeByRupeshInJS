var queue=[1,2,3,4,5];

function deleteQue(){
        let del =queue.splice(0,1);
        return del;
}

function insertRear(ele){
    queue.push(ele);
    return ele;
}

function showQue(){
    return (queue);
}

console.log(deleteQue());
console.log(insertRear(3));
console.log(showQue());