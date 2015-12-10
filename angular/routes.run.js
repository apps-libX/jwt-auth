/**
 * Created by anonymous on 10/12/15 10:29.
 */

/*
(function() {
    'use strict';

    angular.module('jwtAuth').run(function($rootScope, $state) {
        $rootScope.$on("$stateChangeStart", function(event, toState) {
            var user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                $rootScope.authenticated = true;
                $rootScope.currentUser   = user;

                if ((toState.name === 'jwtauth.signin') || (toState.name === 'jwtauth.register')) {
                    event.preventDefault();
                    $state.go('dashboard.home');
                }
            }
        });
    });
})();
*/
