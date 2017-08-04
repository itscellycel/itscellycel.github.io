
$(document).ready(function () {
  $("#contact-form-submit").prop("disabled",true);
    $("#contact-form-submit").click(function(){
      console.log("1")
      var contactFirst= $("#contact-first").val();
      var contactLast= $("#contact-last").val();
      var contactMessage= $("#contact-message").val();
      var contactPhone= $("#contact-phone").val();
      var contactEmail= $("#contact-email").val();
      if (validateForm()){
        // emailjs.send("gmail","template_UPluqtLC",{firstname: contactFirst, lastname:contactLast,  message: contactMessage, phonenumber: contactPhone, email: contactEmail});
        console.log("2")
        alert("Thank you for your message, I'll be recieving your email shortly!");
        $("#contact_form")[0].reset();
      }
    });
});

function enableBtn(){
  $("#contact-form-submit").prop("disabled",false);
}

// I tried this JS code to see if I can make the fields on my contact for to be required before submission. This code need to be looked over to make sure it was written correctly.

function validateForm() {
    var contactFirst= $("#contact-first").val();
    var contactLast= $("#contact-last").val();
    var contactMessage= $("#contact-message").val();
    var contactPhone= $("#contact-phone").val();
    var contactEmail= $("#contact-email").val();
    console.log(contactFirst);
    console.log(contactLast);
    console.log(contactMessage);
    console.log(contactPhone);
    console.log(contactEmail);
    //First Name
    if (contactFirst == "") {
        alert("Field Cannot Be Left Blank");
        return false;  }
    else
    {
      return true;
    }
// Last Name
    if (contactLast == "") {
        alert("Field Cannot Be Left Blank");
        return false;  }
    else
    {
      return true;
    }
// Email
if (contactEmail == "") {
    alert("Field Cannot Be Left Blank");
    return false;  }
else
{
  return true;
}

//Phone Number
if (contactPhone == "") {
    alert("Field Cannot Be Left Blank");
    return false;  }
else
{
  return true;
}

// Message
if (contactMessage == "") {
    alert("Field Cannot Be Left Blank");
    return false;  }
else
{
  return true;
}
}




// Ignore this code for now
//
// function submitContactForm() {
//
//     $('#contact-form-submit').on("click",function (e) {
//         e.preventDefault();
//         var contactFirst = $('#contact-first').val();
//         var contactLast = $('#contact-last').val();
//         var contactEmail = $('#contact-email').val();
//         var contactPhone = $('#contact-phone').val();
//         var contactMessage = $('#contact-message').val();
//
//         var url = "//docs.google.com/forms/d/e/1FAIpQLScq4L1Ri9teYVCUM88wYZWStatmKvAe49VLimhOlgiD3mxgYQ/viewform#responses";
//
//         var data = {
//             'entry.2005620554': contactFirst,
//             'entry.834360636': contactLast,
//             'entry.1045781291': contactEmail,
//             'entry.1166974658': contactPhone,
//             'entry.839337160': contactMessage
//         };
//         console.log(contactPhone)
//         $.ajax({
//             type: "POST",
//             url: url,
//             dataType: "json",
//             data: data,
//             'Content-Type':'application/x-www-form-urlencoded',
//             statusCode: {
//                 0: function () {
//                     // TEMP: CORS ERROR is returning a 401 but data is still getting passed through. Always return a success
//                     // window.location.href = "../volunteer";
//                     console.log("someothing")
//                 },
//                 200: function () {
//                     console.log("uuuuuuuuuuu")
//                 }
//             }
//         });
//     });
// }
