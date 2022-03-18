//menu plugin
(function($){
    $.fn.menuHoverEffect = function(){
        return this.each(function(){
            var menuItems = $("a li");
            var dropdown = $(".dropdown li");
            var dropdownOptions = $(".dropdown .dropdown-options");

            //changing the style while mouse hover on the item
            menuItems.mouseover(function(){
                $(this).css("background-color", "rgb(1,1,1, 0.08)").css("color", "#242424");
            });

            //changing back the style when the mouse is out of the item
            menuItems.mouseout(function(){
                $(this).css("background-color", "#242424").css("color", "rgb(248,248,255)");
            });


            // same effect for the report dropdown menu options
            dropdown.mouseover(function(){
                $(this).css("background-color", "rgb(1,1,1, 0.08)").css("color", "#242424");
            });
            dropdown.mouseout(function(){
                $(this).css("background-color", "#242424").css("color", "rgb(248,248,255)");
            });

            // effect for the parent dropdown option
            dropdownOptions.mouseover(function(){
                dropdown.first().css("background-color", "rgb(1,1,1, 0.08)").css("color", "#242424");
            });
            dropdownOptions.mouseout(function(){
                dropdown.first().css("background-color", "#242424").css("color", "rgb(248,248,255)");
            });
        });
    }
})(jQuery);