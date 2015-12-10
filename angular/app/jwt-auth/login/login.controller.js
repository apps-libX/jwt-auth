/**
 * Created by anonymous on 08/12/15 16:23.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('LoginController', LoginController);

    LoginController.$inject = [];

    /* @ngInject */
    function LoginController() {
        var vm   = this;
        vm.title = 'LoginController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

