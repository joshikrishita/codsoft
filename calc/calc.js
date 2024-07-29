let btns=document.querySelectorAll(".btn");
let board=document.querySelector(".board");
let assignments=document.querySelectorAll("#assi");
let arr=document.querySelectorAll("#arr");
let equal=document.querySelector("#equ");
equal.style.backgroundColor="springgreen";
equal.style.color="#3d2ffa";
let string="";



btns.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        if(btn.innerText=="="){
            string=eval(string);
            board.innerText=string; 
            board.style.color="#3d2ffa";

        }
        else{
            string +=e.target.innerText 
            board.innerText=string
            board.style.color="#3d2ffa";
        }
       
    })
    
});
// equal.addEventListener("click",()=>{
//     if(e.target.innerHtml=='='){
//         string=eval(string);
//     board.innerText=string;
//     }
    
// })
assignments.forEach(assi=>{
       assi.addEventListener("click",()=>{
          board.innerText=string="";
       })
});