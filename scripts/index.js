let storeManagement = document.getElementById("card-store-management");
let digitalWallet = document.getElementById("card-digital-wallet");
let storeRestock = document.getElementById("card-store-restock");
let workshop = document.getElementById("card-workshop");

storeManagement.addEventListener("click", () => {
  window.location.href = "/user-biometry.html"; 
});

digitalWallet.addEventListener("click", () => {
    window.location.href = "/digital-wallet.html"; 
  });

storeRestock.addEventListener("click", () => {
    window.location.href = "/store-management.html"; 
  });

  workshop.addEventListener("click", () => {
    window.location.href = "/workshops.html"; 
  });



let scrollButton = document.getElementById('contact-button');

  scrollButton.addEventListener('click', () => {
    scrollToLastDiv();
  });
  
  function scrollToLastDiv() {
    const lastDiv = document.getElementById('footer-contact');
    lastDiv.scrollIntoView({ behavior: 'smooth' });
  };


  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    elements.forEach((el) => {
      observer.observe(el);
    });
  });


  document.querySelectorAll(".work-img").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
  
      card.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale(1.02)`;
      card.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.15)`;
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
      card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });
  });
  