(function () {
    'use strict';
    var module = angular.module ('realtimeData.data', []);

    module.factory ('Tickets', Tickets);

    Tickets.$inject = [];
    
    function Tickets () {
        var tickets = [
            {
                'id': 1,
                'title': 'The network is down!',
                'desc': 'The network is down and I cannot perform my work',
                'severity': 'Critical'
            },
            {
                'id': 2,
                'title': 'I lost my pen',
                'desc': 'I was near my cube when I noticed that my pen was gone!  Someone must have taken it.',
                'severity': 'low'
            },
            {
                'id': 3,
                'title': 'PC Load Letter',
                'desc': 'I wish I knew what it meant, but the printer is not working.',
                'severity': 'Critical'
            },
            {
                'id': 4,
                'title': 'My account is locked',
                'desc': 'I know that my password was correct even though it failed.  So I kept trying.  Only about 50 times.',
                'severity': 'low'
            }
        ];
        var service = {
            // functions
            $get: function () { return tickets; }
        };
        return service;
    }
}) ();