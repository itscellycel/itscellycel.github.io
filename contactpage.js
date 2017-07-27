
$(document).ready(function () {
    submitContactForm();
});



function submitContactForm() {

    $('#contact-form-submit').on("click",function (e) {
        e.preventDefault();
        var contactFirst = $('#contact-first').val();
        var contactLast = $('#contact-last').val();
        var contactEmail = $('#contact-email').val();
        var contactPhone = $('#contact-phone').val();
        var contactMessage = $('#contact-message').val();
        console.log(contactFirst)
        console.log(contactLast)
        console.log(contactEmail)
        console.log(contactPhone)
        console.log(contactMessage)

        // data validation code here
        var url = "//docs.google.com/forms/d/e/1FAIpQLScq4L1Ri9teYVCUM88wYZWStatmKvAe49VLimhOlgiD3mxgYQ/viewform#responses";
        var data = {
            'entry.2005620554': contactFirst,
            'entry.834360636': contactLast,
            'entry.1045781291': contactEmail,
            'entry.1166974658': contactPhone,
            'entry.839337160': contactMessage
        };
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            'Content-Type':'application/x-www-form-urlencoded',
            statusCode: {
                0: function () {
                    // TEMP: CORS ERROR is returning a 401 but data is still getting passed through. Always return a success
                    // window.location.href = "../volunteer";
                    console.log("someothing")
                    console.log(contactFirst)
                    console.log(contactLast)
                    console.log(contactEmail)
                    console.log(contactPhone)
                    console.log(contactMessage)
                },
                200: function () {
                    console.log("uuuuuuuuuuu")
                }
            }
        });
    });
}
