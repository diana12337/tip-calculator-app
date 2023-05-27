var fields = document.getElementsByClassName("validated-field");
 
if(Array.from(fields).length > 0) {
 Array.from(fields).forEach(field => {
  field.addEventListener("input", calcTip())
 })
}
  

 function calcTip(){

  function calcResult(){
   
   totalTip(billAmount, percentAmount, peopleAmount, displayTip);
    if(peopleAmount == 0){
     document.getElementById("incorrect").innerHTML = "Can't be zero";
     document.getElementById("people-amount").style.outline = "2px solid red";
    }
    else {document.getElementById("incorrect").innerHTML = ""
          document.getElementById("people-amount").style.outline = "none";
    }

      
      

 function totalTip(billAmount, percentAmount, peopleAmount, callBack) {
  let result = billAmount * (percentAmount / 100) / peopleAmount;
      result = result.toFixed(2);
      callBack(result);
  }
   
  function displayTip(output) {
  if(percentAmount > 0 && peopleAmount > 0 && billAmount > 0) {
      document.getElementById("tip-amount").innerHTML = output;
      document.getElementById("reset").style.opacity = "1";
  }
  else{
   return;
  }
 } 
   
function displayBill(output) {
  if(percentAmount > 0 && peopleAmount > 0 && billAmount > 0) {
   document.getElementById("total").innerHTML = output;    
 }
 else{
  return;
 }
}
    
totalBill(billAmount, percentAmount, peopleAmount, displayBill);
function totalBill(billAmount, percentAmount, peopleAmount, totalBack) {
 let result = (billAmount + billAmount * (percentAmount / 100)) / peopleAmount;
     result = result.toFixed(2);
     totalBack(result);
}
  }


function removeWarning() {

  document.getElementById("custom").value = "";
  } 

   function removeWarningReset() {
     
    document.getElementById("percent-5").style.background = "hsl(183, 100%, 15%)";
    document.getElementById("percent-10").style.background = "hsl(183, 100%, 15%)";
    document.getElementById("percent-15").style.background = "hsl(183, 100%, 15%)";
    document.getElementById("percent-25").style.background = "hsl(183, 100%, 15%)";
    document.getElementById("percent-50").style.background = "hsl(183, 100%, 15%)";
    document.getElementById("custom").value = "";
    document.getElementById("bill-amount").value = "";
    document.getElementById("people-amount").value = "";
    document.getElementById("tip-amount").innerHTML = "$0.00";
    document.getElementById("total").innerHTML = "$0.00";
    
   }
                 
 
  let percentAmount;
  let billAmount;
  let peopleAmount; 


document.getElementById("reset").onclick = function(){
 document.getElementById("reset").style.opacity = ("0.28");
 removeWarningReset();
}
   
 
document.getElementById("percent-5").onclick = function(){

 removeWarning();
 percentAmount = 5;
 calcResult();
}

document.getElementById("percent-10").onclick = function(){

 removeWarning();
 percentAmount = 10;
 calcResult();
  
}

document.getElementById("percent-15").onclick = function(){

 removeWarning();
 percentAmount = 15;
 calcResult();
}

document.getElementById("percent-25").onclick = function(){

 removeWarning();
 percentAmount = 25;
 calcResult();
}

document.getElementById("percent-50").onclick = function(){

 removeWarning();
 percentAmount = 50;
 calcResult();
}

document.getElementById("custom").onkeyup = function(){
document.getElementById("custom").style.outline = "2px solid #81E5D9";

 percentAmount = document.getElementById("custom").value;
 percentAmount = Number(percentAmount);
 calcResult(); 

}
 

     
document.getElementById("bill-amount").onkeyup = function(){
 document.getElementById("bill-amount").style.outline = "2px solid #81E5D9";
 billAmount = document.getElementById("bill-amount").value;
 billAmount = Number(billAmount);
 calcResult();
   }
     
document.getElementById("people-amount").onkeyup = function(){
 document.getElementById("people-amount").style.outline = "2px solid #81E5D9";
 peopleAmount = document.getElementById("people-amount").value;
 peopleAmount = Number(peopleAmount);  
 calcResult();
  }
   

        
 
var button5 = document.querySelector("#percent-5");
   button5.addEventListener("click", function button5(){
     percent5 = document.getElementById("percent-5");
     percent5.classList.toggle("highlight");
   })
   
var button10 = document.querySelector("#percent-10");
   button10.addEventListener("click", function button10(){
     percent10 = document.getElementById("percent-10");
     percent10.classList.toggle("highlight");
   })
      
var button15 = document.querySelector("#percent-15");
   button15.addEventListener("click", function button15(){
     percent15 = document.getElementById("percent-15");
     percent15.classList.toggle("highlight");
   })    

var button25 = document.querySelector("#percent-25");
   button25.addEventListener("click", function button25(){
     percent10 = document.getElementById("percent-25");
     percent10.classList.toggle("highlight");
   })
      
var button50 = document.querySelector("#percent-50");
   button50.addEventListener("click", function button50(){
     percent50 = document.getElementById("percent-50");
     percent50.classList.toggle("highlight");
   }) 
   
   
}
