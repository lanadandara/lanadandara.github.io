let scrollButton = document.getElementById('contact-button');

  scrollButton.addEventListener('click', () => {
    scrollToLastDiv();
  });
  
  function scrollToLastDiv() {
    const lastDiv = document.getElementById('footer-contact');
    lastDiv.scrollIntoView({ behavior: 'smooth' });
  };
