angular.module('realtimeData.data', ['ngResource']).factory('Tickets', ['$resource', function($resource) {
    'use strict';
    
    var socket = io(),
        server = $resource('/tickets'),
        tickets = [];
    
    socket.on('ticket', function (msg) {
        tickets.push(msg);
    });
    
    return {
        save: function (newTicket) {
            //socket.emit('ticket', newTicket);
            server.save(newTicket);
        },
        
        query: function (callback) {
            return server.query();
        }
    };
}]);