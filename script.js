const texto = "Sou Desenvolvedora Front-End e Designer.";
const elemento = document.getElementById("typing-text");
let index = 0;
let apagando = false;

function digitar() {
    if (!apagando) {
    if (index < texto.length) {
        elemento.innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, 100);
    } else {
        setTimeout (() => {
            apagando = true;
            digitar();
        }, 2000);
    }
} else {
    if (index > 0) {
        elemento.innerHTML = texto.substring(0, index - 1);
        index --;
        setTimeout(digitar, 50);
    } else {
        apagando = false;
        setTimeout(digitar, 500);
    }
}
}

window.onload = digitar;

ScrollReveal().reveal('.intro-content', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('#sobre h2, .sobre-conteudo', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 300
});

ScrollReveal().reveal('#projetos h2, .projetos-grid', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 300
    });

    ScrollReveal().reveal('#contato h2, #contato p, .redes-sociais', {
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 300
    });

    const botaoMenu = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
        });