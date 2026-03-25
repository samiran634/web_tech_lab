const addBtn=document.querySelector(".add_item");
const accumulateBtn=document.querySelector(".total");
const retriveBtn=document.querySelector(".last5");
const popUp=document.querySelector("#popUp")
const popUpContent=document.querySelector(".content");
const mainContainer=document.querySelector(".main-container")

const data=localStorage.getItem("expenceArray") ?? [];
addBtn.addEventListener("click",()=>{
    popUp.classList.remove("hidden");
     popUp.classList.add("modal");
     mainContainer.classList.add("hidden");
popUpContent.innerHTML = `
  <form action="/submit" method="POST">
    <input type="text" name="Expence" class="ExpanceInput" placeholder="Write Your Expences">
    <input type="number" name="Amount" class="ExpenceAmount" placeholder="how much did you investe?"
    <button type="submit" class="submitbtn">Add Up</button>
  </form>
`;
});
document.querySelector(".submitbtn").addEventListener("click",()=>{
    const newExpence={
        "name":document.querySelector(".ExpanceInput").value,
        "amount":document.querySelector(".ExpenceAmount").value
    }
    localStorage.setItem('expenceArray',[...data,newExpence]);
});

accumulateBtn.addEventListener("click",()=>{
    popUp.classList.remove("hidden");
    popUp.classList.add("modal");
    mainContainer.classList.add("hidden");
    let total=0;
    data.map((e)=>{
        total+=e.amount
    });
    popUpContent.innerHTML=`<div>${total}</div>`

});

retriveBtn.addEventListener("click",()=>{
    popUp.classList.remove("hidden");
     popUp.classList.add("modal");
     mainContainer.classList.add("hidden");
     const last5=data.slice(-5);
     if(last5.length ===0){
        popUpContent.innerHTML=`<div>add some expences first</div>`;
     }
     last5.map((e)=>{
        popUpContent.innerHTML=`
        <div>${e.name}</div>
        <div>${e.name}</div>
        `
     })
});


document.querySelector(".cross").addEventListener("click",()=>{
    popUp.classList.add("hidden");
     popUp.classList.remove("modal");
     mainContainer.classList.remove("hidden");
    popUpContent.innerHTML="";
})