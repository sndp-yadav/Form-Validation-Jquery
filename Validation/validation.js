<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
</head>


<script type="text/javascript">
jQuery.validator.addMethod("lettersonly", function(value, element) {
return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only Character");

jQuery.validator.addMethod("phoneno", function(phone_number, element) {
phone_number = phone_number.replace(/\s+/g, "");
return this.optional(element) || phone_number.length > 9 && 
phone_number.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
},);

$(document).ready(function() {
  $("#form").validate({
    rules: {
      name : {
        required: true,
        lettersonly: true
      },
      phonenumber: {
        required: true,
        phoneno: true
      },
      email: {
        required: true,
        email: true
      },
    },
    messages : {
      name: {
        required: "Only Character"
      },
      phonenumber: {
        required: "Please enter valid number",
        phoneno: "Please enter valid number"
      },
      email: {
        required: "The email should be '@' "
      }
    }
  });
});
</script>