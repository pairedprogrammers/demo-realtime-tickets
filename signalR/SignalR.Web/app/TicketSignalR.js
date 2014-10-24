'use strict';

angular.module('realtimeData.data', ['ngResource'])
    .factory('Tickets', ['$resource', function ($resource) {
        return $resource('/api/tickets');
}]);