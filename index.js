let http = require('http');
let port = 5000;

let server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('Hello world');
})

server.listen(port, function(){
    console.log('Server listening on port' + port);
});

