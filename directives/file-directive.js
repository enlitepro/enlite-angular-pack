angular.module('enlitePack').directive('file', [function () {
    return {
        scope: false,
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                if (el.val()) {
                    scope[attrs.file] = event.target.files;
                    scope.$apply(attrs.file + 'Upload')(event.target.files);

                    if (!attrs.noClean) {
                        el.val('');
                    }
                    scope.$apply();
                }
            });

            // drag&drop
            if (window.File && window.FileList && window.FileReader) {

                var preventDefault = function FileDragHover(e) {
                    e.stopPropagation();
                    e.preventDefault();
                };

                el.bind("dragover", preventDefault);
                el.bind("dragleave", preventDefault);
                el.bind("drop", function(e){
                    preventDefault(e);

                    var event = e.originalEvent;

                    scope[attrs.file] = event.target.files || event.dataTransfer.files;
                    scope.$apply(attrs.file + 'Upload')(event.target.files || event.dataTransfer.files);

                    if (!attrs.noClean) {
                        el.val('');
                    }
                    scope.$apply();
                });
            }
        }
    };
}]);