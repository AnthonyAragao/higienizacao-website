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


// Close mobile menu when click on link
const linksMenuMobile = document.querySelectorAll('.header__mobile-menu__item');
linksMenuMobile.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.header__mobile-menu').classList.remove('active');
    });
});
