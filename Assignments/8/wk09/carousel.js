/* carousel.js */
$(document).ready(function(){
	var slider = $("#image_list");
	var leftProperty, newLeftProperty;
	
	// click event handler for the right button
	$("#right_button").click(function(){
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		
		// set the new value for left
		if (leftProperty - 300 <= -900){
			newLeftProperty = 0;
		} else {
			newLeftProperty = leftProperty - 300;
		}
		
		// animate the slider
		slider.animate({left: newLeftProperty}, 1000, "easeInOutExpo");
		
	}); // end of right button click
	
	
	// click event handler for the left button
	$("#left_button").click(function(){
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		
		// set the new value for left
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		} else {
			newLeftProperty = 0;
		}
		
		// animate the slider
		slider.animate({left: newLeftProperty}, 1000, "easeOutBounce");
	});
	
}); // end of ready





