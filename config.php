<?php
$dbserver ="localhost";
$dbuser ="root";
$dbpassword ="";
$dbname ="mydatabase";
$conn =new mysqli($dbserver,$dbuser,$dbpassword,$dbname);
if($conn){
    echo "connection sucessfull";
}
?>