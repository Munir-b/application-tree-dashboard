'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
      $scope.filters = {
          'name': null,
          'Features name': null, //do not parse
          'integrations': null,  //do not parse
          'refactoring est.': null, //number
          'priority': 'All', // low medum high
          'component coverage': null, //percent
          'dev remaining efforts': null, //number
          'E2E coverage': null, //percent
          'E2E remaining efforts': null, //number
          'remaining efforts': null, //number
          'is product line E2E ready': 'All', //yes no
          'IsCd': 'All' // yes no
      };
      $scope.filteredData = [];
      $scope.category = 'All';
      $scope.data = {'data': {
          'BO':[
              {'name':'Gtforge', 'Features name':'featureName', 'integrations': 'gtforge', 'refactoring est.': '5','priority': 'Low', 'component coverage': '50%', 'dev remaining efforts':'3','integration coverage': '15%','integration remaining efforts': '130', 'E2E coverage': '36%','E2E remaining efforts':'7','remaining efforts': '10', 'is product line E2E ready': 'no', 'IsCd':'yes'},
              {'name':'Coupon', 'Features name':'featureName', 'integrations': 'charging', 'refactoring est.': '14','priority': 'Medium', 'component coverage':'13%', 'dev remaining efforts':'2','integration coverage': '32%','integration remaining efforts': '99', 'E2E coverage': '13%','E2E remaining efforts':'7','remaining efforts': '15', 'is product line E2E ready': 'no', 'IsCd':'no'},
              {'name':'Routing', 'Features name':'featureName', 'integrations': 'location', 'refactoring est.': '31','priority': 'High', 'component coverage':'45%', 'dev remaining efforts':'5','integration coverage': '66%','integration remaining efforts': '250', 'E2E coverage': '21%','E2E remaining efforts':'10','remaining efforts': '30', 'is product line E2E ready': 'yes', 'IsCd':'yes'},
              {'name':'Orders', 'Features name':'featureName', 'integrations': 'availability', 'refactoring est.': '49','priority': 'Low', 'component coverage':'66%', 'dev remaining efforts':'17','integration coverage': '100%','integration remaining efforts': '0', 'E2E coverage': '5%','E2E remaining efforts':'13','remaining efforts': '18', 'is product line E2E ready': 'yes', 'IsCd':'no'},
              {'name':'Reports', 'Features name':'featureName', 'integrations': 'fraud', 'refactoring est.': '67','priority': 'Medium', 'component coverage':'22%', 'dev remaining efforts':'78','integration coverage': '32%','integration remaining efforts': '18', 'E2E coverage': '77%','E2E remaining efforts':'16','remaining efforts': '45', 'is product line E2E ready': 'no', 'IsCd':'yes'}],
          'Demand':[
              {'name':'Users', 'Features name':'featureName', 'integrations': 'gtforge', 'refactoring est.': '5','priority': 'Low', 'component coverage': '50%', 'dev remaining efforts':'3','integration coverage': '15%','integration remaining efforts': '130', 'E2E coverage': '36%','E2E remaining efforts':'7','remaining efforts': '10', 'is product line E2E ready': 'no', 'IsCd':'yes'},
              {'name':'Companies', 'Features name':'featureName', 'integrations': 'charging', 'refactoring est.': '14','priority': 'Medium', 'component coverage':'13%', 'dev remaining efforts':'2','integration coverage': '32%','integration remaining efforts': '99', 'E2E coverage': '13%','E2E remaining efforts':'7','remaining efforts': '15', 'is product line E2E ready': 'no', 'IsCd':'no'},
              {'name':'Bookkeeping', 'Features name':'featureName', 'integrations': 'location', 'refactoring est.': '31','priority': 'High', 'component coverage':'45%', 'dev remaining efforts':'5','integration coverage': '66%','integration remaining efforts': '250', 'E2E coverage': '21%','E2E remaining efforts':'10','remaining efforts': '30', 'is product line E2E ready': 'yes', 'IsCd':'yes'},
              {'name':'Commission', 'Features name':'featureName', 'integrations': 'availability', 'refactoring est.': '49','priority': 'Low', 'component coverage':'66%', 'dev remaining efforts':'17','integration coverage': '100%','integration remaining efforts': '0', 'E2E coverage': '5%','E2E remaining efforts':'13','remaining efforts': '18', 'is product line E2E ready': 'yes', 'IsCd':'no'},
              {'name':'Trip', 'Features name':'featureName', 'integrations': 'fraud', 'refactoring est.': '67','priority': 'Medium', 'component coverage':'22%', 'dev remaining efforts':'78','integration coverage': '32%','integration remaining efforts': '18', 'E2E coverage': '77%','E2E remaining efforts':'16','remaining efforts': '45', 'is product line E2E ready': 'no', 'IsCd':'yes'}],
          'Supply':[
          {'name':'Settings', 'Features name':'featureName', 'integrations': 'gtforge', 'refactoring est.': '5','priority': 'Low', 'component coverage': '50%', 'dev remaining efforts':'3','integration coverage': '15%','integration remaining efforts': '130', 'E2E coverage': '36%','E2E remaining efforts':'7','remaining efforts': '10', 'is product line E2E ready': 'no', 'IsCd':'yes'},
          {'name':'Drivers', 'Features name':'featureName', 'integrations': 'charging', 'refactoring est.': '14','priority': 'Medium', 'component coverage':'13%', 'dev remaining efforts':'2','integration coverage': '32%','integration remaining efforts': '99', 'E2E coverage': '13%','E2E remaining efforts':'7','remaining efforts': '15', 'is product line E2E ready': 'no', 'IsCd':'no'},
          {'name':'Orders', 'Features name':'featureName', 'integrations': 'location', 'refactoring est.': '31','priority': 'High', 'component coverage':'45%', 'dev remaining efforts':'5','integration coverage': '66%','integration remaining efforts': '250', 'E2E coverage': '21%','E2E remaining efforts':'10','remaining efforts': '30', 'is product line E2E ready': 'yes', 'IsCd':'yes'},
          {'name':'Reports', 'Features name':'featureName', 'integrations': 'availability', 'refactoring est.': '49','priority': 'Low', 'component coverage':'66%', 'dev remaining efforts':'17','integration coverage': '100%','integration remaining efforts': '0', 'E2E coverage': '5%','E2E remaining efforts':'13','remaining efforts': '18', 'is product line E2E ready': 'yes', 'IsCd':'no'},
          {'name':'Routing', 'Features name':'featureName', 'integrations': 'fraud', 'refactoring est.': '67','priority': 'Medium', 'component coverage':'22%', 'dev remaining efforts':'78','integration coverage': '32%','integration remaining efforts': '18', 'E2E coverage': '77%','E2E remaining efforts':'16','remaining efforts': '45', 'is product line E2E ready': 'no', 'IsCd':'yes'}],
              }};
      $scope.filteredData=$scope.filteredData.concat($scope.data.data.BO);
      $scope.filteredData=$scope.filteredData.concat($scope.data.data.Demand);
      $scope.filteredData=$scope.filteredData.concat($scope.data.data.Supply);

      $scope.nameFilter = function(service) {
          return $scope.filters.name ? service.name === $scope.filters.name : true;
      };

      $scope.featuresFilter = function(service) {
          return $scope.filters['Features name'] ? service['Features name'] === $scope.filters['Features name'] : true;
      };

      $scope.integrationsFilter = function(service) {
          return $scope.filters.integrations ? service.integrations === $scope.filters.integrations : true;
      };

      $scope.refactoringEstFilter = function(service) {
          if(!$scope.filters['refactoring est.']) return true;
          var operator = service['refactoring est.'][0];
          var estFilter = parseInt($scope.filters['refactoring est.'].substr(1));
          var est = parseInt(service['refactoring est.'])
          switch(operator) {
              case '>':
                  return est > estFilter;
              case '=':
                  return est === estFilter;
              case '<':
                  return est < estFilter;
              default:
                  return false;
          }
      };

      $scope.priorityFilter = function(service) {
          return $scope.filters.priority !== 'All' ? service.priority === $scope.filters.priority : true;
      };

      $scope.componentCoverageFilter = function(service) {
          return $scope.filters['component coverage'] ? service['component coverage'] === $scope.filters['component coverage'] : true;
      };

      $scope.devRemainingEffortsFilter = function(service) {
          return $scope.filters['dev remaining efforts'] ? service['dev remaining efforts'] === $scope.filters['dev remaining efforts'] : true;
      };

      $scope.e2eCoverageFilter = function(service) {
          return $scope.filters['E2E coverage'] ? service['E2E coverage'] === $scope.filters['E2E coverage'] : true;
      };

      $scope.e2eRemainingEffortsFilter = function(service) {
          return $scope.filters['E2E remaining efforts'] ? service['E2E remaining efforts'] === $scope.filters['E2E remaining efforts'] : true;
      };

      $scope.remainingEffortsFilter = function(service) {
          return $scope.filters['remaining efforts'] ? service['remaining efforts'] === $scope.filters['remaining efforts'] : true;
      };

      $scope.isProductLineE2eReadyFilter = function(service) {
          return $scope.filters['is product line E2E ready'] !== 'All' ? service['is product line E2E ready'] === $scope.filters['is product line E2E ready'] : true;
      };

      $scope.IsCdFilter = function(service) {
          return $scope.filters.IsCd !== 'All' ? service.IsCd === $scope.filters.IsCd : true;
      };

      $scope.updateCategory = function() {
        $scope.filteredData = [];
        if($scope.category !== 'All') {
            $scope.filteredData=$scope.filteredData.concat($scope.data.data[$scope.category]);
        } else {
            $scope.filteredData=$scope.filteredData.concat($scope.data.data.BO);
            $scope.filteredData=$scope.filteredData.concat($scope.data.data.Demand);
            $scope.filteredData=$scope.filteredData.concat($scope.data.data.Supply);
        }
    };
  });
