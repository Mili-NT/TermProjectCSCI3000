const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.head.appendChild(script);

$(document).ready(function() {
    // When the form is submitted
    $('#reservation-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission behavior

        // Get the form data
        const formData = $(this).serialize();

        // Send a POST request to the /reserve endpoint
        $.ajax({
            type: 'POST',
            url: '/reserve',
            data: formData,
            success: function(response) {
                // Handle successful response
                console.log(response);
            },
            error: function(xhr, status, error) {
                // Handle error response
                console.log(xhr.responseText);
            }
        });
    });
});