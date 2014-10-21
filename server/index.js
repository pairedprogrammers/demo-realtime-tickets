var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//app.use(express.static('..\app'));
app.use('/', express.static('../app/'));
app.use('/bower_components', express.static('../bower_components/'));

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

app.get('/tickets', function(req, res){
    res.send(tickets);
});

io.on('connection', function(socket){
    socket.on('ticket', function(msg){
        io.emit('ticket', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});