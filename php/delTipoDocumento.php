<?php
    header('Content-Type: application/json');
    include_once("classTipoDocumento.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);   
    $tipoDocumento = new TipoDocumento();
    $tipoDocumento->localizar($request->id);
    $tipoDocumento->deletar();          
?>