const canvas = document.getElementById("jogo");
const ctx = canvas.getContext("2d");

// PERSONAGEM
let player = {
  x: 180,
  y: 500,
  size: 30
};

// CONTROLES
let keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// NÍVEL
let nivel = 0;

// PERGUNTAS
const perguntas = [
  { p: "2 + 2 = ?", r: ["3", "4", "5", "6"], c: 1 },
  { p: "5 x 2 = ?", r: ["10", "7", "8", "9"], c: 0 },
  { p: "10 - 3 = ?", r: ["5", "6", "7", "8"], c: 2 },
];

// MOSTRAR PERGUNTA
function mostrarPergunta() {
  let p = perguntas[nivel];

  document.getElementById("pergunta").innerText = p.p;
  let respostasDiv = document.getElementById("respostas");
  respostasDiv.innerHTML = "";

  p.r.forEach((resposta, i) => {
    let btn = document.createElement("button");
    btn.innerText = resposta;

    btn.onclick = () => {
      if (i === p.c) {
        alert("Acertou!");
        nivel++;

        // sobe no mapa
        player.y -= 50;

        if (nivel < perguntas.length) {
          mostrarPergunta();
        } else {
          alert("Você venceu!");
        }

      } else {
        alert("Errou!");
      }
    };

    respostasDiv.appendChild(btn);
  });
}

// MOVIMENTO
function atualizar() {
  if (keys["ArrowLeft"] || keys["a"]) player.x -= 3;
  if (keys["ArrowRight"] || keys["d"]) player.x += 3;
  if (keys["ArrowUp"] || keys["w"]) player.y -= 3;
  if (keys["ArrowDown"] || keys["s"]) player.y += 3;
}

// DESENHAR
function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

// LOOP DO JOGO
function loop() {
  atualizar();
  desenhar();
  requestAnimationFrame(loop);
}

// INICIAR
mostrarPergunta();
loop();
