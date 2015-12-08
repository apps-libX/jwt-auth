/**
 * Created by anonymous on 08/12/15 10:48.
 */

(function() {
    'use strict';

    angular
        .module('components.services')
        .factory('accountService', accountService);

    accountService.$inject = ['$http'];

    /* @ngInject */
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

})();

