const http   = require('http');
const fs     = require('fs');

let port     = process.argv[2];
let file     = process.argv[3];

const server = http.createServer((req, res) => {
    fs.createReadStream(file).pipe(res)
})

server.listen(+port, () => {
    console.log('Server listening on http://localhost: %s', port)
})