// ==========================
// AGROFORTE SCRIPT
// ==========================

// Animação suave ao aparecer na tela
const revealElements = document.querySelectorAll(
    '.card, .news-card, .stat-box, .sustain-section'
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });

}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Hover suave nos cards
const cards = document.querySelectorAll(
    '.card, .news-card, .stat-box'
);

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transition = '0.35s';
    });

});


// Botão voltar ao topo (criado automaticamente)
const topButton = document.createElement('button');

topButton.innerText = '↑';
topButton.id = 'topButton';

document.body.appendChild(topButton);

topButton.style.position = 'fixed';
topButton.style.bottom = '30px';
topButton.style.right = '30px';
topButton.style.padding = '14px 18px';
topButton.style.border = 'none';
topButton.style.borderRadius = '50%';
topButton.style.cursor = 'pointer';
topButton.style.fontSize = '22px';
topButton.style.background = '#2e7d32';
topButton.style.color = 'white';
topButton.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
topButton.style.display = 'none';
topButton.style.zIndex = '999';

window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }

});

topButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});


// Fade inicial
document.addEventListener('DOMContentLoaded', () => {

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease';
    });

    revealOnScroll();

});


// Pequeno efeito no título do site
const logo = document.querySelector('.logo');

if (logo) {

    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.05)';
        logo.style.transition = '0.3s';
    });

    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
    });

}