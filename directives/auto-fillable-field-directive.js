/**
 * The directive set to scope value from a form element
 *
 * @category   Directive
 * @package    EnliteAngularPack
 * @author     Vladimir Struc <Sysaninster@gmail.com>
 * @license    LICENSE.txt
 * @date       23.07.13
 */

angular.module('enlitePack').directive('autoFillableField', ['$timeout', function($timeout) {
    return {
        priority: 10,
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel) {
            if (elem[0].tagName.toUpperCase() === 'SELECT') {
                elem.find('option').each(function(key, option){
                    option = $(option);
                    if (option.attr('selected')) {
                        ngModel.$setViewValue(option.val());
                        elem.val(option.val());
                    }
                });
            } else {
                ngModel.$setViewValue(elem.val());
            }
//            var origVal = elem.val();
//            var isSelect = elem[0].tagName.toUpperCase() === 'SELECT';
//
//            if (isSelect) {
//                var count = elem.find('option').length;
//            }
//
//            $timeout(function () {
//                var newVal = elem.val();
//                if(ngModel.$pristine && origVal !== newVal) {
//                    if (isSelect && elem.find('option').length != count) {
//                        // remove empty option
//                        elem.find('option:first').remove();
//                    }
//
//                    ngModel.$setViewValue(origVal);
//                    elem.val(origVal);
//                }
//            }, 1);
        }
    }
}]);