<?php
include 'config.php';
if($_FILES['image']['name']!=''){
    $filename =$_FILES['image']['name'];
    echo $filename;
}


?>