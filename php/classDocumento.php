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
        if($this->id != 0){
            $this->formatarId();       
        }              
        if($this->tipoDocumento != 0){
            $this->setTipoDocumento();            
        }
        if($this->dataCadastro != 0){
            $this->formatarDataDe();                        
        }          
    }

    public function localizar($id){
        $data = parent::localizar($id);              
        if(!is_null($data)){
            $campos = get_object_vars($data);                        
            foreach($campos as $key => $value){
                $this->$key = $data->$key;
            }
            if($this->id != 0){
                $this->formatarId();
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
        $this->formatarDataPara();
        if($this->tipoDocumento !=0){
            $this->setTipoDocumento();            
        }     
        $this->id = parent::salvar();      
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

    public function formatarDataPara(){
        $this->dataCadastro = date("Y-m-d", strtotime(str_replace('/','-', $this->dataCadastro))); 
    } 

    public function formatarDataDe(){
        $this->dataCadastro = date("d/m/Y", strtotime(str_replace('-','/', $this->dataCadastro))); 
    } 

    public function formatarId() {
        $this->id = str_pad($this->id, 5, '0', STR_PAD_LEFT);    
    }
    /*
    $date = date("Y-m-d H:i:s",strtotime(str_replace('/','-',$date)))
    strtotime interprets x/y/z as mm/dd/yy[yy], and x-y-z as dd-mm-yyyy or yy-mm-dd, depending on whether z is 4 digits or 2.
    */                                                    
}
?>