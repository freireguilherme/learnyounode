const http = require('http');
let url  = require('url');

let porta = process.argv[2];

var parseTime = function (time){        //função que recebe um 'time' e retorna um objeto com hora, minuto e segundo.
    return {
        hour    : time.getHours(),
        minute  : time.getMinutes(),
        second  : time.getSeconds()
    }
}

var unixTime = function (time){         //função que recece 'time' e retorna o unix epoch equivalente com getTime();
    return{
        unixtime: time.getTime()
    }
}

var parseEntrada = (url) => {          //função que 'parsea' o url e verifica se é ISO time ou unix epoch time
    switch (url.pathname){             //switch ao inves de if/else, melhor leitura
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso)); //retorna o resultado de parseTime, usando como parametro Date(url.query.iso)
        case '/api/unixtime':
            return unixTime(new Date(url.query.iso)); //retorna o resultado de unixTime, usando como parametro Date(url.query.iso)
        default:
            return 'entre com um endpoint url valido'
    }
}

http.createServer( (req, res) => {                      //cria o server
    if(req.method != 'GET'){                            //verifica se é metodo GET
        res.writeHead(405);
        res.end();
    }else{
        res.writeHead(200,  {'content-type' :   'application/json'    })
        url = url.parse(req.url, true);                 //parseando req.url com o metodo parse url e atribuindo para var url
        res.end(JSON.stringify(parseEntrada(url)))      //JSON stringify transforma em um objeto JSON o resultado de 'parseEntrada(url)'
    }
}).listen(+porta, () => {
    console.log('Server is listening on http://localhost:%s', porta);
});