<?php

$name = $_POST['name'];
$contactperson = $_POST['contactperson'];
$email = $_POST['email'];
$message = $_POST['message'];


/* Send Email */

$to = "hovedantgupta@gmail.com";
$subject = "New Contact Form Message";

$body = "
Name: $name
Contact Person: $contactperson
Email: $email
Message: $message
";

$headers = "From: $email";

mail($to,$subject,$body,$headers);

header("Location: thankyou");

?>