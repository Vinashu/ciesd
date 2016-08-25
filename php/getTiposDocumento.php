<?php
    header('Content-Type: application/json');
    include_once("classTipoDocumento.php"); 
    $tiposDocumento = new TipoDocumento();
    $tiposDocumento = $tiposDocumento->listar();
    echo json_encode($tiposDocumento);        
?>