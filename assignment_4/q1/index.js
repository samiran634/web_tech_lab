window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


const upperLayer=document.getElementById("upperLayer");
const main=document.getElementById("main-conatainer");
const taskDisplayer=document.querySelector(".taskDisplayer");
const submitBtn=document.querySelector(".btn");

submitBtn.addEventListener("click",()=>{
    const task=document.querySelector(".input").value;
    if(task!==undefined && task.length >0){
        const newTaskNode=document.createElement("div");
        const text=document.createTextNode(task);
        const btn=document.createElement("button");
        btn.innerText="🗑"
        const line=document.createElement("div");
        line.setAttribute("class","line");
        line.classList.add("hidden");
        btn.addEventListener("click",()=>{
            newTaskNode.setAttribute("class","task_done")
            btn.setAttribute("class","hidden");
            line.classList.remove("hidden");
        })
        newTaskNode.appendChild(text);
        newTaskNode.appendChild(line);
        newTaskNode.appendChild(btn);
        taskDisplayer.appendChild(newTaskNode);
    }else{
        alert("please give a legit value");
    }

})

