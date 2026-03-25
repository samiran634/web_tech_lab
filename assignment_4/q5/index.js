const startBtn=document.querySelector('#start');
const stopBtn=document.querySelector('#stop');
const restartBtn=document.querySelector("#restart");
const timeShowCase=document.querySelector('.timeShowCase');
stopBtn.disabled=true;
restartBtn.disabled=true;

function updateText(hour,minits,secs){
  document.querySelector('.hour').innerText=`${hour}`;
  document.querySelector('.minits').innerText=`${minits}`;
  document.querySelector('.secs').innerText=`${secs}`;
}
updateText(0,0,0);
let intervalId;

startBtn.addEventListener('click',()=>{
    let h=Number(document.querySelector('.hour').innerText);
    let m=Number(document.querySelector('.minits').innerText);
    let s=Number(document.querySelector('.secs').innerText);
    startBtn.disabled=true;
    stopBtn.disabled=false;
    restartBtn.disabled=false;
   
    intervalId=setInterval(()=>{
        s++;
        if(s>60){
            s=0;
            m++;
            if(m>60){
                m=0;
                h++;
            }
        }
        updateText(h,m,s);
    },1000);
})


stopBtn.addEventListener("click",()=>{
    if(!intervalId)return -1;
    clearInterval(intervalId);
    intervalId=null;
    startBtn.disabled=false;
    startBtn.innerText='Resume';
    stopBtn.disabled=true;
})


restartBtn.addEventListener("click",()=>{
    if(intervalId){
        clearInterval(intervalId);
        intervalId=null;
    }
    updateText(0,0,0);
    restartBtn.disabled=true;
    startBtn.disabled=false;
    stopBtn.disabled=true;
});

