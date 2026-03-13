$("#contactForm").submit(function (e) {

    e.preventDefault();

    $.ajax({
        url: "contact_process.php",
        type: "POST",
        data: $(this).serialize(),

        success: function (response) {
            $("#responseMsg").html(response);
            $("#contactForm")[0].reset();
        }

    });

});