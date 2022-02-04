"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

//validation for input
function validateInput(textField, fieldValue, minVal){ 
	var isValid = true;
	if(!isNaN(fieldValue)){ // if it's not a number then it's invalid	
        fieldValue = parseFloat(fieldValue); // parse the input to float
		if(fieldValue <= minVal){ // validation for input range
			alert(textField + " must be > " + minVal); // alert for invalid input
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
function calculateTax(income){
	income = parseInt(income); // converting income to integer
    var taxableAmount = 0;

    //calculating tax for different amount
    if(income <= 9275){
        taxableAmount = 0 + income*10/100;
    }
    else if(income <= 37650){
        taxableAmount = 927.50 + income*15/100;
    }
    else if(income <= 91150){
        taxableAmount = 5183.75 + income*25/100;
    }
    else if(income <= 190150){
        taxableAmount = 18558.75 + income*28/100;
    }
    
    else if(income <= 413350){
        taxableAmount = 46278.75 + income*33/100;
    }
    
    else if(income <= 415050){
        taxableAmount = 119934.75 + income*35/100;
    }
    
    else{
        taxableAmount = 120529.75 + income*39.6/100;
    }
    taxableAmount = taxableAmount.toFixed(2); // setting the two decimal place
    $("tax").value = taxableAmount; // setting the tax field
}

function processEntry(){
	var income = $("income").value;
	var isIncomeValid = true;
	[isIncomeValid, income] = validateInput('Income', income, 0); // checking validity for cents input
	
	if(isIncomeValid){ // if valid then we proceed to calculation
		calculateTax(income); // calling makeChange function
	}
	$("income").focus(); // setting focus to the income field
}


//attaching all event handlers to it's events 
window.onload = function(){
	$("calculate").onclick = processEntry;
	$("income").focus();
}
