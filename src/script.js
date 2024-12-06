const button = document.getElementById('button__bar');
const navBar = document.getElementById('nav-bar');
const headerActive = document.getElementById('header');

// Seleciona todos os links dentro do nav-bar
const navLinks = navBar.querySelectorAll('a');

function handleClick(event) {
    event.stopPropagation(); // Evita a propagação para o window.onclick
    button.classList.toggle('active');
    navBar.classList.toggle('active');
    headerActive.classList.toggle('active');

    if (navBar.classList.contains('active')) {
        document.body.classList.add('no-scroll'); // Bloqueia a rolagem
    } else {
        document.body.classList.remove('no-scroll'); // Desbloqueia a rolagem
    }
}

button.addEventListener('click', handleClick);

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
        button.classList.remove('active');
        headerActive.classList.remove('active');
        document.body.classList.remove('no-scroll'); // Desbloqueia a rolagem
    });
});

window.onclick = function (event) {
    if (
        !event.target.closest('#button__bar') && 
        !event.target.closest('#nav-bar') && 
        navBar.classList.contains('active')
    ) {
        navBar.classList.remove('active');
        button.classList.remove('active');
        headerActive.classList.remove('active');
        document.body.classList.remove('no-scroll'); // Desbloqueia a rolagem
    }
};

// SCROLL ->
ScrollReveal().reveal('#header.active', {
    origin: 'top',
    duration: 6000,
    distance: '20%',
    reset: true
});

ScrollReveal().reveal('#button__bar', {
    origin: 'top',
    duration: 3000,
    distance: '100%',
    reset: true
});

ScrollReveal().reveal('#home', {
    duration: 5000,
    reset: true
});
ScrollReveal().reveal('.profile-title h1', {
    origin: 'left',
    duration: 3500,
    distance: '20%',
    reset: true
});
ScrollReveal().reveal('.profile-title h2', {
    delay: 800,
    origin: 'right',
    duration: 5500,
    distance: '30%',
    reset: true
});
ScrollReveal().reveal('.btn-social-grad', {
    origin: 'bottom',
    duration: 7000,
    delay: 500,
    distance: '50%',
    reset: true
});


ScrollReveal().reveal('footer', {
    delay: 3000,
    origin: 'bottom',
    duration: 5500,
    distance: '100%',
    reset: true
});



// ROLL SCROLL

let currentSection = 0;
const sections = document.querySelectorAll('section');

window.addEventListener('wheel', function(event) {
    // Impede o scroll normal
    event.preventDefault();

    // Se o usuário rolar para baixo (scroll down)
    if (event.deltaY > 0) {
        if (currentSection < sections.length - 1) {
            currentSection++;
        }
    }
    // Se o usuário rolar para cima (scroll up)
    else {
        if (currentSection > 0) {
            currentSection--;
        }
    }

    // Faz a rolagem para a seção correspondente
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
});