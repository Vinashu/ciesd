angular.module("ciesd").directive("uiAccordions", function(){
    return {
        controller: function($scope, $element, $attrs){
            var accordions = [];
            this.registerAccordion = function(accordion){
                accordions.push(accordion);
            }
            this.closeAll = function(){
                accordions.forEach(function(accordion){
                    accordion.isOpened = false;
                });
            }
        }
    };
});
angular.module("ciesd").directive("uiAccordion", function(){
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            id: "@",
            titulo: "@",
            data: "@",
            tipo: "@",
            qtd:"@"
        },
        require: "^uiAccordions",
        link: function(scope, element, attrs, ctrl){
            ctrl.registerAccordion(scope);
            scope.open = function(){
                if (scope.isOpened == true){
                    scope.isOpened = false;
                } else {
                    scope.getTramites();                    
                    ctrl.closeAll();                    
                    scope.isOpened = true;
                }
            };
        },
        controller: ['$scope','$element', '$http', '$attrs', '$transclude', function($scope, $element, $http, $attrs, $transclude) {
            $scope.getTramites = function () {
                $scope.showBar = true;
                $scope.messageType = "alert-info";
                $scope.message = "Procurando tramitações...";
                $scope.tramites = null;
                $http.get("php/getTramites.php?id=" + $scope.id)
                    .success(function(data, status, headers, config) {
                        $scope.showBar = false;                        
                        if (data === null) {
                            $scope.messageType = "alert-warning";                        
                            $scope.message = "Nenhuma tramitação encontrada...";
                        } else {
                            $scope.tramites = data;
                            console.log(data, status);
                        }
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
            $scope.tramitador = {
                status:  false,
                inativo: "Ativar trâmite...",
                ativo:   "Desativar trâmite..."
            };        
            $scope.ativarTramites = function () {
                $scope.tramitador.status = !$scope.tramitador.status;    
            };      
            $scope.tramitar = function (tramite, id) {
                tramite.documento = {'id':id};
                console.log(tramite);
                $scope.qtd++;
                //$scope.tramites.push(angular.copy(tramite));                    
                addTramite(tramite);                    
                delete $scope.tramite;
                $scope.tramiteForm.$setPristine();   
                $scope.tramitador.status = false;    
            };     
            var addTramite = function (data) {
                $http.post("php/postTramite.php", data)
                    .success(function(data, status, headers, config) {
                        console.log("Post success");
                        $scope.getTramites();                                                            
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
            $scope.delDocumento = function (data) { 
                if(confirm("Deseja realmente remover esse Documento?")){
                    $http.post("php/delDocumento.php", data)
                        .success(function(data, status, headers, config) {
                            $element.remove();
                            $scope.$destroy();
                            console.log("Del success");                        
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
                    }
                };                   
        }]
    };
});