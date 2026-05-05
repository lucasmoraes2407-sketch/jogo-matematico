const player = document.getElementById("player");
const balao = document.getElementById("balao");
const pergunta = document.getElementById("pergunta");
const botoes = document.querySelectorAll("#opcoes button");

let fase = 0;

const posicoes = [
    {x:20, y:670},
    {x:70, y:620},
    {x:120, y:570},
    {x:170, y:510},
    {x:200, y:450},
    {x:210, y:390},
    {x:230, y:330},
    {x:250, y:270},
    {x:270, y:210},
    {x:290, y:150}
];

const perguntas = [
    {pergunta:"2+2", opcoes:[3,4,5,6], certa:4},
    {pergunta:"5+1", opcoes:[6,7,8,9], certa:6},
    {pergunta:"3+4", opcoes:[5,7,8,9], certa:7},
    {pergunta:"6+2", opcoes:[7,8,9,10], certa:8},
    {pergunta:"9+1", opcoes:[8,9,10,11], certa:10},
    {pergunta:"4+4", opcoes:[6,7,8,9], certa:8},
    {pergunta:"7+2", opcoes:[8,9,10,11], certa:9},
    {pergunta:"8+2", opcoes:[9,10,11,12], certa:10},
    {pergunta:"5+5", opcoes:[8,9,10,11], certa:10},
    {pergunta:"6+6", opcoes:[10,11,12,13], certa:12}
];

function atualizarPosicoes(){

    player.style.left = posicoes[fase].x + "px";
    player.style.top = posicoes[fase].y + "px";

    balao.style.left = (posicoes[fase].x - 35) + "px";
    balao.style.top = (posicoes[fase].y - 95) + "px";

    pergunta.style.left = (posicoes[fase].x - 10) + "px";
    pergunta.style.top = (posicoes[fase].y - 65) + "px";
}

function carregarPergunta(){

    let atual = perguntas[fase];

    pergunta.innerHTML = atual.pergunta;

    for(let i=0; i<4; i++){
        botoes[i].innerHTML = atual.opcoes[i];

        botoes[i].onclick = function(){
            responder(atual.opcoes[i]);
        }
    }

    atualizarPosicoes();
}

function responder(valor){

    if(valor === perguntas[fase].certa){

        fase++;

        if(fase >= 10){
            alert("Parabéns! Você venceu!");
            fase = 0;
        }

        carregarPergunta();
    }
}

carregarPergunta();
