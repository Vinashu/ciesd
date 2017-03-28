<?php
    header('Content-Type: application/json');
    include_once("classDocumento.php");
    $postdata = file_get_contents("php://input");
    //$postdata = '{"id":"00029","titulo":"Ble ble x","dataCadastro":"30/11/2017","tipoDocumento":{"id":"4","nome":"Outros"},"qtdTramites":"0"}';
    $request = json_decode($postdata);      
    $documento = new Documento();
    $documento->id =  $request->id;
    $documento->titulo = $request->titulo;
    $documento->tipoDocumento = $request->tipoDocumento->id;
    $documento->dataCadastro = $request->dataCadastro;
    $documento->qtdTramites =  $request->qtdTramites;
    $documento->atualizar();          
?>