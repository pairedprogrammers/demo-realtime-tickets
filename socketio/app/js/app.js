angular.module('realtimeData', ['ngRoute', 'realtimeData.data'])
    .controller('DashboardCtrl', ['$scope', 'Tickets', function ($scope, Tickets) {
        "use strict";
        
        $scope.tickets = Tickets.query();

    }])
    .controller('CreateCtrl', ['$scope', '$location', 'Tickets' , function ($scope, $location, Tickets) {
        "use strict";

        $scope.save = function (newTicket) {
            Tickets.save(newTicket);
            $location.path('/');
        };


        $scope.cancel = function(){
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
    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    });
