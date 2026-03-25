const overlay=document.querySelector('.overlay');
const choices=document.querySelector('.choice');
let color=localStorage.getItem("color") || 'white';
console.log(color);
 overlay.style.backgroundColor=color.toLowerCase();

choices.addEventListener('click',(e)=>{
    console.log(e);
    color=e.target.innerText;
    console.log(color);
    localStorage.setItem("color",color);
    overlay.style.backgroundColor=color.toLowerCase();
})
document.querySelector('#remove').addEventListener("click",()=>{
    localStorage.removeItem("color");
    color="White";
    overlay.style.backgroundColor=color.toLowerCase();
})