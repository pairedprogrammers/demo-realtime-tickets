angular.module('realtimeData', ['ngRoute', 'realtimeData.data'])
    .controller('DashboardCtrl', ['$scope', 'Tickets', 'socketio', function ($scope, Tickets, socketio) {
        'use strict';
        
        $scope.tickets = Tickets.query();
        socketio.on('ticket', function (msg) {
            $scope.tickets.push(msg);
        });
    }])
    .controller('CreateCtrl', ['$scope', '$location', 'Tickets', function ($scope, $location, Tickets) {
        'use strict';

        $scope.save = function (newTicket) {
            Tickets.save(newTicket);
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
    })
    // From http://briantford.com/blog/angular-socket-io
    .factory('socketio', ['$rootScope', function ($rootScope) {
        'use strict';
        
        var socket = io.connect();
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
    }]);
