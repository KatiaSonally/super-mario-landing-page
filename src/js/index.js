/*
Objetivo 1 - Quando o usuário clicar no botão de 'Veja o trailer', devemos abrir a modal com o vídeo do trailer.
- Passo 1.1 - Pegar o elemento que representa o botão na tela, usando o JS.
- Passo 1 .2- Identificar quando o usuário clicar no botão.
- Passo 1.3 - Pegar o elemento da modal no JS.
- Passo 1.4 - Abrir a modal na tela.

Objetivo 2 - Quando o usuário clicar no X devemos fechar a modal.
- Passo 2.1 - Pegar o elemento de fechar a modal, usando o JS.
- Passo 2.2 - Identificar quando o usuário clicar no X.
- Passo 2.3 - Fechar a modal.
*/

//Objetivo 1 - Quando o usuário clicar no botão de 'Veja o trailer', devemos abrir a modal com o vídeo do trailer.
//- Passo 1.1 - Pegar o elemento que representa o botão na tela, usando o JS.
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");

//- Passo 1.3 - Pegar o elemento da modal no JS.
const modal = document.querySelector(".modal");

const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";

//- Passo 1 .2- Identificar quando o usuário clicar no botão.
botaoTrailer.addEventListener("click", () => {
    //- Passo 1.4 - Abrir a modal na tela.
    modal.classList.add("aberto");
});

//Objetivo 2 - Quando o usuário clicar no X devemos fechar a modal.
//- Passo 2.1 - Pegar o elemento de fechar a modal, usando o JS.
const botaoFecharModal = document.querySelector(".fechar-modal");

//- Passo 2.2 - Identificar quando o usuário clicar no X.
botaoFecharModal.addEventListener("click", () => {
    //- Passo 2.3 - Fechar a modal.
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
})


