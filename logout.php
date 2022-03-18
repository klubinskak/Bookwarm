<?php
session_start();
unset($_SESSION['email']);
$_SESSION['profileImage'] = './assets/profile-picture/avatar.jpg';

header("Location: login.php");
session_destroy();


exit;
?>