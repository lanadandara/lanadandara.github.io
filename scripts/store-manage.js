let scrollButton = document.getElementById('contact-button');

  scrollButton.addEventListener('click', () => {
    scrollToLastDiv();
  });
  
  function scrollToLastDiv() {
    const lastDiv = document.getElementById('footer-contact');
    lastDiv.scrollIntoView({ behavior: 'smooth' });
  };



  // BACK TO TOP

    // Get a reference to the button and the text
    const scrollToTopButton = document.getElementById('scrollToTop');
    const scrollToTopText = document.getElementById('scrollToTopText');

    // Add a click event listener to the text
    scrollToTopText.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor link behavior
      scrollToTop(); // Call the scroll function
    });

    // Add a click event listener to the button
    scrollToTopButton.addEventListener('click', function () {
      scrollToTop(); // Call the scroll function
    });

    // Function to smoothly scroll to the top of the page
    function scrollToTop() {
      // Scroll to the top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Show the button when scrolling down and hide it when at the top
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });