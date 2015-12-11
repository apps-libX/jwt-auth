/**
 * Created by anonymous on 10/12/15 21:31.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthLogoutController', JwtAuthLogoutController);

    JwtAuthLogoutController.$inject = ['$location', '$auth', 'toastr'];

    /* @ngInject */
    function JwtAuthLogoutController($location, $auth, toastr) {
        var vm   = this;
        vm.title = 'JwtAuthLogoutController';

        activate();

        ////////////////

        function activate() {
            if (!$auth.isAuthenticated()) {
                return;
            }
            $auth.logout()
                .then(function() {
                    toastr.info('You have been logged out');
                    $location.path('/');
                });
        }
    }

})();

