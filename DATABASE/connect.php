<?php

    $connection = mysqli_connect(
        "localhost",
        "root",
        "",
        /* NOMBRE DE LA BD */
        "restaurante"
    );

    if($connection){
        echo "Database is Connected :D ";
    }else{
        die("No hay conexión: ".mysqli_connect_error());
    }
?>