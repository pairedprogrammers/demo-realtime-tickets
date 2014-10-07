angular.module('realtimeData', ['ngRoute'])
    .controller('DashboardCtrl', ['$scope', function ($scope) {
        "use strict";

        $scope.tickets = [
            {'id': 1, 'title': 'The network is down!', 'severity': 'Critical', 'requester': 'The President'},
            {'id': 2, 'title': 'I lost my pen', 'severity': 'low', 'requester': 'Some Guy'},
            {'id': 3, 'title': 'PC Load Letter', 'severity': 'Critical', 'requester': 'Bolton'},
            {'id': 4, 'title': 'My account is locked', 'severity': 'low', 'requester': 'User A'}
        ];
    }])
    .controller('EditCtrl', ['$scope', function ($scope) {
        "use strict";


    }])
    .controller('CreateCtrl', ['$scope', function ($scope) {
        "use strict";


    }])
    .config( ['$routeProvider', function($routeProvider){
        "use strict";
        $routeProvider
            .when('/', {
                controller:'DashboardCtrl',
                templateUrl:'partials/dashboard.html'
            })
            .when('/edit/:ticketId', {
                controller:'EditCtrl',
                templateUrl:'partials/ticket.html'
            })
            .when('/new', {
                controller:'CreateCtrl',
                templateUrl:'partials/ticket.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    }])
    .service('TicketService', function () {
        "use strict";

        var tickets = [];

        return tickets;
    });

// service endpoints
// tickets
// tickets/1
// put ticket