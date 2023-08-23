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
const igual = document.querySelector('.resultados');


borrar.addEventListener('click', eliminar);

uno.addEventListener('click', () =>guardarNumero(1));
dos.addEventListener('click', () =>guardarNumero(2));
tres.addEventListener('click', () =>guardarNumero(3));
cuatro.addEventListener('click', () =>guardarNumero(4));
cinco.addEventListener('click', () =>guardarNumero(5));
seis.addEventListener('click', () =>guardarNumero(6));
siete.addEventListener('click', () =>guardarNumero(7));
ocho.addEventListener('click', () =>guardarNumero(8));
nueve.addEventListener('click', () =>guardarNumero(9));
cero.addEventListener('click', () =>guardarNumero(0));

porcentaje.addEventListener('click', () => operaciones('porcentaje'));
dividir.addEventListener('click', () => operaciones('dividir'));
multiplicar.addEventListener('click',() => operaciones('multiplicar') );
restar.addEventListener('click', () => operaciones('restar'));
sumar.addEventListener('click', () => operaciones('sumar') );

igual.addEventListener('click', resolver);



var flag;
const escribir = document.createElement('p');
resultados  = " ";
var num = " ";
var num2 = " ";
var numero = ' ';
let elegirOperacion;

function eliminar() {
    escribir.innerHTML = " ";
    pantalla.appendChild(escribir);
    
}

function operaciones(operacion) {
    
    switch(operacion){
        case 'sumar': 
            flag = true;
            elegirOperacion = 'sumar';
            break;
        case 'restar':
            flag = true;
            elegirOperacion = 'restar';
            break;
        case 'dividir':
            flag = true;
            elegirOperacion = 'dividir';
            break;
        case 'multiplicar':
            flag = true;
            elegirOperacion = 'multiplicar';
            break;
        case 'porcentaje':
            flag = true;
            elegirOperacion = 'porcentaje';
            break;
    }
}


function guardarNumero(numero) {
    if(flag !== true ){
    num += String(numero);
    escribir.innerHTML += numero;
    pantalla.appendChild(escribir);
    } else if(flag == true){
        if(num2 == 0){
            eliminar();
        }
        num2 += String(numero);
        escribir.innerHTML += numero;
        pantalla.appendChild(escribir);
    }
    
}


function resolver(){
    let n1 = parseInt(num);
    let n2 = parseInt(num2);
    console.log('Este es el segundo numero ' + n1);
    var resultado;
    switch(elegirOperacion){
        case 'sumar': 
            resultado = n1 + n2;
            escribir.innerHTML = resultado;
            pantalla.appendChild(escribir);
            console.log('esta sumando ' + resultado);
            break;
        case 'restar':
            resultado = n1 - n2;
            escribir.innerHTML = resultado;
            pantalla.appendChild(escribir);
            break;
        case 'dividir':
            resultado = n1 / n2;
            escribir.innerHTML = resultado;
            pantalla.appendChild(escribir);
            break;
        case 'multiplicar':
            resultado = n1 * n2;
            escribir.innerHTML = resultado;
            pantalla.appendChild(escribir);
            break;
        case 'porcentaje':
            console.log('NON AVALIBLE');
            break;
    }
}

eliminar();
guardarNumero(numero);
