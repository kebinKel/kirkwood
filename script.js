let bar = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-close');
let nav = document.querySelector('.links');
let dim = document.querySelector('.dim');

bar.addEventListener('click', ()=> {
    
    bar.classList.add('close')
    close.classList.add('open')
    nav.classList.add('open')
    dim.classList.add('open')
})

close.addEventListener('click', ()=> {
    
    bar.classList.remove('close')
    close.classList.remove('open')
    nav.classList.remove('open')
    dim.classList.remove('open')
})