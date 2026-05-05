let faseAtual = 0;

// posições reais dos 10 bloquinhos
const blocos = [
  { x: 35,  y: 675 },
  { x: 65,  y: 635 },
  { x: 95,  y: 590 },
  { x: 125, y: 545 },
  { x: 155, y: 495 },
  { x: 185, y: 445 },
  { x: 215, y: 390 },
  { x: 245, y: 330 },
  { x: 275, y: 270 },
  { x: 305, y: 210 }
];

// pergunta fixa por enquanto
document.getElementById("pergunta").innerText = "2 + 2";

function moverPersonagem() {

  const player = document.getElementById("player");
  const balao = document.getElementById("balao");
  const pergunta = document.getElementById("pergunta");

  const pos = blocos[faseAtual];

  // boneco
  player.style.left = pos.x + "px";
  player.style.top = pos.y + "px";

  // balão acompanha o boneco
  balao.style.left = (pos.x - 15) + "px";
  balao.style.top = (pos.y - 95) + "px";

  // texto dentro do balão
  pergunta.style.left = (pos.x + 20) + "px";
  pergunta.style.top = (pos.y - 58) + "px";
}


// chamada dos botões
function responder(valor){

  if(valor === 4){

    if(faseAtual < 9){
      faseAtual++;
      moverPersonagem();
    }else{
      alert("Você completou as 10 fases!");
    }

  }else{
    alert("Resposta errada!");
  }

}

// inicia posição
window.onload = function(){
  moverPersonagem();
}
