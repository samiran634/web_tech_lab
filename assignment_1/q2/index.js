const Texts=[
    "I will take your's all 85 remaining suprime leaders just like khameni just give me your oil power",
    "Stay Awary India",
    "American culture is the best"
]
document.querySelector(".button").addEventListener("click",()=>{
    const randIndex=Math.floor(Math.random()*3);
    console.log(randIndex);
    document.querySelector('.text').innerText=Texts[randIndex];  
})