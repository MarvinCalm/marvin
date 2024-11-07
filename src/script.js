const button = document.getElementById('button-bar');
const navBar = document.getElementById('nav-bar');
const headerActive = document.getElementById('header');

function handleClick(event) {
    event.stopPropagation(); // Evita a propagação para o window.onclick
    button.classList.toggle('active');
    navBar.classList.toggle('active');
    headerActive.classList.toggle('active');

    // Bloquear ou desbloquear a rolagem
    if (navBar.classList.contains('active')) {
        document.body.classList.add('no-scroll'); // Bloqueia a rolagem
    } else {
        document.body.classList.remove('no-scroll'); // Desbloqueia a rolagem
    }
}

button.addEventListener('click', handleClick);

window.onclick = function (event) {
    if (
        !event.target.closest('#button-bar') && 
        !event.target.closest('#nav-bar') && 
        navBar.classList.contains('active')
    ) {
        navBar.classList.remove('active');
        button.classList.remove('active');
        headerActive.classList.remove('active');

        document.body.classList.remove('no-scroll'); // Desbloqueia a rolagem
    }
};

 