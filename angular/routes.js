/**
 * Created by anonymous on 08/12/15 11:20.
 */

(function() {
    'use strict';

    angular.module('jwtAuth').config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide) {
        // $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);
        // $httpProvider.interceptors.push('redirectWhenLoggedOut');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('jwtauth', {
                abstract: true,
                url     : '/auth',
                views   : {
                    'layout@'       : {
                        templateUrl : layout('jwt-auth.simple'),
                        controller  : 'JwtAuthController',
                        controllerAs: 'jwtAuth'
                    },
                    'header@jwtauth': {
                        templateUrl : view('jwt-auth.header'),
                        controller  : 'JwtAuthHeaderController',
                        controllerAs: 'jwtAuthHeader'
                    },
                    'left@jwtauth'  : {
                        templateUrl : view('jwt-auth.left'),
                        controller  : 'JwtAuthLeftController',
                        controllerAs: 'jwtAuthLeft'
                    },
                    'right@jwtauth' : {
                        templateUrl : view('jwt-auth.right'),
                        controller  : 'JwtAuthRightController',
                        controllerAs: 'jwtAuthRight'
                    },
                    'footer@jwtauth': {
                        templateUrl : view('jwt-auth.footer'),
                        controller  : 'JwtAuthFooterController',
                        controllerAs: 'jwtAuthFooter'
                    },
                    'main@jwtauth'  : {}
                }
            })
            .state('jwtauth.signin', {
                url  : '/sign-in',
                data : { pageName: 'Sign-in' },
                views: {
                    'main@jwtauth': {
                        templateUrl : view('jwt-auth.signin'),
                        controller  : 'JwtAuthSigninController',
                        controllerAs: 'signin'
                    }
                }
            })
            .state('jwtauth.home', {
                url  : '/home',
                data : { pageName: 'Home' },
                views: {
                    'main@jwtauth': {
                        templateUrl : view('jwt-auth.home'),
                        controller  : 'JwtAuthHomeController',
                        controllerAs: 'jwtAuthHome'
                    }
                }
            });

        $authProvider.facebook({
            clientId: '657854390977827'
        });

        $authProvider.google({
            clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
        });

        $authProvider.github({
            clientId: '0ba2600b1dbdb756688b'
        });

        $authProvider.linkedin({
            clientId: '77cw786yignpzj'
        });

        $authProvider.instagram({
            clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1'
        });

        $authProvider.yahoo({
            clientId: 'dj0yJmk9SDVkM2RhNWJSc2ZBJmQ9WVdrOWIzVlFRMWxzTXpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0yYw--'
        });

        $authProvider.twitter({
            url: '/auth/twitter'
        });

        $authProvider.live({
            clientId: '000000004C12E68D'
        });

        $authProvider.twitch({
            clientId: 'qhc3lft06xipnmndydcr3wau939a20z'
        });

        $authProvider.bitbucket({
            clientId: '48UepjQDYaZFuMWaDj'
        });

        $authProvider.oauth2({
            name                 : 'foursquare',
            url                  : '/auth/foursquare',
            clientId             : 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
            redirectUri          : window.location.origin || window.location.protocol + '//' + window.location.host,
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
        });

        function skipIfLoggedIn($q, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }

        function loginRequired($q, $location, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $location.path('/login');
            }
            return deferred.promise;
        }

        function view(viewName) {
            if (viewName !== "") {
                return './views/applications/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/applications/app/home/home.html';
            }
        }

        function layout(viewName) {
            if (viewName !== "") {
                return './views/layouts/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/applications/app/home/home.html';
            }

        }

        function appName(v) {
            if (v.split(".")[0]) {
                return v.split(".")[0];
            } else {
                return 'app';
            }
        }

        function fileDir(v) {
            if (v.split(".")[1]) {
                return v.split(".")[1];
            } else if (!v.split(".")[0]) {
                return v;
            } else {
                return 'home';
            }
        }

        function fileName(v) {
            if (v.split(".")[2]) {
                return v.split(".")[2];
            } else if (!v.split(".")[2]) {
                if (v.split(".")[1]) {
                    return v.split(".")[1];
                }
            } else {
                return 'home';
            }
        }

        /*
         function redirectWhenLoggedOut($q, $injector) {

         return {

         responseError: function(rejection) {
         var
         $state           = $injector.get('$state'),
         rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];

         angular.forEach(rejectionReasons, function(value, key) {

         if (rejection.data.error === value) {
         localStorage.removeItem('user');
         $state.go('jwtauth.signin');
         }
         });

         return $q.reject(rejection);
         }
         };
         }
         */

    });
})();
