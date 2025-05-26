
window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('main > section, .quem-somos-section, .avaliacoes, .contato, .avaliacao, footer.rodape').forEach((el) => {
        el.style.opacity = '';
    });

    document.querySelectorAll('.logo, .logo-pet-esq, .logo-pet-dir').forEach((el) => {
        el.style.opacity = '';
    });
});


function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(function (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
});
