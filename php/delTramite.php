<?php
    header('Content-Type: application/json');
    include_once("classTramite.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);   
    $tramite = new Tramite();
    $tramite->localizar($request->id);
    $tramite->deletar();          
?>