<?php

define('DB_NAME', 'register_db');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
$result_array = array();


//connection 
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if ($conn === false ) {
    die ("ERROR: Could not connect. "
    . mysqli_connect_error());
}


