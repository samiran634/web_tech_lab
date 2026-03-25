const btn= document.querySelector('.add');

btn.addEventListener('click',()=>{
  let num1=Number(document.querySelector('.firstNumber').value) ;
  let num2=Number(document.querySelector('.secondNumber').value) ;
  console.log(num1)
  console.log(num2)
  document.querySelector('.result').innerText=`${num1+num2}`;
})