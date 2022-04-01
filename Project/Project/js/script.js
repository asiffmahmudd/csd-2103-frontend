$(document).ready(function(){
    // event handler for the expand link on about page
    $(".section-para .hidden").slideUp();
	$(".expand-collapse").click(function(evt) {
		//changing the text of the a tag
		if ($(this).prev().attr("class") == "hidden") {
            $(this).prev().slideDown();
			$(this).text("Show less");
            $(this).prev().removeClass("hidden");
		} else {
            $(this).prev().slideUp();
			$(this).text("Show more");
            $(this).prev().addClass("hidden");
		}

		//preventing default behavior
		evt.preventDefault();
	});


    //slide for images
    $("#image_list a").each(function() {        
        // getting the attributes for the image
        var url = $(this).attr("href");
		var title = $(this).attr("title");

        // preload the images
		var img = new Image();
		img.src = url;

        // event handler for the click and changing the picture in the gallery
        $(this).click(function(evt){
            $("#gallery img").attr('src', url);
            $("#caption").text(title);

            evt.preventDefault();
        })
	});

    //calling the menuPlugin
    $(".nav-option-container").menuHoverEffect();

    //color transition in about page
    $(".testimonials .card .item").each(function(){
        // on enter do the animation
        $(this).mouseenter(function(){
            $(this).animate({
                color: "#8f8f8f",
                backgroundColor: "#f8f8ff",
                transition: "ease-in-out"
            });
        });

        // on mouse leave stop the animation and revert back the changes
        $(this).mouseleave(function(){
            $(this).stop();
            $(this).css("color", "black").css("background-color", "white");
        });
    });

});