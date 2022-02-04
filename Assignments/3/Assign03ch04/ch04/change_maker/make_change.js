var $ = function(id) {
    return document.getElementById(id);
};

//validation for input
function validateInput(textField, fieldValue, minVal, maxVal){ 
	var isValid = true;
	fieldValue = Number(fieldValue); // parse the input to number
	if(Number.isInteger(fieldValue)){ // if it's not an integer then it's invalid	
		if(fieldValue < minVal || fieldValue > maxVal){ // validation for input range
			alert(textField + " must be > " + minVal + " and < " + maxVal); // alert for invalid input
			isValid = false;
		}
	}
	else{
		isValid = false;
		alert("Invalid value for "+textField);
	}
	return [isValid, fieldValue]; // returning validity and parsed value
}

//making change in the 4 fields of coins
function makeChange(cents){
	var quarters = 0, dimes = 0, nickels = 0, pennies = 0; // initializing variables for all 4 coins
	
	//calculating amount for each coins
	if(cents >= 25){
		quarters = Math.floor(cents/25);
		cents = cents%25;
	}
	if(cents >= 10){
		dimes = Math.floor(cents/10);
		cents = cents%10;
	}
	if(cents >= 5){
		nickels = Math.floor(cents/5);
		cents = cents%5;
	}
	pennies = cents;
	
	//changing values of the text fields
	$("quarters").value = quarters;
	$("dimes").value = dimes;
	$("nickels").value = nickels;
	$("pennies").value = pennies;
}

function processEntry(){
	var cents = $("cents").value;
	var isCentsValid = true;
	[isCentsValid, cents] = validateInput('Cents', cents, 0, 99); // checking validity for cents input
	
	if(isCentsValid){ // if valid then we proceed to calculation
		makeChange(cents); // calling makeChange function
	}
	$("cents").focus(); // setting focus to the cents field
}


//attaching all event handlers to it's events 
window.onload = function(){
	$("calculate").onclick = processEntry;
	$("cents").focus();
}
