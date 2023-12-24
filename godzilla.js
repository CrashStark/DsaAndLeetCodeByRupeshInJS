let str = "Godzilla";

str.split('').forEach((e) => {
    console.log(e);
})

let arrayOfString = ["Hello", "Hi", "Namaste", "Hola", "Vanakkam"];
let searchValue = "ae";

arrayOfString.filter((e) => {
    if(e.includes(searchValue.split('').filter((e)=>{
        return e;
    }))){
        console.log(e);
    }

})