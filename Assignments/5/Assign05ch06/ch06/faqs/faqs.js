"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag
    var arr_h2 = $("faqs").getElementsByTagName("h2");
    for(var i = 0; i < arr_h2.length; i++){
        if(arr_h2[i] == h2){ // checking if the current iteration has the clicked h2
            // toggle plus and minus image in h2 elements by adding or removing a class
            if (arr_h2[i].hasAttribute("class")) { 
                arr_h2[i].removeAttribute("class");	
            } else { 
                arr_h2[i].setAttribute("class", "minus"); 
            }
            // toggle div visibility by adding or removing a class
            if (div.hasAttribute("class")) { 
                div.removeAttribute("class");
            } else { 
                div.setAttribute("class", "open"); 
            }
        }
        else{
            arr_h2[i].removeAttribute("class"); // removing class from h2 that wasn't clicked
            var div2 = arr_h2[i].nextElementSibling; // next div sibling if the h2 that wasn't clicked
            div2.removeAttribute("class"); // removing class
             
        }
    }
};

window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
};
