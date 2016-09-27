<?php
include_once("classBanco.php");
include_once("classDocumento.php");
class Tramite extends Banco {
    public $id;
    public $origem;
    public $destino;
    public $documento;    
    public $dataTramite;    

    public function localizar($id){
        $data = parent::localizar($id); 
        if(!is_null($data)){
            $campos = get_object_vars($data);                        
            foreach($campos as $key => $value){
                $this->$key = $data->$key;
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
        $documento = new Documento();
        $documento->localizar($this->documento);
        $documento->qtdTramites++;
        $documento->atualizar();
    }

    public function deletar(){
        $documento = new Documento();
        $documento->localizar($this->documento);
        $documento->qtdTramites--;
        $documento->atualizar();        
        parent::deletar();
    }    

    public function atualizar(){
        parent::atualizar();
    }    
    
    public function getId(){
        return $this->id;
    }      

    public function formatarDataPara(){
        $this->dataTramite = date("Y-m-d", strtotime(str_replace('/','-', $this->dataTramite))); 
    } 

    public function formatarDataDe(){
        $this->dataTramite = date("d/m/Y", strtotime(str_replace('-','/', $this->dataTramite))); 
    }     
}
?>