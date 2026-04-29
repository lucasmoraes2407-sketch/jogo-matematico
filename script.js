let nivel = 0;

let perguntas = [
  { p: "2 + 2", r: ["3", "4", "5", "6"], c: 1 },
  { p: "5 x 2", r: ["10", "8", "6", "12"], c: 0 },
  { p: "10 - 3", r: ["6", "7", "8", "9"], c: 1 },
  { p: "9 ÷ 3", r: ["2", "3", "4", "5"], c: 1 },
  { p: "6 + 7", r: ["12", "13", "14", "15"], c: 1 },
  { p: "8 x 2", r: ["14", "15", "16", "18"], c: 2 },
  { p: "20 - 5", r: ["10", "12", "15", "18"], c: 2 },
  { p: "4 x 4", r: ["12", "14", "16", "18"], c: 2 },
  { p: "18 ÷ 2", r: ["8", "9", "10", "11"], c: 1 },
  { p: "7 + 8", r: ["13", "14", "15", "16"], c: 2 }
];

function carregarPergunta() {
  let q = perguntas[nivel];

  document.getElementById("pergunta").innerText = q.p;

  let botoes = document.querySelectorAll("button");
  for (let i = 0; i < 4; i++) {
    botoes[i].innerText = q.r[i];
  }
}

function responder(i) {
  if (i === perguntas[nivel].c) {
    nivel++;
    moverPlayer();
    
    if (nivel < perguntas.length) {
      carregarPergunta();
    } else {
      alert("Você venceu! 🎉");
    }
  } else {
    alert("Errou!");
  }
}

function moverPlayer() {
  let player = document.getElementById("player");

  let altura = 20 + (nivel * 50);
  player.style.bottom = altura + "px";
}

carregarPergunta();
