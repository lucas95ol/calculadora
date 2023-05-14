//guardando o elemento html onde aparecerão os numeros,simbolos e resultados em uma variavel
var screen = document.querySelector(".screen");

//função para adicionar caracteres no elemento html
function insert(number){
    //variavel de bloco para guardar os caracteres 
    let caracter = document.querySelector(".screen").innerHTML;
    
    //imprimindo os caracteres dentro da variavel acima no elemento html 
    screen.innerHTML = caracter + number;
}

function erase(){
    screen.innerHTML = "";
}

function backspace(){
    let caracter = document.querySelector(".screen").innerHTML;
    screen.innerHTML = caracter.substring(0, caracter.length - 1);
}


function result(){
    var calculation = document.querySelector(".screen").innerHTML;
    if(calculation){
        screen.innerHTML = eval(calculation);
    }
}