const fs = require('fs');
const path = require('path');

let folder = process.argv[2]; // diretorio
let ext = '.' + process.argv[3]; //extensão

fs.readdir(folder, (err, lista) => {    // lê o diretorio
    
    if(err) return console.log(err); // se erro

    lista.forEach((file) => {           // para cada arquivo
        if(path.extname(file) === ext)  //compara a extensão
            console.log(file);
    });
});