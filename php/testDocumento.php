<?php
header("Content-type: text/html; charset=utf-8");
include_once("classDocumento.php");
$documento = new Documento();
$documento->titulo = "Ofício nº 035/2016 - ASP/CPC";
$documento->tipoDocumento = 1;
$documento->dataCadastro = date("Y-m-d");
$documento->salvar();
echo "<pre>";
print_r($documento);
echo "</pre>";
$documento->localizar($documento->id);
echo "<pre>";
print_r($documento);
echo "</pre>";
$documento->titulo = "Outro título de documento";
$documento->atualizar();
echo "<pre>";
print_r($documento);
echo "</pre>";
$documento->deletar();
$documento->localizar($documento->id);
echo "<pre>";
print_r($documento);
echo "</pre>";
?>