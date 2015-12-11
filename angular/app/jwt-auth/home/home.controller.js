/**
 * Created by anonymous on 10/12/15 10:06.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthHomeController', JwtAuthHomeController);

    JwtAuthHomeController.$inject = ['$http'];

    /* @ngInject */
    function JwtAuthHomeController($http) {
        var vm   = this;
        vm.title = 'JwtAuthHomeController';

        activate();

        ////////////////

        function activate() {
            $http.jsonp('https://api.github.com/repos/sahat/satellizer?callback=JSON_CALLBACK')
                .success(function(data) {
                    if (data) {
                        if (data.data.stargazers_count) {
                            vm.stars = data.data.stargazers_count;
                        }
                        if (data.data.forks) {
                            vm.forks = data.data.forks;
                        }
                        if (data.data.open_issues) {
                            vm.issues = data.data.open_issues;
                        }
                    }
                });
        }
    }

})();

