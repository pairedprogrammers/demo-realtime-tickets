angular.module('realtimeData', ['ngRoute', 'realtimeData.data'])
    .controller('DashboardCtrl', ['$scope', 'Tickets', function ($scope, Tickets) {
        "use strict";

        $scope.tickets = Tickets.query();

        var ticketHub = $.connection.ticketHub;
        // Create a function that the hub can call back to display messages.
        ticketHub.client.addNewTicket = function (ticket) {
            $scope.tickets.push(ticket);
            $scope.$apply();
        };

        // Start the connection.
        $.connection.hub.start().done(function () {
        });

    }])
    .controller('CreateCtrl', ['$scope', '$location', 'Tickets', function ($scope, $location, Tickets) {
        "use strict";

        $scope.save = function (newTicket) {
            Tickets.save(newTicket, function(){
                $location.path('/');
            });            
        };

        $scope.cancel = function () {
            $location.path('/');
        }

    }])
    .config(['$routeProvider', function ($routeProvider) {
        "use strict";
        $routeProvider
            .when('/', {
                controller: 'DashboardCtrl',
                templateUrl: 'partials/dashboard.html'
            })
            .when('/new', {
                controller: 'CreateCtrl',
                templateUrl: 'partials/ticket.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .filter('reverse', function () {
        return function (items) {
            return items.slice().reverse();
        };
    });
