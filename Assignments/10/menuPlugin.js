//menu plugin
(function($){
    $.fn.menuHoverEffect = function(){
        return this.each(function(){
            var menuItems = $("a li");

            //changing the style while mouse hover on the item
            menuItems.mouseover(function(){
                $(this).css("background-color", "rgb(1,1,1, 0.08)").css("color", "#242424");
            });

            //changing back the style when the mouse is out of the item
            menuItems.mouseout(function(){
                $(this).css("background-color", "#32CD32").css("color", "#ff1122");
            });
        });
    }
})(jQuery);