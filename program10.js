const net = require('net');

function completarZero(i){
    return ( i < 10? '0' : '') + i;                 // se o valor for na casa das unidades (menor que 10), precisa de um zero na frente
}

function dataAgora() {                              // funcção que retorna a data atual
    let d  = new Date();
    return d.getFullYear() + '-'                    // ano
        + completarZero(d.getMonth() + 1) + '-'     // mês
        + completarZero(d.getDate()) + ' '          // dia
        + completarZero(d.getHours()) + ':'         // hora
        + completarZero(d.getMinutes());            // minutos
}

const server =  net.createServer((socket)=> {       //criou o TCP server para e escreveu dataAgora no socket
    socket.end(dataAgora() + '\n');
})
server.listen(Number(process.argv[2]));             //ouvindo a porta passanda via argv