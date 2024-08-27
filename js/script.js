function toggleDescription(container) {
    const question = container.closest('.faq__question');
    
    if (question.classList.contains('active')) {
        question.classList.remove('active');
    } else {
        question.classList.add('active');
    }
}