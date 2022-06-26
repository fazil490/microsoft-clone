const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle)