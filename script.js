const perguntas = [
{
conta:"2 + 2",
resposta:4,
opcoes:[3,4,5,6]
},
{
conta:"3 + 4",
resposta:7,
opcoes:[7,5,8,9]
},
{
conta:"5 + 5",
resposta:10,
opcoes:[10,8,11,12]
}
];

let fase = 0;

const player = document.getElementById("player");

const posicoes = [
{x:240, y:580},
{x:255, y:520},
{x:270, y:460},
{x:285, y:400},
{x:300, y:340},
{x:315, y:280},
{x:330, y:220},
{x:345, y:160},
{x:360, y:100},
{x:380, y:50}
];

function iniciarJogo(){

document.getElementById("telaInicial").style.display="none";
document.getElementById("game").style.display="block";

moverPlayer();
carregarPergunta();

}

function moverPlayer(){

player.style.left = posicoes[fase].x+"px";
player.style.top = posicoes[fase].y+"px";

}

function carregarPergunta(){

let p = perguntas[fase % perguntas.length];

document.getElementById("pergunta").innerHTML = p.conta;

let botoes = document.querySelectorAll("#opcoes button");

for(let i=0;i<4;i++){

botoes[i].innerHTML = p.opcoes[i];

}

}

function responder(indice){

let p = perguntas[fase % perguntas.length];

if(p.opcoes[indice] == p.resposta){

fase++;

if(fase < 10){

moverPlayer();
carregarPergunta();

}else{

alert("Parabéns! Você chegou na faculdade!");

}

}else{

alert("Errou!");

}

}
