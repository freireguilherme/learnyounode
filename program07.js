var http = require('http')
var https = require('https')

var url = process.argv[2]

http.get(url, (response) => {
    response.setEncoding('utf8')                  //string ao inves de Buffer
    response.on('data', console.log)              //manda 'data' para console.log
    response.on('error', console.error)           //manda 'error' para console.error
});