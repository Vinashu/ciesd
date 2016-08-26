<?php
    header('Content-Type: application/json');
    include_once("classDocumento.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);   
    $documento = new Documento();
    $documento->titulo = $request->titulo;
    $documento->tipoDocumento = $request->tipoDocumento->id;
    $documento->dataCadastro = $request->dataCadastro;
    $documento->formartarDataPara();
    $documento->setTipoDocumento();
    $documento->alterar();          
?>