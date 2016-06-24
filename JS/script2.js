var operands = [];
var result=0;
var lastOperator = "";

function printValue(val){
	var text= document.getElementById("screen").value;
	text= text+val;
	document.getElementById("screen").value=text;
}

function clearEntry(){
	document.getElementById("screen").value="";
}

function clearLastEntry(){
	var text= document.getElementById("screen").value;
	text= text.substring(0,text.length-1);
	document.getElementById("screen").value=text;
}


function display (currentOperator) {
	if(document.getElementById("screen").value == ""){
		alert("Enter a value");
		return;
	}
	var display= calculate(currentOperator);
	console.log(display);
	document.getElementById("screen").value= display;
	operands = [];
}

function calculate(currentOperator){
	
	lastOperator = currentOperator != "=" ? currentOperator : lastOperator;
	var txt = document.getElementById("screen").value;
	txt = parseFloat(txt);
	operands.push(txt);
	clearEntry();
	var total=0;

	if(lastOperator == "+"){
		console.log(lastOperator);
		for (var i = 0; i < operands.length; i++) {
			total += operands[i];
		};
		result = total;
	}
	else if(lastOperator == "-"){
		console.log(lastOperator);
		if (operands.length == 1) {
			total = operands[0];
		} else {
			total = operands[0];
			console.log('BeforeLoop: ',total);
			for (var i = 1; i < operands.length; i++) {
				console.log('CurrentTotal: ', total);
				total -= operands[i];
				console.log('CalculatedTotal: ', total);
			}
		}
		console.log('Check -> ', total);
		result = total;
	}
	 else if(lastOperator === "*"){
	console.log(lastOperator);
		if (operands.length == 1) {
			total = operands[0];
		} 
		else {
			total = operands[0];
			console.log('BeforeLoop: ',total);
			for (var i = 1; i < operands.length; i++) {
				console.log('CurrentTotal: ', total);
				total *= operands[i];
				console.log('CalculatedTotal: ', total);
			}
		}
		result = total;
	}
	else if(lastOperator === "/"){
		console.log(lastOperator);
		if (operands.length == 1) {
			total = operands[0];
		} 
		else {
			total = operands[0];
			console.log('BeforeLoop: ',total);
			for (var i = 1; i < operands.length; i++) {
				console.log('CurrentTotal: ', total);
				total /= operands[i];
				console.log('CalculatedTotal: ', total);
			}
		}
		result = total;
	}
	return result;
}
