angular.module('realtimeData.data', ['firebase'])
    .factory('Tickets', ['$firebase',  function ($firebase) {
        'use strict';

        var ref = new Firebase('https://realtime-data-demo.firebaseio.com'); //***PUT IN YOUR OWN FIREBASE URI HERE****
        return $firebase(ref).$asArray();

    }]);