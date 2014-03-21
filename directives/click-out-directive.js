/**
 * @author  Evgeny Shpilevsky <evgeny@shpilevsky.com>
 * @date    9/27/13
 */
angular.module("enlitePack").directive("clickOut", function ($document) {

    return {
        restrict: 'A',
        scope: {
            visible: '=clickOut'
        },
        link: function (scope, element, attr) {

            var elementMatchesAnyInArray = function (element, elementArray) {
                return [].some.call(elementArray, function (e) {
                    return element === e;
                });
            };

            $document.bind("click", function (event) {
                if (!elementMatchesAnyInArray(event.target, element.find(event.target.tagName))) {
                    scope.visible = false;
                    scope.$apply();
                }
            });
        }
    };

});