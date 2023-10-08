//getElementById pega um metodo de acordo com o ID do HTML

const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();


        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    });
});
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

        // Verifica se o botão clicado é o último
        if (indice === botoes.length - 1) {
            document.querySelector("main").classList.add("ultimo-botao-clicado");
        } else {
            document.querySelector("main").classList.remove("ultimo-botao-clicado");
        }

    });
});



/* 
    FEITO POR GUILHERME FREITAS 
    Insta: @guilhermefrsz
    GitHub: GuilhermeFrsz
*/