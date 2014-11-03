angular.module('realtimeData.data', ['ngResource'])
    .factory('Tickets', ['$resource', function ($resource) {
        'use strict';

        return $resource('/api/tickets');
    }])   
    .factory('TicketStream', ['$rootScope', function ($rootScope) {
        'use strict';

       
        return {
            on: function (eventName, callback) {
                var connection = $.hubConnection();
                var ticketHubProxy = connection.createHubProxy('ticketHub');
              
                ticketHubProxy.on(eventName, function () {                  
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(ticketHubProxy, args);
                    });
                });

                connection.start().done(function () { });

            }
        };
    }]);