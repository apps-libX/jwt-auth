/**
 * Created by anonymous on 10/12/15 21:24.
 */

angular.module('jwtAuth')
    .controller('SignupCtrl', function($scope, $location, $auth, toastr) {
        $scope.signup = function() {
            $auth.signup($scope.user)
                .then(function(response) {
                    $auth.setToken(response);
                    $location.path('/');
                    toastr.info('You have successfully created a new account and have been signed-in');
                })
                .catch(function(response) {
                    toastr.error(response.data.message);
                });
        };
    });