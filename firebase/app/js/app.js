angular.module('realtimeData', ['ngRoute', 'realtimeData.data'])
    .controller('DashboardCtrl', ['$scope', 'Tickets', function ($scope, Tickets) {
        'use strict';
        
        $scope.tickets = Tickets;

        $scope.remove = function (ticket){
            Tickets.$remove(ticket);
        };
    }])
    .controller('CreateCtrl', ['$scope', '$location', 'Tickets', function ($scope, $location, Tickets) {
        'use strict';

        $scope.save = function (newTicket) {
            Tickets.$add(newTicket);
            $location.path('/');
        };


        $scope.cancel = function () {
            $location.path('/');
        };

    }])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        
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
        'use strict';
    
        return function (items) {
            return items.slice().reverse();
        };
    });
