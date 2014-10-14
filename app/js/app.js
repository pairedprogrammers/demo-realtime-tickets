angular.module('realtimeData', ['ngRoute', 'realtimeData.data'])
    .controller('DashboardCtrl', ['$scope', 'Tickets', function ($scope, Tickets) {
        "use strict";

        $scope.tickets = Tickets.$get();
    }])
    .controller('EditCtrl', ['$scope', function ($scope) {
        "use strict";


    }])
    .controller('CreateCtrl', ['$scope', function ($scope) {
        "use strict";


    }])
    .config(['$routeProvider', function ($routeProvider) {
        "use strict";
        $routeProvider
            .when('/', {
                controller: 'DashboardCtrl',
                templateUrl: 'partials/dashboard.html'
            })
            .when('/edit/:ticketId', {
                controller: 'EditCtrl',
                templateUrl: 'partials/ticket.html'
            })
            .when('/new', {
                controller: 'CreateCtrl',
                templateUrl: 'partials/ticket.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
