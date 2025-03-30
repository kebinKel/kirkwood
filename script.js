let bar = document.querySelector('.fa-bars');
let nav = document.querySelector('nav');

bar.addEventListener('click', ()=> {
    nav.classList.toggle('open')
})