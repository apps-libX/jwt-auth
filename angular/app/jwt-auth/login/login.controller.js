/**
 * Created by anonymous on 08/12/15 16:23.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthLoginController', JwtAuthLoginController);

    JwtAuthLoginController.$inject = ['$location', '$auth', 'toastr'];

    /* @ngInject */
    function JwtAuthLoginController($location, $auth, toastr) {
        var vm          = this;
        vm.title        = 'LoginController';
        vm.login        = login;
        vm.authenticate = authenticate;

        ////////////////

        function login() {
            $auth.login(vm.user)
                .then(function() {
                    toastr.success('You have successfully signed in!');
                    $location.path('/');
                })
                .catch(function(error) {
                    toastr.error(error.data.message, error.status);
                });

        }

        function authenticate(provider) {
            $auth.authenticate(provider)
                .then(function() {
                    toastr.success('You have successfully signed in with ' + provider + '!');
                    $location.path('/');
                })
                .catch(function(error) {
                    if (error.error) {
                        // Popup error - invalid redirect_uri, pressed cancel button, etc.
                        toastr.error(error.error);
                    } else if (error.data) {
                        // HTTP response error from server
                        toastr.error(error.data.message, error.status);
                    } else {
                        toastr.error(error);
                    }
                });
        }
    }

})();

