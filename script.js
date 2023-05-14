//guardando o elemento html onde aparecerão os numeros,simbolos e resultados em uma variavel
var screen = document.querySelector(".screen");

//função para adicionar caracteres no elemento html
function insert(number){
    //variavel de bloco para guardar os caracteres 
    let caracter = document.querySelector(".screen").innerHTML; 
    //imprimindo os caracteres dentro da variavel acima no elemento html 
    screen.innerHTML = caracter + number;
}

//função para apagar o que estiver na tela 
function erase(){
    screen.innerHTML = "";
}

//função para apagar cada caractere da tela, começando do ultimo até o primeiro
function backspace(){
    //guarda o q está na tela em outra variável para esta função poder editá-las
    let caracter = document.querySelector(".screen").innerHTML;
    //apagando do ultimo elemento até o primeiro 
    screen.innerHTML = caracter.substring(0, caracter.length - 1);
}
//função para calcular o resultado
function result(){
    let calculation = document.querySelector(".screen").innerHTML; 
    if(calculation){                          // se tiver algo dentro da tela
        screen.innerHTML = eval(calculation);//leia o que tem e calcule
    }
}