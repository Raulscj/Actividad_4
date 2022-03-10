<?php
  include('connect.php');
  if(isset($_POST['name'])){
      $name=$_POST['name'];
      $apellido=$_POST['last_name'];
      $cantidad=$_POST['cantidad'];
      $fecha=$_POST['fecha'];
      $query = "INSERT into reservacion (name, lastname, cantidad, `datetime-locall`) VALUES ('$name', '$apellido', '$cantidad', '$fecha')";
      $ejecutar = mysqli_query($connection, $query);
      if($ejecutar){
        echo "Reservación almacenada exitosamente";
    }else {
        echo"Fallo al almacenar";
    }
  }
?>