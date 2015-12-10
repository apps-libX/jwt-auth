/**
 * Created by anonymous on 10/12/15 10:08.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthLeftController', JwtAuthLeftController);

    JwtAuthLeftController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function JwtAuthLeftController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'JwtAuthLeftController';
        vm.close = function() {
            $mdSidenav('left').close().then(function() {
                // $log.debug("close LEFT is done");
            });
        };

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

