<?php

@session_start();

if ($_SERVER['REQUEST_METHOD'] != 'GET') {
	echo json_encode(array('success' => false, 'message' => 'accept only GET'));
	exit;
}

if (isset($_SESSION['user'])) {
    $status = true;
} else {
    $status = false;
}

echo json_encode(array("status" => $status));