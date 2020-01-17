const http = require('http');
const map  = require('through2-map');

let port   = process.argv[2];

http.createServer((req, res) => {                                   // cria HTTP server
    if(req.method === 'POST'){                                      // verifica se é POST
        res.writeHead(200, {    'content-type':   'text/plain'  }); //success code 200
        req.pipe(map((chunk) => {                                   //transmite o pedido para 'map' encapsulando com pipe
            return chunk.toString().toUpperCase();                  //converte o pedido para Upper Case
        })).pipe(res);                                              //encapsula e manda para 'res'
    }else{
        res.writeHead(405);                                         //se não for POST, error code 405 
    }
}).listen(+port, () =>{
    console.log('Server is listening on port: %s', port);
});

