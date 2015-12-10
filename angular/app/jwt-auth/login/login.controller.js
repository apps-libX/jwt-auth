/**
 * Created by anonymous on 08/12/15 16:23.
 */

/*(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('LoginController', LoginController);

    LoginController.$inject = [];

    /!* @ngInject *!/
    function LoginController() {
        var vm   = this;
        vm.title = 'LoginController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();*/

angular.module('jwtAuth')
    .controller('LoginCtrl', function($scope, $location, $auth, toastr) {
        $scope.login = function() {
            $auth.login($scope.user)
                .then(function() {
                    toastr.success('You have successfully signed in!');
                    $location.path('/');
                })
                .catch(function(error) {
                    toastr.error(error.data.message, error.status);
                });
        };
        $scope.authenticate = function(provider) {
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
        };
    });