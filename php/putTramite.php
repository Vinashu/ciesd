<?php
    header('Content-Type: application/json');
    include_once("classTramite.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);   
    $tramite = new Tramite();
    $tramite->origem = $request->origem;
    $tramite->destino = $request->destino;
    $tramite->documento = $request->documento->id;
    $tramite->dataTramite = $request->dataTramite;     
    $tramite->formartarDataPara();
    $tramite->atualizar();              
?>
