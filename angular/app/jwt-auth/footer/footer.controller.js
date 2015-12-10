/**
 * Created by anonymous on 10/12/15 9:55.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthFooterController', JwtAuthFooterController);

    JwtAuthFooterController.$inject = [];

    /* @ngInject */
    function JwtAuthFooterController() {
        var vm   = this;
        vm.title = 'JwtAuthFooterController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

