/**
 * The model for hidden element
 *
 * @category   Directive
 * @package    EnliteAngularPack
 * @author     Vladimir Struc <Sysaninster@gmail.com>
 * @license    LICENSE.txt
 * @date       24.07.13
 */

angular.module('enlitePack').directive('modelHidden', [function() {
    return {
        scope: false,
        link: function(scope, elem, attrs) {
            scope.$eval(attrs.modelHidden + '="' + elem.val() + '"');
            scope.$watch(attrs.modelHidden, function(newValue) {
                elem.val(newValue);
            });
        }
    }
}]);
