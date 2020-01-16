const fs = require('fs');
const path = require('path');

module.exports = function (diretorio, extString, callback){

    fs.readdir(diretorio, (err, lista) => {    // lê o diretorio
    
        if(err) return callback(err); // se erro, callback com o erro
    
        lista = lista.filter(function (file){
            return path.extname(file) === '.' + extString;
        });

        callback(null, lista); // se deu certo, retorna o callback com o data (a lista)
    });
};

