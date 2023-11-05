const divv=document.querySelector('.norm');
const clear=document.querySelector('.clear');
const show=document.querySelector('.show');
    
localStorage.setItem("data",divv.innerHTML);

    clear.addEventListener("click",()=>{
        divv.innerHTML='';
        console.log("clear btn clicked");
    })

    show.addEventListener('click',()=>{
        divv.innerHTML=localStorage.getItem("data");
        console.log("show button clicked");
    })