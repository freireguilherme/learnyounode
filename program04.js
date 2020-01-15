const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, ( err, conteudo) => {
    if(err){
        return console.log(err);
    }
    let linhas = conteudo.toString().split('\n').length;
    console.log(linhas-1);
});

