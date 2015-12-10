/**
 * Created by anonymous on 10/12/15 10:06.
 */

/*(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthHomeController', JwtAuthHomeController);

    JwtAuthHomeController.$inject = [];

    /!* @ngInject *!/
    function JwtAuthHomeController() {
        var vm   = this;
        vm.title = 'JwtAuthHomeController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();*/

angular.module('jwtAuth')
    .controller('HomeCtrl', function($scope, $http) {
        $http.jsonp('https://api.github.com/repos/sahat/satellizer?callback=JSON_CALLBACK')
            .success(function(data) {
                if (data) {
                    if (data.data.stargazers_count) {
                        $scope.stars = data.data.stargazers_count;
                    }
                    if (data.data.forks) {
                        $scope.forks = data.data.forks;
                    }
                    if (data.data.open_issues) {
                        $scope.issues = data.data.open_issues;
                    }
                }
            });
    });