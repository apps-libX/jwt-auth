/**
 * Created by anonymous on 10/12/15 10:06.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthHomeController', JwtAuthHomeController);

    JwtAuthHomeController.$inject = [];

    /* @ngInject */
    function JwtAuthHomeController() {
        var vm   = this;
        vm.title = 'JwtAuthHomeController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

