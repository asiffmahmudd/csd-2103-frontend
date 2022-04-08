$(document).ready(function(){
    var searchTerm;
    $('#search-btn').click(function(){
        searchTerm = "";
        if($('#search-text').val() == ""){
            alert("Please enter at least one tag!");
        }
        else{
            searchTerm = $('#search-text').val();
            var url = "http://api.flickr.com/services/feeds/" +
                      "photos_public.gne?format=json&jsoncallback=?" +
                      "&tags=" + searchTerm + "&tagmode=all";
            
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