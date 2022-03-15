"use strict";

$(document).ready(function() {

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

    // moving the focus to the first link
    $("#image_list").find("a:first").focus();
});