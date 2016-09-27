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
            tipo: "@"
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
        }]
    };
});