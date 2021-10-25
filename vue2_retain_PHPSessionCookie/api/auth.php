<?php
// header($_SERVER['SERVER_PROTOCOL'] . ' 406 Internal Server Error', true, 406);
// exit;	

@session_start();

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
	echo json_encode(array('success' => false, 'message' => 'accept only POST'));
	exit;
}

if ( isset($_POST['logoff']) ) {
	unset($_SESSION["user"]);
	echo json_encode(array('success' => true, 'message' => 'user successfully logged out'));
	exit;
}

if ( !isset($_POST['username']) || !isset($_POST['password']) ) {
	echo json_encode(array('success' => false, 'message' => 'no valid object parameters'));
	exit;
}


if ($_POST['username'] == 'admin' && $_POST['password'] == 'admin') {
	
	$_SESSION['user'] = 'admin';
	
	echo json_encode(array('success' => true, 'message' => 'user successfully logged in'));
	
} else {
	echo json_encode(array('success' => false, 'message' => 'invalid login'));
}