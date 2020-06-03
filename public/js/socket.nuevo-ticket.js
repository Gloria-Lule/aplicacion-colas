1 //Comando para establecer la conneccion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', () => {

    console.log('Conectado al servidor');

})

socket.on('disconnect', () => {

    console.log('Desconectado del servidor');
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguiente) {

        label.text(siguiente);

    });

    //escuchando a server
    socket.on('estadoActual', function(res) {
        label.text(res.actual);
    });

});