/**
 * Created by anonymous on 08/12/15 10:48.
 */

/*(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .factory('accountService', accountService);

    accountService.$inject = ['$http'];

    /!* @ngInject *!/
    function accountService($http) {
        var service;

        service = {
            getProfile   : getProfile,
            updateProfile: updateProfile
        };

        return service;

        ////////////////

        function getProfile() {
            return $http.get('/api/me');
        }

        function updateProfile(profileData) {
            return $http.put('/api/me', profileData);
        }
    }

})();*/

angular.module('jwtAuth')
    .factory('Account', function($http) {
        return {
            getProfile: function() {
                return $http.get('/api/me');
            },
            updateProfile: function(profileData) {
                return $http.put('/api/me', profileData);
            }
        };
    });