<?php
include_once("classBanco.php");
class TipoDocumento extends Banco {
    public $id;
    public $nome;
  
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
    }

    public function atualizar(){
        parent::atualizar();
    }    
    
    public function getId(){
        return $this->id;
    }      
}
?>