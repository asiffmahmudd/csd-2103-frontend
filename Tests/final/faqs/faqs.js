"use strict";
$(document).ready(function() { //ready function
    // $("#faqs h2").click(function(evt) {
    //     $(this).toggleClass("minus");
    //     if ($(this).attr("class") !== "minus") {
    //         $(this).next().hide();
    //     }
    //     else {
    //         $(this).next().show();
    //     }
    //     evt.preventDefault();
    // }); // end click
    // $("#faqs").find("a:first").focus();

    $( "#faqs" ).accordion({heightStyle: 'content'}); // invoking the accordion method with the proper id

}); // end ready