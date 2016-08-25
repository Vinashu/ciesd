<?php
    header('Content-Type: application/json');
    include_once("classDocumento.php"); 
    /*
    $documentos = array(
        array("id" => '1', "titulo" => 'Documento 01', "tipoDocumento" => '1', "dataCadastro" => '2016-08-24'),
        array("id" => '2', "titulo" => 'Documento 02', "tipoDocumento" => '2', "dataCadastro" => '2016-08-24'),
        array("id" => '3', "titulo" => 'Documento 03', "tipoDocumento" => '2', "dataCadastro" => '2016-08-24'),
        array("id" => '4', "titulo" => 'Documento 04', "tipoDocumento" => '1', "dataCadastro" => '2016-08-24'),
        array("id" => '5', "titulo" => 'Documento 05', "tipoDocumento" => '3', "dataCadastro" => '2016-08-24')
    );
    */
    $documentos = new Documento();
    $documentos = $documentos->listar();
    echo json_encode($documentos);        
?>