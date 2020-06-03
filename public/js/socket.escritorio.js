1 //Comando para establecer la conneccion
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {

    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var label = $('small');
var escritorio = searchParams.get('escritorio');

console.log(escritorio);
$('h1').text('Escritorio' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(res) {

        if (res === 'No hay mas tickets') {
            alert(res);
            label.text(res);
            return;
        }

        label.text(res.numero);
        console.log(res);
    })
})