<?php
include_once("classBanco.php");
include_once("classTipoDocumento.php");
include_once("classTramite.php");
class Documento extends Banco {
    public $id;
    public $titulo;
    public $tipoDocumento;
    public $dataCadastro;

    public function __construct(){
        if($this->tipoDocumento !=0){
            $this->setTipoDocumento();            
        }
    }

    public function localizar($id){
        $data = parent::localizar($id);              
        if(!is_null($data)){
            $campos = get_object_vars($data);                        
            foreach($campos as $key => $value){
                $this->$key = $data->$key;
            }           
            if($this->tipoDocumento !=0){
                $this->setTipoDocumento();            
            }        
        } else {
            $campos = get_object_vars($this);                        
            foreach($campos as $key => $value){
                $this->$key = $data->$key;
            }            
        }   
    }
    
    public function salvar(){
        $this->id = parent::salvar();
        if($this->tipoDocumento !=0){
            $this->setTipoDocumento();            
        }           
    }

    public function atualizar(){
        parent::atualizar();
    }    

    public function deletar(){
        parent::deletar();
        $tramite = new Tramite();
        $tramite->deletarPor("documento", $this->id);
    }        
    
    public function getId(){
        return $this->id;
    } 
    
    public function setTipoDocumento(){
        if (!is_object($this->tipoDocumento)){
            $tipoDocumento = new TipoDocumento();
            $tipoDocumento->localizar($this->tipoDocumento);     
            $this->tipoDocumento = $tipoDocumento;            
        }
    }      
}
?>