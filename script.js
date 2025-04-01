let bar = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-close');
let nav = document.querySelector('.links');
let link = document.querySelectorAll('.li');
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

dim.addEventListener('click', ()=> {
    
    bar.classList.remove('close')
    close.classList.remove('open')
    nav.classList.remove('open')
    dim.classList.remove('open')
})


link.forEach((e)=> {
    e.addEventListener('click', ()=> {
        
        bar.classList.remove('close')
        close.classList.remove('open')
        nav.classList.remove('open')
        dim.classList.remove('open')
    })
})

