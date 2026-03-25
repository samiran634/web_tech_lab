let main_container=document.querySelector(".main_container")
let text_container=document.querySelector(".text_container")

let btn=document.querySelector(".submit_text");
function check(num){
    if (!/^\d+$/.test(num)) {
        alert("Please enter a valid number.");
        return;
      }
      if (num < 0 || num > 999) {
        alert("Please enter a number between 0 and 999.");
        return;
      }

      const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
      const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
      const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
      
      let words = "";

      if (num == 0) {
        words = "Zero";
      } else {
        let hundreds = Math.floor(num / 100);
        let tensAndOnes = num % 100;
        let tensDigit = Math.floor(tensAndOnes / 10);
        let onesDigit = tensAndOnes % 10;

        if (hundreds > 0) {
          words += ones[hundreds] + " Hundred ";
        }
        
        if (tensAndOnes >= 10 && tensAndOnes < 20) {
          words += teens[tensAndOnes - 10];
        } else {
          if (tensDigit > 0) {
            words += tens[tensDigit] + " ";
          }
          if (onesDigit > 0) {
            words += ones[onesDigit];
          }
        }
      }
      return words

}
btn.addEventListener("click",()=>{
    let num=document.querySelector(".text_input_container").value;
    console.log(num);
    let text=check(num);
    try{
        let display_box=document.createElement("div");
        if(text===undefined)throw "text is undefinded"
        display_box.innerHTML=text;
        display_box.setAttribute("class","display_class");
        document.body.appendChild(display_box);

    }catch(e){
        alert(e);
    }
    
});