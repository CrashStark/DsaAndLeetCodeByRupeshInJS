function checkCallBack( error,callback, name) {
    if (error) {
        console.log(error);
        console.log("error Occured");
    }
    setTimeout(() => {
        console.log("How Are You!" + name);
    }, 2000);
    callback(name);
}

function printHello(name) {
    console.log("Hello" + name)
    
}

checkCallBack(null,printHello, "Rupesh");