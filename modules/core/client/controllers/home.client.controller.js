'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
    function($scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.alerts = [{
                color: 'btn-success',
                total: '20,453'
            },
            {
                color: 'btn-success',
                total: '20,453'
            },
            {
                color: 'btn-success',
                total: '20,453'
            },
            {
                color: 'btn-success',
                total: '20,453'
            },
            {
                color: 'btn-success',
                total: '20,453'
            }

        ];



    }
]);