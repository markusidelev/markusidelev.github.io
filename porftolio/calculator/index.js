var display = document.querySelector('.display'),
oprdisplay = document.querySelector('.oper-display'),
numbers = document.querySelectorAll('.number'),
operators = document.querySelectorAll('.operator'),
num1 = "",
num2 = "",
plus = document.querySelector('plus'),
equals = document.querySelector('.equals'),
result,
operator;


var setNum = function() {
	if(result) {
		num1 = this.getAttribute('data-num');
		result = "";
	} else {
		num1 += this.getAttribute('data-num');
	}
	display.innerHTML = num1;
	if (num1.length > 7 ) {
		display.style.fontSize="50px";
		display.style.lineHeight="60px";
	} 

	else {
		display.style.fontSize="90px";
	};


};


var moveNum = function() {
	num2 = num1;
	num1 = "";
	operator = this.getAttribute("data");
	oprdisplay.innerHTML = this.innerHTML;

	equals.setAttribute('data-result','');
};

var displayNum = function() {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	switch (operator) {
		case 'plus':
		result = num2 + num1;
		break;

		case 'minus':
		result = num2 - num1;
		break;

		case 'mnoj':
		result = num2 * num1;
		break;

		case "devide":
		result = num2 / num1;
		break;

		case "cube":
		result = Math.pow(num2,2);
		break;

		case "square":
		result = Math.sqrt(num2);
		break;

		case "exponent":
		result = Math.pow(num2,num1);
		break;

		default: 
		result=num2;
	}

	oprdisplay.innerHTML = '=';
	
	display.innerHTML = result;

	if (display.innerHTML.length > 7) {
		display.style.fontSize = "50px";
		display.style.lineHeight = "60px";
		
	} else {
		display.style.fontSize = "90px";
		display.style.lineHeight = "95px";

	};

	equals.setAttribute("data-result", result);
	result
	num2 = 0;
	num1 = result;
};

var clearAll = function() {
	num1 = '';
	num2 = '';
	display.innerHTML = '0';
	oprdisplay.innerHTML = '';
	equals.setAttribute('data-result', result);
	display.style.fontSize="90px";
	display.style.lineHeight = "95px";
};

for (var i = 0, l = numbers.length; i < l; i++) {
	numbers[i].onclick = setNum;
};

for (var i = 0, l = operators.length; i < l; i++) {
	operators[i].onclick = moveNum;

};


equals.onclick = displayNum;


document.querySelector('.clear').onclick = clearAll;












