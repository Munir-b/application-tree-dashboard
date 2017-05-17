'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:DashboardDetailsCtrl
 * @description
 * # DashboardDetailsCtrl
 * Controller of the details view
 */
angular.module('sbAdminApp')
    .controller('DashboardDetailsCtrl', function($scope, $state, $stateParams) {
        $scope.service = $stateParams.service;
        $scope.state = $state.current;
        $scope.params = $stateParams;
    });
