var http = require('http')
var bl = require('bl')
var resultados = []
var contador = 0

function imprimir () {                          //imprime
  for (var i = 0; i < 3; i++)
    console.log(resultados[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], (resposta) => {
    resposta.pipe(bl( (err, data) => {              //metodo pipe para encapsular o data no buffer line  
      if (err)                                      // para que todo conteudo de data seja mostrado
        return console.error("Houve um erro:" + err);

        resultados[index] = data.toString()         //apenas a data[2] sera armazenada em resutados[2], etc
      contador++;

      if (contador == 3)                            //chama a funçao apenas ao fim dos tres pedidos
        imprimir()
    }))
  })
}

for (var i = 0; i < 3; i++)                         
  httpGet(i)