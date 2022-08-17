const http = require('http');

const server = http.createServer(route);


server.listen(3000);

function route(req, res){

    if(req.url == '/sayhello') {
        res.write('Hallo Welt!!!');
    }

    if(req.url == '/') {
        res.write('Es lebt!!!');
    }


    res.end();



}