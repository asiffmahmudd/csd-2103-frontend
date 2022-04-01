$(document).ready(function(){
    //rules for the validation of the form
    $("#contact-form").validate({
        rules: {
            fName: {
                required: true
            },
            lName: {
                required: true
            },
            questions: {
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
            fName: "This field is required",
            lName: "This field is required",
            questions: "This field is required",
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

})