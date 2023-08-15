const pantalla = document.querySelector('.screen');
const borrar = document.querySelector('.borrar');

const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const tres = document.querySelector('.tres');
const cuatro = document.querySelector('.cuatro');
const cinco = document.querySelector('.cinco');
const seis = document.querySelector('.seis');
const siete = document.querySelector('.siete');
const ocho = document.querySelector('.ocho');
const nueve = document.querySelector('.nueve');
const cero = document.querySelector('.cero');

const porcentaje = document.querySelector('.porcentaje');
const dividir = document.querySelector('.dividir');
const multiplicar = document.querySelector('.multiplicar');
const restar = document.querySelector('.restar');
const sumar = document.querySelector('.sumar');


borrar.addEventListener('click', eliminar);

uno.addEventListener('click', () => recibirNumero(1));
dos.addEventListener('click', () => recibirNumero(2));
tres.addEventListener('click', () => recibirNumero(3));
cuatro.addEventListener('click', () => recibirNumero(4));
cinco.addEventListener('click', () => recibirNumero(5));
seis.addEventListener('click', () => recibirNumero(6));
siete.addEventListener('click', () => recibirNumero(7));
ocho.addEventListener('click', () => recibirNumero(8));
nueve.addEventListener('click', () => recibirNumero(9));
cero.addEventListener('click', () => recibirNumero(0));




resultados = "32";

const escribir = document.createElement('p');
let numeroCompleto;

function MostrarResultado(resultado){
    escribir.innerHTML = resultado;
    pantalla.appendChild(escribir);
}

function eliminar() {
    escribir.innerHTML = 0;
    pantalla.appendChild(escribir)
}

function recibirNumero(numero) {
    let num = 0;
    num += numero;
    escribir.innerHTML += numero;
    pantalla.appendChild(escribir);
    return num;
}

function operaciones(num1, num2) {
    
}

recibirNumero();
MostrarResultado(resultados);
