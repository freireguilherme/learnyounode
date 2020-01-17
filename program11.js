const http   = require('http');
const fs     = require('fs');

let port     = process.argv[2];                                 //porta a ser ouvida, passada por parametro
let file     = process.argv[3];                                 //localização do arquivo

const server = http.createServer((req, res) => {                //cria o HTTP server
    res.writeHead (200, {   'content-type': 'text/plain'    })  //escreve no cabeçalho o success code 200 e JSON com o tipo do conteudo
    fs.createReadStream(file).pipe(res)                         //passa o conteudo para memoria e entao encapsula para 'res'
})

server.listen(+port, () => {                                    //listen a porta e quando a conexão é feita, mostra no cosole.log qual a porta
    console.log('Server listening on http://localhost: %s', port)
})