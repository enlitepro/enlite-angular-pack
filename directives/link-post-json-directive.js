angular.module('enlitePack').directive('linkPostJson', ['$http', function ($http) {
    return {
        restrict: "A",
        scope: {
            linkPostJson: '@',
            confirm: '@',
            href: "@",
            reload: "@",
            redirect: "@"

        },
        link: function (scope, el, attrs) {
            el.bind('click', function (event) {
                event.preventDefault();
                var run = function() {
                    var data = JSON.parse(scope.linkPostJson);
                    $http.post(scope.href, data).success(function(){
                        if (scope.reload) {
                            location.reload();
                        } else if (scope.redirect) {
                            location.href = scope.redirect;
                        }
                    });
                };
                if (scope.confirm) {
                    if (confirm(scope.confirm)) {
                        run();
                    }
                } else {
                    run();
                }
            });
        }
    };
}]);