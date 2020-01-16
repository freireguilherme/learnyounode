var filtro = require('./program06_module.js'); // require the module
var diretorio = process.argv[2]; // argumento do console, diretorio
var extString = process.argv[3];  // argumento do console, extensão

filtro(diretorio, extString, function (err, list) { //chama a função definida no modulo
  if (err)
    return console.error('Houve um erro:', err); //error

  list.forEach(function (file) { // executa a funcao callback, q retorna err ou data (a lista no caso)
    console.log(file);
  });
});