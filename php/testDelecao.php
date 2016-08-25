<?php
header("Content-type: text/html; charset=utf-8");
include_once("classDocumento.php");
include_once("classTramite.php");
$documento = new Documento();
$documento->titulo = "Teste de deleção de documentos";
$documento->tipoDocumento = 3;
$documento->dataCadastro = date("Y-m-d");
$documento->salvar();
echo "Objeto instanciado e salvo:</br>";
echo "<pre>";
print_r($documento);
echo "</pre>";
echo "Localizando objeto id {$objeto->id}";
$documento->localizar($documento->id);
echo "<pre>";
print_r($documento);
echo "</pre>";
echo "Alterando o título do objeto:</br>";
$documento->titulo = "Outro título de documento";
$documento->atualizar();
echo "<pre>";
print_r($documento);
echo "</pre>";
echo "Incluindo trâmites:</br>";
$tramite = new Tramite();
$tramite->origem = "CPC";
$tramite->destino = "SETI";
$tramite->documento = $documento->id;
$tramite->dataTramite = date("Y-m-d");
$tramite->salvar();
echo "Trâmite 1 salveo.</br>";
$tramite = new Tramite();
$tramite->origem = "SETI";
$tramite->destino = "CPC";
$tramite->documento = $documento->id;
$tramite->dataTramite = date("Y-m-d");
$tramite->salvar();
echo "Trâmite 2 salvo.</br>";
$tramite = new Tramite();
$tramite->origem = "CPC";
$tramite->destino = "GRE";
$tramite->documento = $documento->id;
$tramite->dataTramite = date("Y-m-d");
$tramite->salvar();
echo "Trâmite 3 salvo.</br>";
echo "Listando tramites:</br>";
echo "<pre>";
print_r($tramite->listarPor("documento", $documento->id));
echo "</pre>";
echo "Deletando documento.</br>";
$id = $documento->id;
$documento->deletar();
$documento->localizar($documento->id);
echo "<pre>";
print_r($documento);
echo "</pre>";
echo "Verificando tramites.</br>";
echo "<pre>";
print_r($tramite->listarPor("documento", $id));
echo "</pre>";
?>