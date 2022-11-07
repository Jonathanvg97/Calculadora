const botonNumeros=document.getElementsByName("datos-numeros");   //se declara una constante de los nummeros qu van a ir en la calculadora
const botonOperaciones=document.getElementsByName("datos-operaciones"); //se declara una constante de los operadores aritmeticos que van a ir en la calculadora
const botonIgual=document.getElementsByName("datos-igual")[0]; //se declara una constante de los operadores logicos que van a ir en la calculadora
const botonEliminar=document.getElementsByName("datos-borrar")[0]; //se declara una constante de la funcion borrar van a ir en la calculadora
const botonEliminarUno=document.getElementsByName("datos-borrar-ultimo")[0];//se declara una constante de la funcion eliminar solo uno que va a ir en la calculadora
var resultado = document.getElementById("resultado");//se declara una variable  del resultado de las operaciones 
var operacionActual=""; 
var operacionAnterior="";
var operacion=undefined;


//AGREGANDO EVENTOS A LOS BOTONES

//En esta parte se agrega el evento click mediante el método forEach() el cual ejecuta la función indicada una vez por cada elemento señalado, a la constante botonNumeros las cuales en el HTML corresponden al name "datos-numeros" asignando así una función con el parámetro botón la cual al ejecutarse utiliza el .addEventListener.

//Frente a la utilización del .addEventListener podemos evidenciar que se realiza asignando el evento del click junto con la función de lo que debe pasar al realizar el click invocando en ella el innetText, el cual se encarga de mostrar el contenido señalado en el HTML del boton seleccionado.



botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOperaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
        seleccionarOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarPantalla();
    });

botonEliminar.addEventListener('click', function(){
    borrar();
    actualizarPantalla();
    });

botonEliminarUno.addEventListener('click', function(){
    borrarUltimo();
    actualizarPantalla();
    });

//metodos

function seleccionarOperacion(op){
    if (operacionActual ==="") return;
    if (operacionAnterior !== "") {
        calcular()
    }
    operacion= op.toString();
    operacionAnterior=operacionActual;
    operacionActual="";
}

function calcular(){
    var calculo;
    const anterior= parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN (actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case '.':
            calculo = anterior
        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior ="";
}


function agregarNumero(num){// esta funcion nos ayuda a agregar  el numero digitado
    operacionActual = operacionActual.toString() + num.toString();
    actualizarPantalla();
}

function borrar(){// esta funcion nos ayuda a solo eliminar todo lo que este en pantalla, para ello se deja las tres variables vacias
    operacionActual = "";
    operacionAnterior = "";
    operacion = undefined;
}

function borrarUltimo(){ // esta funcion nos ayuda a solo eliminar el ultimo elemento digitado mediantes el uso del slice
    operacionActual= operacionActual.slice(0,-1);
}

function actualizarPantalla(){  // esta funcion se aplica para que la pantalla de la calculadora se actualize cada que que se haga un cambio en las operaciones , ya sea agregar o elimminar algo
    resultado.value = operacionActual;
}

borrar();
borrarUltimo();


//codigo del modo oscuro

const colorSwitch = document.querySelector('#switch input[type="checkbox"]'); //el switch se utiliza para cambiar el modo de colores de la calculadora "oscuroo" y "clarito"
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);