'use strict';

angular.module('realtimeData.data', ['ngResource']).factory('Tickets', ['$resource', function ($resource) {  
    var server = $resource('/api/tickets');

    var tickets = [];

    return {
        save: function (newTicket) {
            server.save(newTicket);
        },

        query: function (callback) {
            return server.query();
        }
    };
}]);