
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ingeniera en proceso')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Cuando comprendemos algo,')
    .pauseFor(2500)
    // Numero de Caracteres que se borraran
    .deleteChars(5)
    .typeString('<strong>dejamos de temerlo</strong>')
    .pauseFor(2500)
    .start();