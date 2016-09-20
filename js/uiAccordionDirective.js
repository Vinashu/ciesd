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
                    ctrl.closeAll();                    
                    scope.isOpened = true;
                }
            };
        }
    };
});