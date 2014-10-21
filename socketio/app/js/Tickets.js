(function () {
    'use strict';
    var module = angular.module('realtimeData.data', []);

    module.factory('Tickets', Tickets);

    Tickets.$inject = [];

    function Tickets() {
        var tickets = [
            {
                'title': 'The network is down!',
                'desc': 'The network is down and I cannot perform my work'
            },
            {
                'title': 'I lost my pen',
                'desc': 'I was near my cube when I noticed that my pen was gone!  Someone must have taken it.'
            },
            {
                'title': 'PC Load Letter',
                'desc': 'I wish I knew what it meant, but the printer is not working.'
            },
            {
                'title': 'My account is locked',
                'desc': 'I know that my password was correct even though it failed.  So I kept trying.  Only about 50 times.'
            }
        ];
        var service = {
            // functions
            query: query,
            save: save
        };

        return service;

        //////////////////////////////////////////////////////////////

        function query() {
            return tickets;
        }

        function save(newTicket) {
            tickets.push({'title': newTicket.title, 'desc': newTicket.desc});
        }

    }
})();