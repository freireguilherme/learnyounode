const fs = require('fs');

const conteudo = fs.readFileSync(process.argv[2]);
let linhas = conteudo.toString().split('\n').length;
console.log(linhas-1);