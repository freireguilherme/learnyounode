const bl = require('bl');           //buffer line
const http = require('http');

let url = process.argv[2];          

http.get(url, (resposta) => {
    resposta.pipe(bl((err, data) => {                   //metodo pipe para encapsular o data no buffer line       
        if(err)                                         // para que todo conteudo de data seja mostrado
            return console.log("Houve um erro:" + err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});