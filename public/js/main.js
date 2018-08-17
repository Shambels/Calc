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

function addConcat(targetTxt) {
   display.value += targetTxt;
}

function clear() {
   display.value = "";
}

function ce() {
   display.value = display.value.substr(0, display.value.length - 1)
}

function calc() {
   if (display.value.includes("^") == true) {
      power();
   }
   var resultat = display.value;
   display.value = stringMath(resultat);
}

function percent() {
   calc();
   display.value = display.value / 100;


}

function checkKey() {
   if (window.event.keyCode == '13') {
      calc();
   } else if (window.event.keyCode == '192') {
      percent();
   }
}
function checkKeyUp() {
   if (window.event.keyCode == '192') {
      setTimeout(() => {
         display.value = display.value.substr(0, display.value.length - 1)
      }, 1);
   }
}
function expose() {
   var i = expIndex
   while (i>0 && (display.value[i] !=("+" || "-" || "*" || "/" || "(" || ")"))) {
      i--
   }return i;
}
function exposeFin() {
   var i = expIndex + 1
   while (i<display.value.length && (display.value[i] !=("+" || "-" || "*" || "/" || "(" || ")" || "^"))) {
      i++
   }return i;
}
var expIndex;
function power() {
   expIndex = display.value.indexOf("^")
   var aIndex = expose();
   var bIndex =  exposeFin();
   var a = parseFloat(display.value.substring(aIndex, expIndex))
   var b = parseFloat(display.value.substring(expIndex + 1, bIndex))
   var powervalue = Math.pow(a, b);
   // var aplusb = a+"^"+b
   // var stringaplusb= aplusb.join();
   // console.dir(stringaplusb);
   // display.value.replace(stringaplusb, powervalue);
   // console.dir(display.value);
   var arrDisplay = Array.from(display.value);
   console.dir(arrDisplay);
   arrDisplay.splice(aIndex,(bIndex-aIndex), powervalue);
   var stringDisplay = arrDisplay.join('');
   display.value = stringDisplay;
   console.dir(stringDisplay);
};
display.addEventListener('keyup',checkKeyUp)
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
      element.addEventListener('click', calc);
   } else if (element.innerText == "%") {
      element.addEventListener('click', percent)
   }
});