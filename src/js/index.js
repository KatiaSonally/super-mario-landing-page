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

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})
