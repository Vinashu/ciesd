<?php
header("Content-type: text/html; charset=utf-8");
include_once("classTipoDocumento.php");
$tipoDocumento = new TipoDocumento();
$tipoDocumento->nome = "Outro Tipo";
$tipoDocumento->salvar();
echo "<pre>";
print_r($tipoDocumento);
echo "</pre>";
$tipoDocumento->localizar($tipoDocumento->id);
echo "<pre>";
print_r($tipoDocumento);
echo "</pre>";
$tipoDocumento->nome = "Alterado Tipo";
$tipoDocumento->atualizar();
echo "<pre>";
print_r($tipoDocumento);
echo "</pre>";
$tipoDocumento->deletar();
$tipoDocumento->localizar($tipoDocumento->id);
echo "<pre>";
print_r($tipoDocumento);
echo "</pre>";
?>