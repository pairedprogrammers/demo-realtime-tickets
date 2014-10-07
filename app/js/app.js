angular.module('realtimeData', [])
    .controller('TicketController', ['$scope', function ($scope) {
        "use strict";

        $scope.tickets = [
            {'id': 1, 'title': 'The network is down!', 'severity': 'Critical', 'requester': 'The President'},
            {'id': 2, 'title': 'I lost my pen', 'severity': 'low', 'requester': 'Some Guy'},
            {'id': 3, 'title': 'PC Load Letter', 'severity': 'Critical', 'requester': 'Bolton'},
            {'id': 4, 'title': 'My account is locked', 'severity': 'low', 'requester': 'User A'}
        ];
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