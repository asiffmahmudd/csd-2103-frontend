$(document).ready(function() {
	// event handler for the click
	$("a").click(function(evt) {
		// toggling the class
		$(this).prev().toggleClass("hide");
        
		//changing the text of the a tag
		if ($(this).prev().attr("class") === "hide") {
			$(this).text("Show more");
		} else {
			$(this).text("Show less");
		}

		//preventing default behavior
		evt.preventDefault();
	});
});