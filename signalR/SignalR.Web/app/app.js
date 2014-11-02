angular.module('realtimeData', ['ngRoute', 'realtimeData.data'])
    .controller('DashboardCtrl', ['$scope', 'Tickets', 'TicketStream', function ($scope, Tickets, TicketStream) {
        "use strict";

        $scope.tickets = Tickets.query();

        TicketStream.on('addNewTicket', function (newTicket) {
            $scope.tickets.push(newTicket);
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
