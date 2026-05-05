let faseAtual = 0;

// 10 posições dos bloquinhos
const blocos = [
  {x:35, y:675},
  {x:65, y:635},
  {x:95, y:590},
  {x:125, y:545},
  {x:155, y:495},
  {x:185, y:445},
  {x:215, y:390},
  {x:245, y:330},
  {x:275, y:270},
  {x:305, y:210}
];


// BOTÃO JOGAR
function iniciarJogo(){

  // esconde tela inicial
  document.getElementById("telaInicial").style.display = "none";

  // mostra o jogo
  document.getElementById("game").style.display = "block";

  // coloca personagem na posição inicial
  moverPersonagem();

}


// MOVIMENTO DO PERSONAGEM
function moverPersonagem(){

  const player = document.getElementById("player");
  const balao = document.getElementById("balao");
  const pergunta = document.getElementById("pergunta");

  const pos = blocos[faseAtual];

  // boneco
  player.style.left = pos.x + "px";
  player.style.top = pos.y + "px";

  // balão acompanha
  balao.style.left = (pos.x - 20) + "px";
  balao.style.top = (pos.y - 90) + "px";

  // pergunta dentro do balão
  pergunta.style.left = (pos.x + 20) + "px";
  pergunta.style.top = (pos.y - 55) + "px";

}


// CLIQUE NAS RESPOSTAS
function responder(valor){

  // resposta certa = 4
  if(valor === 4){

    if(faseAtual < 9){

      faseAtual++;
      moverPersonagem();

    }else{

      alert("Parabéns! Você completou as 10 fases!");

    }

  }else{

    alert("Resposta errada!");

  }

}
