const gen_pin_btn=document.querySelector("#gen_pin");
function allocationRandomNumber( x){
    return Math.floor(x*Math.random()*10);
}
gen_pin_btn.addEventListener("click",()=>{
    let attemptNo=localStorage.getItem("attempt") ?? 0;
    console.log(attemptNo);
    if(attemptNo==3)alert("your attempt to generate pin has been extinguished please give your credit card no to genarate pins again");
    else{
            for(let i=1;i<=4;i++){
                document.querySelector(`.box${i}`).innerText=allocationRandomNumber(i)%10;
            }
            localStorage.setItem("attempt",Number(attemptNo)+1);
    }
})