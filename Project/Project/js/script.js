$(document).ready(function(){
    
    // form validation
    $(":text, #phone, #email, #questions").after("<span class='required-msg'></span>");
    // form submission
    $("#contact-form").submit(
        function (event){
            var isValid = true;

            // getting all the user input values
            var email = $("#email").val();
            var fName = $("#fName").val();
            var lName = $("#lName").val();
            var phone = $("#phone").val();
            var questions = $("#questions").val();

            // checking each value
            if(fName == ""){
                isValid = false;
                $("#fName").next().text("First name is a required field");
            }
            else{
                $("#fName").next().text("");
            }

            if(lName == ""){
                isValid = false;
                $("#lName").next().text("Last name is a required field");
            }
            else{
                $("#lName").next().text("");
            }

            if(phone == ""){
                isValid = false;
                $("#phone").next().text("Phone is a required field");
            }
            else{
                $("#phone").next().text("");
            }

            if(email == ""){
                isValid = false;
                $("#email").next().text("Email name is a required field");
            }
            else{
                $("#email").next().text("");
            }

            if(questions == ""){
                isValid = false;
                $("#questions").next().text("Please enter a description");
            }
            else{
                $("#questions").next().text("");
            }

            // if invalid prevent the default action
            if(!isValid){
                event.preventDefault();
            }
        }
    );


        // toggling the class
        // $(this).toggle(
        //     function(){
        //         $(this).prev().toggleClass("hide");
        //         $(this).prev().slideDown(1000, "easeOut");
        //     },
        //     function(){
        //         $(this).prev().toggleClass("hide");
        //         $(this).prev().slideUp(1000, "easeIn");
        //     }
        // );

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