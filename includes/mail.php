<?php
   /* $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    $from = 'From: Podge and Tin Website'; 
    $to = 'christopherjohnemms@gmail.com'; 
    $human = $_POST['human'];
			
    $body = "From: $name\n E-Mail: $email\n Subject:$subject \n Message:\n $message";
				
    if ($_POST['submit']) {
    if ($name != '' && $email != '') {
        if ($human == '4') {				 
            if (mail ($to, $subject, $body, $from)) { 
	        echo '<p>Your message has been sent!</p>';
	    } else { 
	        echo '<p>Something went wrong, go back and try again!</p>'; 
	    } 
	} else if ($_POST['submit'] && $human != '4') {
	    echo '<p>You answered the anti-spam question incorrectly!</p>';
	}
    } else {
        echo '<p>You need to fill in all required fields!!</p>';
    }
}*/

    $to = "podgeandtin@gmail.com"; 
    $from = $_REQUEST['email']; 
    $name = $_REQUEST['name']; 
    $headers = "From: $from"; 
    $subject = "PT Website - Contact Request"; 
    $fields = array(); 
    $fields{"name"} = "name"; 
    $fields{"email"} = "email"; 
    $fields{"phone"} = "phone"; 
    $fields{"subject"} = "subject";
    $fields{"message"} = "message";
    
    $body = "Message from P&T Website:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);

?>