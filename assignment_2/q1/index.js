const upperLayer=document.getElementById("upperLayer");
const main=document.getElementById("main-conatainer");
const taskDisplayer=document.querySelector(".taskDisplayer");
const submitBtn=document.querySelector(".btn");

submitBtn.addEventListener("click",()=>{
    const task=document.querySelector(".input").value;
    if(task!==undefined){
        const newTaskNode=document.createElement("div");
        const text=document.createTextNode(task);
        const status=document.createElement("div");
        newTaskNode.appendChild(text);
        taskDisplayer.appendChild(newTaskNode);
    }else{
        alert("please give a legit value");
    }

})
