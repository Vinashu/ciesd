var ciesd = angular.module("ciesd", ["ngAnimate"]);
ciesd.controller("ciesdCtrl", function ($scope, $http) {
    $scope.procurador = {
        status:  false,
        inativo: "Ativar procura...",
        ativo:   "Desativar procura..."
    };
    $scope.cadastrador = {
        status:  false,
        inativo: "Ativar cadastro...",
        ativo:   "Desativar cadastro..."
    };    
    $scope.ativarProcura = function () {
        $scope.procurador.status = !$scope.procurador.status;    
        delete $scope.searchText;          
    };     
    $scope.ativarCadastro = function () {
        $scope.cadastrador.status = !$scope.cadastrador.status;    
    };   
    $scope.criterioDeOrdenacao = "id";
    $scope.direcaoDaOrdenacao = true;
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;              
    };      
    /*  
    $scope.localHouses = false;
    $scope.localArmy = false;       
    $scope.army = [];
    $scope.houses = [];
    */
    $scope.documentos = [];
    $scope.tiposDocumento = [];           
    var getDocumentos = function () {
        $http.get("php/getDocumentos.php")
            .success(function(data, status, headers, config) {
                $scope.documentos = data;
                console.log(data, status);                        
            })
            .error(function(data, status, headers, config) {
                switch(status) {
                    case 401: {
                        $scope.message = "You must be authenticated!"
                    break;
                    }
                    case 500: {
                        $scope.message = "Something went wrong!";
                    break;
                    }
                }
            console.log(data, status);
            });
        };     
    getDocumentos();
    var getTiposDocumento = function () {
        $http.get("php/getTiposDocumento.php")
            .success(function(data, status, headers, config) {
                $scope.tiposDocumento = data;
                console.log(data, status);                        
            })
            .error(function(data, status, headers, config) {
                switch(status) {
                    case 401: {
                        $scope.message = "You must be authenticated!"
                    break;
                    }
                    case 500: {
                        $scope.message = "Something went wrong!";
                    break;
                    }
                }
            console.log(data, status);
            });
        };     
    getTiposDocumento();   
    $scope.cadastrar = function (documento) {
        console.log(documento);
        $scope.documentos.push(angular.copy(documento));                    
        addDocumento(documento);                    
        delete $scope.documento;
        $scope.documentoForm.$setPristine();       
    };     
    var addDocumento = function (data) {
        $http.post("php/postDocumento.php", data)
            .success(function(data, status, headers, config) {
                console.log("Post success");
                getDocumentos();                                                            
            })
            .error(function(data, status, headers, config) {
                switch(status) {
                    case 401: {
                        $scope.message = "You must be authenticated!"
                    break;
                    }
                    case 500: {
                        $scope.message = "Something went wrong!";
                    break;
                    }
                }
            });
        };    
    /*    
    var retrieveHouses = function () {
        $http.get("php/getHouses.php")
            .success(function(data, status, headers, config) {
                $scope.houses = data;
                console.log(data, status);                        
            })
            .error(function(data, status, headers, config) {
                switch(status) {
                    case 401: {
                        $scope.message = "You must be authenticated!"
                    break;
                    }
                    case 500: {
                        $scope.message = "Something went wrong!";
                    break;
                    }
                }
            console.log(data, status);
            });
        };
    var retrieveArmy = function () {
        $http.get("php/getArmy.php")
            .success(function(data, status, headers, config) {
                $scope.army = data;
                console.log(data, status);                        
            })
            .error(function(data, status, headers, config) {
                switch(status) {
                    case 401: {
                        $scope.message = "You must be authenticated!"
                    break;
                    }
                    case 500: {
                        $scope.message = "Something went wrong!";
                    break;
                    }
                }
            console.log(data, status);
            });
        };                
    if($scope.localHouses){
        $scope.houses = [
            {id: '1', name: 'Arryn', icon: 'imagens/icon07.png', banner:'imagens/house07.jpg'},
            {id: '2', name: 'Baratheon', icon: 'imagens/icon01.png', banner:'imagens/house01.jpg'},
            {id: '3', name: 'Frey', icon: 'imagens/icon11.png', banner:'imagens/house08.jpg'},
            {id: '4', name: 'Greyjoy', icon: 'imagens/icon05.png', banner:'imagens/house05.jpg'},
            {id: '5', name: 'Lannister', icon: 'imagens/icon03.png', banner:'imagens/house03.jpg'},
            {id: '6', name: 'Martell', icon: 'imagens/icon06.png', banner:'imagens/house06.jpg'},
            {id: '7', name: 'Tyrell', icon: 'imagens/icon04.png', banner:'imagens/house04.jpg'},
            {id: '8', name: 'Stark', icon: 'imagens/icon10.png', banner:'imagens/house10.jpg'},
            {id: '9', name: 'Tully', icon: 'imagens/icon08.png', banner:'imagens/house08.jpg'}                                                                                                                                
        ];                
    } else {
        retrieveHouses();                
    }  
    if($scope.localArmy){
        $scope.army = [
            {id: '1', name: 'McBotton', house:{id: '1', name:'Arryn' , icon: 'imagens/icon07.png', banner:'imagens/house07.jpg'}},
            {id: '2', name: 'John', house:{id: '2', name: 'Baratheon', icon: 'imagens/icon01.png', banner:'imagens/house01.jpg'}},
            {id: '3', name: 'Monster', house:{id: '3', name: 'Frey', icon: 'imagens/icon11.png', banner:'imagens/house08.jpg'}},
            {id: '4', name: 'Bob', house:{id: '4', name: 'Greyjoy', icon: 'imagens/icon05.png', banner:'imagens/house05.jpg'}},
            {id: '5', name: 'Tyrion', house:{id: '5', name: 'Lannister', icon: 'imagens/icon03.png', banner:'imagens/house03.jpg'}},
            {id: '6', name: 'Oberyn', house:{id: '6', name: 'Martell', icon: 'imagens/icon06.png', banner:'imagens/house06.jpg'}},
            {id: '7', name: 'Den', house:{id: '7', name: 'Tyrell', icon: 'imagens/icon04.png', banner:'imagens/house04.jpg'}},
            {id: '8', name: 'Eddar', house:{id: '8', name: 'Stark', icon: 'imagens/icon10.png', banner:'imagens/house10.jpg'}},
            {id: '9', name: 'Catelyn', house:{id: '9', name: 'Tully', icon: 'imagens/icon08.png', banner:'imagens/house08.jpg'}}                                                                                                                                                
        ];                
    } else {
        retrieveArmy();                     
    }
    var addSoldier = function (data) {
        $http.post("php/postSoldier.php", data)
            .success(function(data, status, headers, config) {
                console.log("Post success");
                retrieveArmy();                                                            
            })
            .error(function(data, status, headers, config) {
                switch(status) {
                    case 401: {
                        $scope.message = "You must be authenticated!"
                    break;
                    }
                    case 500: {
                        $scope.message = "Something went wrong!";
                    break;
                    }
                }
            });
        };    
    var delSoldier = function (data) {
        $http.post("php/delSoldier.php", data)
            .success(function(data, status, headers, config) {
                console.log("Del success");   
                retrieveArmy();                                                       
            })
            .error(function(data, status, headers, config) {
                switch(status) {
                    case 401: {
                        $scope.message = "You must be authenticated!"
                    break;
                    }
                    case 500: {
                        $scope.message = "Something went wrong!";
                    break;
                    }
                }
            });
        };                    
    $scope.alistar = function (man) {
        if($scope.localArmy){
            $scope.army.push(angular.copy(man));                    
        } else if(!$scope.localArmy){
            addSoldier(man);                    
        }
        delete $scope.man;
        $scope.soldierForm.$setPristine();        
    };
	$scope.liberarSoldados = function (soldados) {
        if($scope.localArmy){
            $scope.army = soldados.filter(function (soldado) {
                if (!soldado.selecionado) {               
                    return soldado;
                }                
            });
        } else {
            soldados.filter(function (soldado) {
                if (soldado.selecionado) {
                    delSoldier(soldado);                               
                }
            });                         
        }
	};
	$scope.isSoldadoSelecionado = function (soldados) {
		return soldados.some(function (soldado) {
			return soldado.selecionado;
		});
	};		
    */               
});