var $ = function (id) {
    return document.getElementById(id); 
};

//validation for input
function validateInput(textField, fieldValue, minVal, maxVal){ 
	var isValid = true;
	if(!isNaN(fieldValue)){ // if it's not a number then it's invalid
		fieldValue = parseFloat(fieldValue); //trying to parse the input to double
		if(fieldValue <= minVal || fieldValue >= maxVal){ // validation for input range
			alert(textField + " must be > " + minVal + " and < " + maxVal); // alert for invalid input
			isValid = false;
		}
	}
	else{
		isValid = false;
		alert("Invalid value for "+textField);
	}
	return [isValid, fieldValue]; // returning valididity and parsed value
}

function processEntry(){
	var subTotal = $("subtotal").value;
	var taxRate = $("tax_rate").value;
	var isSubtotalValid = true;
	var isTaxRateValid = true;
	[isSubtotalValid, subTotal] = validateInput('Subtotal', subTotal, 0, 10000); // checking validity for subtotal input
	[isTaxRateValid, taxRate] = validateInput('Tax Rate', taxRate, 0, 12); // checking validity for tax rate
	
	if(isSubtotalValid && isTaxRateValid){ // if both are valid then we proceed to calculation
		var salesTax = (subTotal*taxRate)/100; // tax calculation
		var total = (subTotal + salesTax); // total calculation
		$("sales_tax").value = salesTax.toFixed(2); // setting text for tax field
		$("total").value = total.toFixed(2); // setting text for total field
	}
	$("subtotal").focus(); // setting focus to the subtotal field
}

//method for clearing all fields
function clearButtonEvent(){
	$("subtotal").value = "";
	$("tax_rate").value = "";
	$("sales_tax").value = "";
	$("total").value = "";
}

function clearEntry(id){
	$(this.id).value = "";
} 

//attaching all event handlers to it's events 
window.onload = function(){
	$("calculate").onclick = processEntry;
	$("clear").onclick = clearButtonEvent;
	$("tax_rate").onclick = clearEntry;
	$("subtotal").onclick = clearEntry;
	$("subtotal").focus();
}
