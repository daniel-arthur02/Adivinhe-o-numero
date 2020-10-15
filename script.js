var numeroAleatorio= Math.floor(Math.random()*100)+1;

console.log("numeroAleatorio::", numeroAleatorio);

var enviarNumero = document.querySelector('.enviarNumero');
var inputNumero = document.querySelector('#numero')

enviarNumero.addEventListener('click',event =>{
    if (inputNumero.value == '') {
        alert('favor informar um numero');
    } else if (inputNumero.value < numeroAleatorio) {
        alert('informe um numero maior');
    } else if (inputNumero.value > numeroAleatorio) {
        alert('informe um numero menor');
    } else {
        alert('voce acertou o numero')
    }
    console.log("inputNumero::", inputNumero.value);
});

