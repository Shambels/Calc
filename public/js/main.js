"use strict";

var inputNL = document.getElementsByTagName("input");
var inputArr = Array.from(inputNL);
var spanNL = document.getElementsByTagName("span");
var spanArr = Array.from(spanNL);
var rep1 = document.getElementById("response1");
var rep2 = document.getElementById("response2");
var rep3 = document.getElementById("response3");
var btnNL = document.getElementsByClassName("btn");
var btnArr = Array.from(btnNL);
var iNL = document.getElementsByTagName("i");
var selectedIcon = "+";

function calc1(a, b, c, op) {
   switch (op) {
      case '+':
         spanArr[c].innerText = parseFloat(inputArr[a].value) + parseFloat(inputArr[b].value);
         break;
      case '-':
         spanArr[c].innerText = parseFloat(inputArr[a].value) - parseFloat(inputArr[b].value);
         break;
      case '*':
         spanArr[c].innerText = parseFloat(inputArr[a].value) * parseFloat(inputArr[b].value);
         break;
      case '/':
         spanArr[c].innerText = parseFloat(inputArr[a].value) / parseFloat(inputArr[b].value);
         break;
   }
}

function calc2(a, b, c) {
   var opvalue = document.getElementById("operator").value;
   switch (opvalue) {
      case "+":
         spanArr[c].innerText = parseFloat(inputArr[a].value) + parseFloat(inputArr[b].value);
         break;
      case "-":
         spanArr[c].innerText = parseFloat(inputArr[a].value) - parseFloat(inputArr[b].value);
         break;
      case "*":
         spanArr[c].innerText = parseFloat(inputArr[a].value) * parseFloat(inputArr[b].value);
         break;
      case "/":
         spanArr[c].innerText = parseFloat(inputArr[a].value) / parseFloat(inputArr[b].value);
         break;
   }
}

function calc3(a, b, op) {
   switch (op) {
      case '+':
         selectedIcon = "+";
         iNL[3].className = "fas fa-plus";
         rep3.innerText = parseFloat(inputArr[a].value) + parseFloat(inputArr[b].value);
         break;
      case '-':
         selectedIcon = "-";
         iNL[3].className = "fas fa-minus"
         rep3.innerText = parseFloat(inputArr[a].value) - parseFloat(inputArr[b].value);
         break;
      case '*':
         selectedIcon = "*";
         iNL[3].className = "fas fa-times"
         rep3.innerText = parseFloat(inputArr[a].value) * parseFloat(inputArr[b].value);
         break;
      case '/':
         selectedIcon = "/";
         iNL[3].className = "fas fa-divide"
         rep3.innerText = parseFloat(inputArr[a].value) / parseFloat(inputArr[b].value);
         break;
      default:
         break;
   }
}
btnArr[0].addEventListener("click", () => {
   calc1(0, 1, 1, '+')
});
btnArr[2].addEventListener("click", () => {
   calc2(2, 3, 2)
});
btnArr[3].addEventListener("click", () => {
   calc3(4, 5, selectedIcon)
});
btnArr[4].addEventListener("click", () => {
   calc3(4, 5, '+')
});
btnArr[5].addEventListener("click", () => {
   calc3(4, 5, '-')
});
btnArr[6].addEventListener("click", () => {
   calc3(4, 5, '*')
});
btnArr[7].addEventListener("click", () => {
   calc3(4, 5, '/')
});
//EXO 4 
var calculator = document.getElementById("calculator");
var boutonsNL = calculator.getElementsByClassName("btn");
var boutons = Array.from(boutonsNL);
var display = document.getElementById("calculator_display");
var ecran = display.value;
var square = /\²/;
var cube = /\³/;
var powersymbol = /\^/;
var percent = /\%/;

function addConcat(targetTxt) {
   if (display.value.length == 0 && targetTxt == ".") {
      display.value = "0" + targetTxt;
      display.focus()
   } else if (display.value == 0) {
      display.value = targetTxt;
   } else {
      display.value += targetTxt;
      display.focus();
   }
}

function clear() {
   display.value = "";
   display.focus();
}

function ce() {
   display.value = display.value.substr(0, display.value.length - 1);
   display.focus();
}

function calc() {
   power();
   var calcul = display.value;
   display.value = mathFromString(calcul);
   display.focus();
}
// function percent() {
//    while (display.value.indexOf("%"))
//    display.value = display.value / 100;
//    display.focus();
// }
function power() {
   while (display.value.includes("²") == true) {
      var squares = display.value.match(square)
      display.value = display.value.replace(squares[0], "**2")
   }
   while (display.value.includes("³") == true) {
      var cubes = display.value.match(cube)
      display.value = display.value.replace(cubes[0], "**3")
   }
   while (display.value.includes("^") == true) {
      var powersymbols = display.value.match(powersymbol);
      console.log(powersymbols[0]);
      display.value = display.value.replace(powersymbols[0], "**");
   }
}

function checkKey() {
   if (window.event.keyCode == '13') {
      calc();
   }
   /* else if (window.event.keyCode == '192') {
           percent();
        } */
}
// function checkKeyUp() {
//    if (window.event.keyCode == '192') {
//       setTimeout(() => {
//          display.value = display.value.substr(0, display.value.length - 1)
//       }, 1);
//    }
// }
// display.addEventListener('keyup',checkKeyUp)
display.addEventListener("keydown", checkKey);
boutons.forEach(element => {
   if (element.innerText != "=" && element.innerText != "C" && element.innerText != "CE" && element.innerText != "%") {
      element.addEventListener('click', () => {
         addConcat(element.innerText)
      });
   } else if (element.innerText == "C") {
      element.addEventListener('click', clear);
   } else if (element.innerText == "CE") {
      element.addEventListener('click', ce);
   } else if (element.innerText == "=") {
      element.addEventListener('click', () => calc());
   } else if (element.innerText == "%") {
      element.addEventListener('click', percent)
   }
});

//A FAIRE :
// 2eme etage