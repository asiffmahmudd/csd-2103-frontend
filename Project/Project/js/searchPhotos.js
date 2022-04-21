$(document).ready(function(){
    //variable for tags
    var searchTerm;
    //on search button click event handler
    $('#search-btn').click(function(){
        searchTerm = "";
        // checking if search box is empty
        if($('#search-text').val() == ""){
            // showing alert for empty search box
            alert("Please enter at least one tag!");
        }
        else{
            //getting the value for the tags
            searchTerm = $('#search-text').val();
            // setting the api url
            var url = "http://api.flickr.com/services/feeds/" +
                      "photos_public.gne?format=json&jsoncallback=?" +
                      "&tags=" + searchTerm + "&tagmode=all";
            
            // calling the api to get data and setting the html to the desired div element
            $.getJSON(url, function(data){
                var html = "";
                $.each(data.items, function(i, item){
                    html += "<div class='photo-item'>";
                    html += "<img src=" + item.media.m + ">";
                    html += "<h5 class='text-center'>" + item.title + "</h5>";
                    html += "</div>"
                });
                $("#photos").html(html);
            })
        }
    })
})