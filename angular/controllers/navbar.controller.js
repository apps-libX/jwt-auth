/**
 * Created by anonymous on 10/12/15 21:31.
 */

angular.module('jwtAuth')
    .controller('NavbarCtrl', function($scope, $auth) {
        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };
    });