angular.module("enlitePack").directive('eatClick', function() {
    return function(scope, element, attrs) {
        element.bind("click", function(event) {
            event.preventDefault();
        });
    }
});