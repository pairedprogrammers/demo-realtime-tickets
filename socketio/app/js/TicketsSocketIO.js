'use strict';

angular.module('realtimeData.data', ['ngResource']).factory('Tickets', ['$resource', function($resource) {
    var socket = io();
    var server = $resource('/tickets');
    
    var tickets = [];
    
    socket.on('ticket', function(msg) {
        tickets.push(msg);
    });
    
    return {
        save: function(newTicket) {
            socket.emit('ticket', newTicket);
        },
        
        query: function(callback) {
            return server.query();
        }
    };
}]);