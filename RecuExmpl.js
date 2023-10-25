let n = 5;
function recExample(name) {
    console.log(name);
    n--;
    if(n<=0)
    {
        console.log(" I am Returning");
        return;
    }
    recExample("Rupesh");
    
}

recExample("Medusa");