"use strict";
var $ = function(id) { return document.getElementById(id); };

var toCelsius = function(){
    clearTextBoxes(); // clearing text boxes
    $("to_celsius").setAttribute("checked", true); // changing checked attribute
    $("to_fahrenheit").setAttribute("checked", false); // changing checked attribute
    $("degree_label_1").innerHTML = "Enter F degrees:"; // changing text of the first label
    $("degree_label_2").innerHTML = "Degrees Celsius:";    
}

var toFahrenheit = function(){
    clearTextBoxes(); // clearing text boxes
    $("to_celsius").setAttribute("checked", false); // changing checked attribute
    $("to_fahrenheit").setAttribute("checked", true); // changing checked attribute
    $("degree_label_1").innerHTML = "Enter C degrees:"; // changing text of the first label
    $("degree_label_2").innerHTML = "Degrees Fahrenheit:"; // changing text of the second label
}

// clearing text boxes
var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

var convertTemp = function(){
    var user_input = $("degrees_entered").value; // storing user input in a variable
    if(isNaN(user_input)){ // checking for valid value
        alert("You must enter a valid number for degrees."); // showing alert for invalid value
        clearTextBoxes(); // clearing text boxes
    }
    else{
        if($("to_celsius").checked){
            user_input = parseFloat(user_input); // parsing user input
            $("degrees_computed").value = ((user_input-32)*5.00/9).toFixed(0);  // calculating value
        }
        else{
            user_input = parseFloat(user_input); // parsing user input
            $("degrees_computed").value = (((user_input*9.00)/5)+32).toFixed(0); // calculating value
        }
    }
    $("degrees_entered").focus(); // focusing on the user input text box
}

// on window load, attaching the event handlers
window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};