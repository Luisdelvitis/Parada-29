
// script.js
const slideCarrossel = document.querySelector('.slide-carrossel');
const imagens = document.querySelectorAll('.slide-carrossel img');

let contador = 0;
const tamanho = imagens[0].clientWidth;

document.querySelector('.proximo').addEventListener('click', () => {
    if (contador >= imagens.length - 1) return;
    slideCarrossel.style.transition = 'transform 0.4s ease-in-out';
    contador++;
    slideCarrossel.style.transform = 'translateX(' + (-tamanho * contador) + 'px)';
});

document.querySelector('.anterior').addEventListener('click', () => {
    if (contador <= 0) return;
    slideCarrossel.style.transition = 'transform 0.4s ease-in-out';
    contador--;
    slideCarrossel.style.transform = 'translateX(' + (-tamanho * contador) + 'px)';
});

slideCarrossel.addEventListener('transitionend', () => {
    if (imagens[contador].id === 'cloneFinal') {
        slideCarrossel.style.transition = 'none';
        contador = imagens.length - 2;
        slideCarrossel.style.transform = 'translateX(' + (-tamanho * contador) + 'px)';
    }
    if (imagens[contador].id === 'cloneInicial') {
        slideCarrossel.style.transition = 'none';
        contador = imagens.length - contador;
        slideCarrossel.style.transform = 'translateX(' + (-tamanho * contador) + 'px)';
    }
});
