let faseAtual = 0;

const fases = [
    {x:25, y:675},
    {x:55, y:630},
    {x:85, y:585},
    {x:115, y:540},
    {x:145, y:495},
    {x:175, y:445},
    {x:205, y:390},
    {x:235, y:330},
    {x:265, y:270},
    {x:295, y:205}
];

function atualizarPosicao(){

    const player = document.getElementById("player");
    const balao = document.getElementById("balao");
    const pergunta = document.getElementById("pergunta");

    let x = fases[faseAtual].x;
    let y = fases[faseAtual].y;

    // PERSONAGEM
    player.style.left = x + "px";
    player.style.top = y + "px";

    // BALÃO ACOMPANHANDO O PERSONAGEM
    balao.style.left = (x - 10) + "px";
    balao.style.top = (y - 95) + "px";

    // TEXTO DENTRO DO BALÃO
    pergunta.style.left = (x + 20) + "px";
    pergunta.style.top = (y - 63) + "px";
}

function responder(valor){

    if(valor === 4){

        if(faseAtual < 9){

            faseAtual++;
            atualizarPosicao();

        }else{

            alert("Parabéns! Você concluiu as 10 fases!");

        }

    }else{

        alert("Errou! Tente novamente.");

    }

}

window.onload = function(){

    atualizarPosicao();

    document.getElementById("pergunta").innerHTML = "2 + 2";

};
