<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = 'Message from Logistiks';
	$to = "contact@logistik-solutions.com";
	$from = $_POST['email'];

	// data

    $msg = '
    <div style="width:100%; background:#3c8d6f; position:relative; font-family:sans-serif; padding-bottom:40px">
	<center><img style="padding:20px; width:30%" src="https://logistik-solutions.com/img/logo.png"></center>

	<div style="position:relative; margin:auto; width:600px; background:white; padding-bottom:20px">

		<center>

		<h3 style="font-weight:100; color:#999;">Phone: '.$_POST['phone'].'</h3>

		<hr style="width:80%; border:1px solid #ccc">

		<h4 style="font-weight:100; color:#999; padding:0px 20px; text-transform:uppercase">Name: '.$_POST['name'].' '.$_POST['last_name'].'</h4>

		<h4 style="font-weight:100; color:#999; padding:0px 20px;">Email: '.$_POST['email'].'</h4>

		<h4 style="font-weight:100; color:#999; padding:0px 20px">'.$_POST['message'].'</h4>

		<hr style="width:80%; border:1px solid #ccc">

		</center>

	</div>

</div>
    ';

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>