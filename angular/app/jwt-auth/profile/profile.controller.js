/**
 * Created by anonymous on 11/12/15 9:25.
 */

(function() {
    'use strict';

    angular
        .module('jwtAuth')
        .controller('JwtAuthProfileController', JwtAuthProfileController);

    JwtAuthProfileController.$inject = ['$auth', 'toastr', 'Account'];

    /* @ngInject */
    function JwtAuthProfileController($auth, toastr, Account) {
        var vm           = this;
        vm.title         = 'JwtAuthProfileController';
        vm.getProfile    = getProfile;
        vm.updateProfile = updateProfile;
        vm.link          = link;
        vm.unlink        = unlink;

        activate();

        ////////////////

        function activate() {
            vm.getProfile();
        }

        function getProfile() {
            Account.getProfile()
                .then(function(response) {
                    vm.user = response.data;
                })
                .catch(function(response) {
                    toastr.error(response.data.message, response.status);
                });

        }

        function updateProfile() {
            Account.updateProfile(vm.user)
                .then(function() {
                    toastr.success('Profile has been updated');
                })
                .catch(function(response) {
                    toastr.error(response.data.message, response.status);
                });

        }

        function link(provider) {
            $auth.link(provider)
                .then(function() {
                    toastr.success('You have successfully linked a ' + provider + ' account');
                    vm.getProfile();
                })
                .catch(function(response) {
                    toastr.error(response.data.message, response.status);
                });

        }

        function unlink(provider) {
            $auth.unlink(provider)
                .then(function() {
                    toastr.info('You have unlinked a ' + provider + ' account');
                    vm.getProfile();
                })
                .catch(function(response) {
                    toastr.error(response.data ? response.data.message : 'Could not unlink ' + provider + ' account', response.status);
                });

        }
    }

})();

