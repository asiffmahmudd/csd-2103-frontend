$(document).ready(function() {
    //focusing on the first text box of the form
    $('#arrival_date').focus();

    //rules for the validation of the form
    $("#reservation_form").validate({
        rules: {
            arrival_date: {
                required: true,
                date:true,
                dateITA: true
            },
            nights: {
                required: true,
                number:true
            },
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                minlength:10,
                maxlength:10
            }
        },
        
        //error messages
        messages: {
            arrival_date: {
                required: "This field is required",
                date: "Please enter a valid date format (mm/dd/yyyy)",
                dateITA: "Please enter a valid date format (mm/dd/yyyy)"
            },
            nights: {
                required: "This field is required",
                number: "Please enter a valid number"
            },
            name: "This field is required",
            phone: {
                required: "Please provide a phone number",
                minlength: "Please enter a valid phone number",
                maxlength: "Please enter a valid phone number",
                number: "Please enter a valid phone number",
                matches: "Please enter a valid phone number"
            },
            email: {
                email:"Please enter a valid email address",
                required: "This field is required"
            }
        },

        // connects with the submit button
        submitHandler: function(form) {
            form.submit();
        }
    });

}); // end ready
