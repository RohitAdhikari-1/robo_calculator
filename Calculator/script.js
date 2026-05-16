// script.js

let display = document.getElementById("display");

/* APPEND VALUES */

function appendValue(value){

  display.value += value;
}

/* CLEAR DISPLAY */

function clearDisplay(){

  display.value = "";
}

/* DELETE LAST CHARACTER */

function deleteLast(){

  display.value = display.value.slice(0, -1);
}

/* CALCULATE RESULT */

function calculate(){

  try{

    let expression = display.value;

    // Replace percentage
    expression = expression.replace(/%/g, "/100");

    // Evaluate expression
    let result = eval(expression);

    display.value = result;

  }catch(error){

    display.value = "Error";

    setTimeout(()=>{
      display.value = "";
    },1500);
  }
}

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", function(event){

  const key = event.key;

  if(
    (key >= "0" && key <= "9") ||
    ["+","-","*","/","."].includes(key)
  ){
    appendValue(key);
  }

  else if(key === "Enter"){
    calculate();
  }

  else if(key === "Backspace"){
    deleteLast();
  }

  else if(key === "Escape"){
    clearDisplay();
  }
});