var boton_7 = document.getElementById('boton_7');
var boton_8 = document.getElementById('boton_8');
var boton_9 = document.getElementById('boton_9');
var boton_div = document.getElementById('boton_div');

var boton_4 = document.getElementById('boton_4');
var boton_5 = document.getElementById('boton_5');
var boton_6 = document.getElementById('boton_6');
var boton_mult = document.getElementById('boton_mult');

var boton_1 = document.getElementById('boton_1');
var boton_2 = document.getElementById('boton_2');
var boton_3 = document.getElementById('boton_3');
var boton_rest = document.getElementById('boton_rest');

var boton_0 = document.getElementById('boton_0');
var boton_punto = document.getElementById('boton_punto');
var boton_igual = document.getElementById('boton_igual');
var boton_mas = document.getElementById('boton_mas');

var boton_c = document.getElementById('boton_c');


var entrada = document.getElementById('entrada_texto');


boton_7.addEventListener('click', function(){
    entrada.value += '7';
});

boton_8.addEventListener('click', function(){
    entrada.value += '8';
});

boton_9.addEventListener('click', function(){
    entrada.value += '9';
}   );

boton_div.addEventListener('click', function(){
    entrada.value += '/';
});

boton_4.addEventListener('click', function(){
    entrada.value += '4';
});

boton_5.addEventListener('click', function(){
    entrada.value += '5';
});

boton_6.addEventListener('click', function(){  
    entrada.value += '6';
}   );

boton_mult.addEventListener('click', function(){
    entrada.value += '*';
});

boton_1.addEventListener('click', function(){
    entrada.value += '1';
});

boton_2.addEventListener('click', function(){
    entrada.value += '2';
});

boton_3.addEventListener('click', function(){
    entrada.value += '3';
}   );

boton_rest.addEventListener('click', function(){
    entrada.value += '-';
});

boton_0.addEventListener('click', function(){
    entrada.value += '0';
});

boton_punto.addEventListener('click', function(){
    entrada.value += '.';
});

boton_igual.addEventListener('click', function(){

    try {
        entrada.value = eval(entrada.value);


    }catch(e){
        entrada.value = 'Error';
        alert('Error de calculo revisar la operacion');
    }
});


boton_c.addEventListener('click', function(){
    entrada.value = '';
});