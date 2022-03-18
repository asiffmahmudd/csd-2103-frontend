$(document).ready(function(){
    //loading the json file
    $.getJSON("./employees.json", function(data){ 
        $.each(data, function(){
            $.each(this, function(key, value){
                //appending the values into the div
                $(".team-list").append(
                    "<div class='list-item-container'>"+
                        "<div class='list-item'>"+
                            "<p><span><strong>Name</strong></span> : " + value.name + "</p>"+
                            "<p><span><strong>Title</strong></span>: " + value.title + "</p>"+
                            "<p><span><strong>Department</strong></span>: " + value.department + " </p>"+
                            "<p><span><strong>Bio</strong></span>: " + value.bio + " "+
                        "</div>"+
                    "</div>"
                )
            })
        })
    })
})