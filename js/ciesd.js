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