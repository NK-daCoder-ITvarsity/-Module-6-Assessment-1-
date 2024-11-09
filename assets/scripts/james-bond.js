document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      // Smooth scroll or other interaction on button clicks
      window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
});