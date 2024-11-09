const toggleFAQ = (id) => {
    const faqAnswer = document.getElementById(`faq-${id}`);
    faqAnswer.classList.toggle('hidden');
}