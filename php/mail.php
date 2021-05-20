<?php


$router = new Router

$router->post('/test', function($request) {
    // How to get data from request body
    $body = $request->getBody();
    echo($body)
    return 'nice'
});

$to = $_POST['email'];
$subject = "Email Subject";

$message = 'Dear '.$_POST['name'].',<br>';
$message .= "We welcome you to be part of family<br><br>";
$message .= "Regards,<br>";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <enquiry@example.com>' . "\r\n";
$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);
?>