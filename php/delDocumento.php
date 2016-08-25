<?php
    header('Content-Type: application/json');
    include_once("classDocumento.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);   
    $documento = new Documento();
    $documento->localizar($request->id);
    $documento->deletar();          
?>