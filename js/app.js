const titre = document.querySelectorAll('h1 span');
const ss_titre = document.querySelector('h4');
const btn = document.querySelector('.btn');
const infos = document.querySelectorAll('.row .col');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titre, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .from(ss_titre, 0.6, {transform: "scale(0)", ease: "power2.out"}, '-=1')
    .from(btn, 1, {opacity: 0, ease: "power2.out"}, 0.5, '-=2')
    .staggerFrom(infos, 1.5, {right: -3000, ease: "power2.out"}, 0.3, '-=2');
        
    
    TL.play();
})

const Menubtn = document.querySelector('.menu-btn');
const Nav = document.querySelector('.navigation');

Menubtn.addEventListener('click', () => {
    Menubtn.classList.toggle('active');
    Nav.classList.toggle('active');
});