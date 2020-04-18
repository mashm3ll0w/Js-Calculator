// jshint esversion:6

// Buttons for all selectors
let resetBtn = document.querySelector(".reset");
let deleteBtn = document.querySelector(".delete");
let equalBtn = document.getElementById("equals");
let divideBtn = document.getElementById("divide");
let multiplyBtn = document.getElementById("multiply");
let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let decimalBtn = document.getElementById("decimal");
let calcDisplay = document.querySelector(".calcDisplay");

// operate function
function operate(x, y, operator) {
	switch (operator) {
		case "/":
			return x / y;
		case "x":
			return x * y;
		case "+":
			return x + y;
		case "-":
			return x - y;
	}
}

// basic arithmetic functions
function divide() {
	calcDisplay.innerHTML += "/";
}
divideBtn.addEventListener("click", divide);

function multiply() {
	calcDisplay.innerHTML += "x";
}
multiplyBtn.addEventListener("click", multiply);

function add() {
	calcDisplay.innerHTML += "+";
}
addBtn.addEventListener("click", add);

function subtract() {
	calcDisplay.innerHTML += "-";
}
subtractBtn.addEventListener("click", subtract);

// special key functions [reset, delete and Equals]

function resetDisplay() {
	calcDisplay.innerHTML = "";
	decimalBtn.disabled = false;
}

function deleteNum() {
	let contentArr = [...calcDisplay.textContent];
	contentArr.splice(calcDisplay.textContent.length - 1, 1);
	calcDisplay.innerHTML = contentArr.join("");
}

function decimalPlace() {
	decimalBtn.disabled = true;
	setTimeout(() => {
		decimalBtn.disabled = false;
	}, 5000);
}

function doMath() {
	let equation = calcDisplay.textContent;
	let equationArr = equation.split(/([-\+\x\/])/); // split the equation into an array based on the operator signs

	// Solve for division and multiplication
	for (let x = 0; x < equationArr.length; x++) {
		if (equationArr[x] === "x" || equationArr[x] === "/") {
			equationArr[x - 1] = operate(parseFloat(equationArr[x - 1]), parseFloat(equationArr[x + 1]), equationArr[x]);
			equationArr.splice(x, 2);
			x -= 2;
		}
	}

	// solve for addition and subtraction
	for (let x = 0; x < equationArr.length; x++) {
		if (equationArr[x] === "+" || equationArr[x] === "-") {
			equationArr[x - 1] = operate(parseFloat(equationArr[x - 1]), parseFloat(equationArr[x + 1]), equationArr[x]);
			equationArr.splice(x, 2);
			x -= 2;
		}
	}
	calcDisplay.innerHTML = equationArr.join("");
}

// reset/clear button
resetBtn.addEventListener("click", resetDisplay);

// delete button
deleteBtn.addEventListener("click", deleteNum);

// Equal button
equalBtn.addEventListener("click", doMath);

// decimal button
decimalBtn.addEventListener("click", decimalPlace);

// capture all numbers
for (let x = 0; x < document.querySelectorAll(".number").length; x++) {
	document.querySelectorAll(".number")[x].addEventListener("click", function () {
		calcDisplay.innerHTML += this.innerHTML;
	});
}
