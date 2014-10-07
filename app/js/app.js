angular.module('realtimeData', ['ngRoute'])
    .controller('DashboardCtrl', ['$scope', 'TicketService', function ($scope, TicketService) {
        "use strict";

        $scope.tickets = TicketService;
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

        var tickets =  [
            {'id': 1, 'title': 'The network is down!', 'desc': 'The network is down and I cannot perform my work', 'severity': 'Critical'},
            {'id': 2, 'title': 'I lost my pen', 'desc': 'I was near my cube when I noticed that my pen was gone!  Someone must have taken it.',  'severity': 'low'},
            {'id': 3, 'title': 'PC Load Letter', 'desc': 'I wish I knew what it meant, but the printer is not working.',  'severity': 'Critical'},
            {'id': 4, 'title': 'My account is locked', 'desc': 'I know that my password was correct even though it failed.  So I kept trying.  Only about 50 times.',  'severity': 'low'}
        ];

        return tickets;
    });

// service endpoints
// tickets
// tickets/1
// put ticket