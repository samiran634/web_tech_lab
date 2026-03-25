document.querySelector('.button').addEventListener("click",()=>{
    const date=new Date();
    console.log(date);
    document.querySelector('.showTime').innerText=`${date};`

})