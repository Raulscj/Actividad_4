<?php
  include('connect.php');
  if(isset($_POST['name'])){
    echo $_POST['name'];
  }
?>