document.querySelector('.button').addEventListener('click',()=>{
    

    const paragraph=document.getElementById('inputBox').value.split(/[ ,.:]/) ;
    console.log(paragraph);
    document.querySelector('.wordsDisplay').innerText=`${paragraph.length}`;
    const clearBtn= document.createElement('button');
    clearBtn.innerText='><'
    clearBtn.classList.add('clxbutton')
    document.querySelector('.mainContainer').appendChild(clearBtn);
document.querySelector(".clxbutton").addEventListener('click',()=>{
     document.querySelector('.wordsDisplay').innerText=`Please Input some Text`;
     document.getElementById('inputBox').value='';
     document.querySelector('.mainContainer').removeChild(clearBtn);
})

})

