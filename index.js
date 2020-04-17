//jshint esversion:6

// select necessary buttons and initialize variables
let display = document.querySelector(".display");
let resetBtn = document.querySelector(".resetBtn");
let equals = document.querySelector(".equalSign");
let deleteBtn = document.querySelector(".deleteBtn");
let addBtn = document.querySelector(".addOptr");
let subtractBtn = document.querySelector(".subOptr");
let multiplyBtn = document.querySelector(".multiOptr");
let divideBtn = document.querySelector(".divOptr");
let num1 = 0;
let num2 = 0;
let operator = "";

// Define all the operation functions
function add() {
	num1 = parseFloat(display.textContent);
	display.innerHTML = "";
	operator = "+";
}
addBtn.addEventListener("click", add);

function subtract() {
	num1 = parseFloat(display.textContent);
	display.innerHTML = "";
	operator = "-";
}
subtractBtn.addEventListener("click", subtract);

function multiply() {
	num1 = parseFloat(display.textContent);
	display.innerHTML = "";
	operator = "x";
}
multiplyBtn.addEventListener("click", multiply);

function divide() {
	num1 = parseFloat(display.textContent);
	display.innerHTML = "";
	operator = "/";
}
divideBtn.addEventListener("click", divide);

// define the operation results;
function operate(num1, num2, operator) {
	switch (operator) {
		case "+":
			return num1 + num2;

		case "-":
			return num1 - num2;

		case "x":
			return num1 * num2;

		case "/":
			return num1 / num2;
	}
}

// Add event listener to the numbers
for (let x = 0; x < 10; x++) {
	document.querySelector(".num" + x).addEventListener("click", function () {
		display.innerHTML += this.innerText;
	});
}

equals.addEventListener("click", function(){
  num2 = parseFloat(display.textContent);
  let result = operate(num1, num2, operator);
  display.innerHTML = result;
});

// Decimal Point
document.querySelector(".decimal").addEventListener("click", function () {
	display.innerHTML += this.innerText;
	this.disabled = true;
});

// Clear/Reset Button
resetBtn.addEventListener("click", function () {
	display.innerHTML = "";
	document.querySelector(".decimal").disabled = false;
});

//Delete button
deleteBtn.addEventListener("click", function () {
  let numArr = display.textContent.split("");
  numArr.splice(numArr.length - 1, 1);
  display.innerHTML = numArr.join("");
});
