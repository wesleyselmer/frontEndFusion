const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let fotoAtual = 0;

function carrossel () {
    fotoAtual ++;

    if(fotoAtual > img.length - 1) {
        fotoAtual = 0;
    }
    if(window.innerWidth > 500) {
        imgs.style.transform = `translateX(${-fotoAtual * 267}px)`;
    } else {
        imgs.style.transform = `translateX(${-fotoAtual * 230}px)`;
    }
}

setInterval(carrossel, 1800);