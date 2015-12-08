/**
 * Created by anonymous on 06/12/15 5:02.
 */
(function() {
    'use strict';

    angular
        .module('components.config')
        .config(jwtAuth);

    jwtAuth.$inject = ['$authProvider'];

    /* @ngInject */
    function jwtAuth ($authProvider) {
        $authProvider.loginUrl = '/api/authenticate';
    }

})();

