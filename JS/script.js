var operation="";
var operands = [];
var result=0;
var counter=0;

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

function display (operation) {
	if(operation == "="){
	var display= calculate();
	console.log(display);
	document.getElementById("screen").value= display;
	operands = [];
	}
}

function calculate(operation){
	var txt = document.getElementById("screen").value;
	txt = parseFloat(txt);
	operands.push(txt);
	clearEntry();
	var total=0;
	if(operation === '+'){
		for (var i = 0; i < operands.length; i++) {
			total += operands[i];
		};
		result = total;
	}
	else if(operation === '-'){
	    if(operands.length == 1){
			total = operands[counter];
		}
		while(operands.length > 1){
			total -= operands[counter];
		}
		result = total;
	}
	 else if(operation === '*'){
		if(operands.length == 1){
			total = operands[counter];
		}
		while(operands.length > 1){
			total *= operands[counter];
		}
		result = total;
	}
	else if(operation === '/'){
		if(operands.length == 1){
			total = operands[counter];
		}
		while(operands.length > 1){
			total /= operands[counter];
		}
		result = total;
	}
	console.log(operands);
	counter++;
	return result;
}