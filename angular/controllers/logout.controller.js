/**
 * Created by anonymous on 10/12/15 21:31.
 */

angular.module('jwtAuth')
    .controller('LogoutCtrl', function($location, $auth, toastr) {
        if (!$auth.isAuthenticated()) { return; }
        $auth.logout()
            .then(function() {
                toastr.info('You have been logged out');
                $location.path('/');
            });
    });