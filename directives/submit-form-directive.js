/**
 * The directive for submit a form. It need jquery
 *
 * @category   Directive
 * @package    EnliteAngularPack
 * @author     Vladimir Struts <Sysaninster@gmail.com>
 * @license    LICENSE.txt
 * @date       04.02.14
 */
angular.module("enlitePack").directive('submitForm', function() {
    return function(scope, element, attrs) {
        element.bind(attrs.events ? attrs.events : "click", function(event) {
            $(attrs.submitForm).submit();
            event.preventDefault();
        });
    }
});
