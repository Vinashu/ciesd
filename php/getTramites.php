<?php
    header('Content-Type: application/json');
    include_once("classTramite.php");
    $id = $_GET["id"]; 
    $tramites = new Tramite();
    $tramites = $tramites->listarPor("documento",$id);
    echo json_encode($tramites);        
?>