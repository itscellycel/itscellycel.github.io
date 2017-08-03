
$(document).ready(function () {
  $("#contact-form-submit").prop("disabled",true);
    $("#contact-form-submit").click(function(){
      validateForm();
      console.log("1")
      var contactFirst= $("#contact-first").val();
      var contactLast= $("#contact-last").val();
      var contactMessage= $("#contact-message").val();
      var contactPhone= $("#contact-phone").val();
      var contactEmail= $("#contact-email").val();
      // emailjs.send("gmail","template_UPluqtLC",{firstname: contactFirst, lastname:contactLast,  message: contactMessage, phonenumber: contactPhone, email: contactEmail});
      console.log("2")
      alert("Thank you for your message, I'll be recieving your email shortly!");
      $("#contact_form")[0].reset();
    });
});

function enableBtn(){
  $("#contact-form-submit").prop("disabled",false);
}

// I tried this JS code to see if I can make the fields on my contact for to be required before submission. This code need to be looked over to make sure it was written correctly.

function validateForm() {
    var contactFirst= $("#contact-first").val();
    if (contactFirst == "") {
        alert("Field Cannot Be Left Blank");
        return false;
//         var contactLast = document.forms["”ContactMe”"]["#contact-;last,"].value;
//         if (contactLast == "") {
//             alert("Field Cannot Be Left Blank");
//             return false;
//             var contactEmail = document.forms["”ContactMe”"]["#contact-email,"].value;
//             if (contactEmail == "") {
//                 alert("Field Cannot Be Left Blank");
//                 return false;
//                 var contactPhone = document.forms["”ContactMe”"]["#contact-phone,"].value;
//                 if (contactPhone == "") {
//                     alert("Field Cannot Be Left Blank");
//                     return false;
//                     var contactMessage = document.forms["”ContactMe”"]["#contact-message,"].value;
//                     if (contactMessage == "") {
//                         alert("Field Cannot Be Left Blank");
//                         return false;
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
