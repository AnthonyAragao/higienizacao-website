function toggleDescription(container) {
    const question = container.closest('.faq__question');
    question.classList.toggle('active');
}

function toggleMobileMenu() {
    const menu = document.querySelector('.header__mobile-menu');
    const body = document.querySelector('body');
    menu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
}