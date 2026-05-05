let nivel = 0;

// POSIÇÕES DOS BLOQUINHOS
const blocos = [
  { x:160, y:40 },
  { x:210, y:90 },
  { x:145, y:150 },
  { x:220, y:210 },
  { x:150, y:280 },
  { x:230, y:350 },
  { x:160, y:420 },
  { x:220, y:490 },
  { x:170, y:560 },
  { x:200, y:620 }
];

// PERGUNTAS
const perguntas = [
  { p:"2+2", r:["3","4","5","6"], c:1 },
  { p:"5+3", r:["6","7","8","9"], c:2 },
  { p:"10-4", r:["4","5","6","7"], c:2 },
  { p:"3x3", r:["6","8","9","12"], c:2 },
  { p:"12÷3", r:["3","4","5","6"], c:1 },
  { p:"6+7", r:["12","13","14","15"], c:1 },
  { p:"8x2", r:["14","16","18","20"], c:1 },
  { p:"15-5", r:["8","9","10","11"], c:2 },
  { p:"9+6", r:["13","14","15","16"], c:2 },
  { p:"20÷4", r:["4","5","6","7"], c:1 }
];

// PERSONAGEM + BALÃO
function posicionar(){

  const player = document.getElementById("player");
  const balao = document.getElementById("balao");

  let x = blocos[nivel].x;
  let y = blocos[nivel].y;

  player.style.left = x + "px";
  player.style.bottom = y + "px";

  balao.style.left = (x - 30) + "px";
  balao.style.bottom = (y + 60) + "px";
}

// CARREGAR PERGUNTA
function carregarPergunta(){

  let q = perguntas[nivel];

  document.getElementById("pergunta").innerText = q.p;

  let botoes = document.querySelectorAll("#opcoes button");

  for(let i = 0; i < 4; i++){
    botoes[i].innerText = q.r[i];
  }
}

// RESPONDER
function responder(i){

  if(i === perguntas[nivel].c){

    if(nivel < 9){
      nivel++;
      posicionar();
      carregarPergunta();
    }else{
      alert("Você venceu! 🎉");
    }

  }else{
    alert("Errou!");
  }

}

// COMEÇAR JOGO + MÚSICA
function iniciarJogo(){

  document.getElementById("telaInicial").style.display = "none";

  document.getElementById("game").style.display = "block";

  document.getElementById("musicaFundo").play();

  posicionar();
  carregarPergunta();

}

// TUTORIAL
function mostrarTutorial(){

  alert(
    "COMO JOGAR 🎮\n\n" +
    "Resolva as contas matemáticas.\n\n" +
    "Cada resposta certa sobe um bloco.\n\n" +
    "Complete as 10 fases para vencer! 🏆"
  );

}
