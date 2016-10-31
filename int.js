function errorMessage(msg) {
	if (msg != "") {
		alert(msg);
		return false;
	}
	else {
		return true;
	}
}

function validateNum() {
	var msg = "";
	var number = new RegExp("[0-9]+");
	var num = document.getElementById("num").value;
	if (number.test(num)) {
		num = parseInt(num);
		if (num < 1 || num > 10000) {
			msg += "The number of integers must be greater than 1 and smaller than 10000\n";
		}
	}
	else {
		msg += "The input is not valid. Must be a number\n";
	}
	
	errorMessage(msg);
}

function validateMinMax() {
	var msg = "";
	var number = new RegExp("[0-9]+");
	var min = document.getElementById("min").value;
	if (number.test(min)) {
		min = parseInt(min);
		if (min < -1000000000 || min > 1000000000) {
			msg += "The minimum value must be between -1000000000 and 1000000000\n";
		}
	}
	else {
		msg += "The input is not valid. Must be a number\n";
	}
	
	var max = document.getElementById("max").value;
	if (number.test(max) {
		max = parseInt(max);
		if (max > 1000000000 || max < -1000000000) {
			msg += "The maximum value must be between -1000000000 and 1000000000\n";
		}
	}
	else {
		msg += "The input is not valid. Must be a number\n";
	}
	
	if (min > max) {
		msg += "The minimum value can't be greater than the maximum value\n";
	}
	
	errorMessage(msg);
}

function validateCol() {
	var msg = "";
	var number = new RegExp("[0-9]+");
	var col = document.getElementById("col").value;
	if (number.test(col)) {
		col = parseInt(col);
		if (col < 0) {
			msg += "The number of columns must be greater than 0\n";
		}
		else {
			msg += "The number of columns must be a number\n";
		}
	}
	
	errorMessage(msg);
}
