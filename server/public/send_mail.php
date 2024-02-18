<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "goreaniket100@gmail.com"; // Change this to your email
    $subject = "Slot Booking Information";
    $message = "Stream: " . $_POST['stream'] . "\n";
    $message .= "Year: " . $_POST['year'] . "\n";
    $message .= "Subject: " . $_POST['subject'] . "\n";

    // Send email
    mail($to, $subject, $message);
}
?>
