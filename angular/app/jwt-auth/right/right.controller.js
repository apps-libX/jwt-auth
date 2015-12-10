/**
 * Created by anonymous on 10/12/15 10:18.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthRightController', JwtAuthRightController);

    JwtAuthRightController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function JwtAuthRightController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'JwtAuthRightController';
        vm.close = function() {
            $mdSidenav('right').close().then(function() {
                // $log.debug("close RIGHT is done");
            });
        };

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

