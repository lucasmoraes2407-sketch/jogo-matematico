let nivel = 0;

// POSIÇÕES EXATAS DOS 10 BLOQUINHOS
// (o personagem vai pisando em cada um)
const blocos = [
  { x: 160, y: 40 },   // fase 1
  { x: 210, y: 90 },   // fase 2
  { x: 145, y: 150 },  // fase 3
  { x: 220, y: 210 },  // fase 4
  { x: 150, y: 280 },  // fase 5
  { x: 230, y: 350 },  // fase 6
  { x: 160, y: 420 },  // fase 7
  { x: 220, y: 490 },  // fase 8
  { x: 170, y: 560 },  // fase 9
  { x: 200, y: 620 }   // fase 10
];

// 10 PERGUNTAS
const perguntas = [
  { p: "2 + 2", r: ["3","4","5","6"], c: 1 },
  { p: "5 + 3", r: ["6","7","8","9"], c: 2 },
  { p: "10 - 4", r: ["4","5","6","7"], c: 2 },
  { p: "3 x 3", r: ["6","8","9","12"], c: 2 },
  { p: "12 ÷ 3", r: ["3","4","5","6"], c: 1 },
  { p: "7 + 5", r: ["10","11","12","13"], c: 2 },
  { p: "8 x 2", r: ["14","16","18","20"], c: 1 },
  { p: "15 - 5", r: ["8","9","10","11"], c: 2 },
  { p: "9 + 6", r: ["13","14","15","16"], c: 2 },
  { p: "20 ÷ 4", r: ["4","5","6","7"], c: 1 }
];

// PERSONAGEM COMEÇA NO PRIMEIRO BLOCO
function posicionarPlayer() {
  const player = document.getElementById("player");

  player.style.left = blocos[nivel].x + "px";
  player.style.bottom = blocos[nivel].y + "px";
}

// MOSTRAR PERGUNTA
function carregarPergunta() {
  const q = perguntas[nivel];

  document.getElementById("pergunta").innerText = q.p;

  const botoes = document.querySelectorAll("button");

  for (let i = 0; i < 4; i++) {
    botoes[i].innerText = q.r[i];
  }
}

// RESPONDER
function responder(i) {

  if (i === perguntas[nivel].c) {

    if (nivel < 9) {
      nivel++;
      posicionarPlayer();
      carregarPergunta();
    } else {
      alert("Você completou as 10 fases! 🎉");
    }

  } else {
    alert("Errou!");
  }

}

// INICIAR
posicionarPlayer();
carregarPergunta();
