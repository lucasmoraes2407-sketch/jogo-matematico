let faseAtual = 0;

// POSIÇÕES DOS 10 BLOQUINHOS
// x = esquerda
// y = topo
const posicoes = [

    {x:35,  y:640},
    {x:70,  y:610},
    {x:105, y:565},
    {x:135, y:520},
    {x:165, y:470},
    {x:195, y:420},
    {x:220, y:365},
    {x:245, y:300},
    {x:270, y:235},
    {x:290, y:170}

];

function iniciarJogo(){

    document.getElementById("telaInicial").style.display = "none";
    document.getElementById("game").style.display = "block";

    moverPersonagem();
}


// COLOCA O BONECO NO BLOCO CERTO
function moverPersonagem(){

    const player = document.getElementById("player");

    player.style.left = posicoes[faseAtual].x + "px";
    player.style.top = posicoes[faseAtual].y + "px";
}


// CLIQUE NAS RESPOSTAS
const botoes = document.querySelectorAll("#opcoes button");

botoes.forEach(botao => {

    botao.onclick = function(){

        const resposta = parseInt(this.innerText);

        // resposta certa = 4
        if(resposta === 4){

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

});
