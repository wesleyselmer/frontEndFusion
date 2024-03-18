const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let fotoAtual = 0;

function carrossel () {
    fotoAtual ++;

    if(fotoAtual > img.length - 1) {
        fotoAtual = 0;
    }

    imgs.style.transform = `translateX(${-fotoAtual * 267}px)`;
}

setInterval(carrossel, 1800);