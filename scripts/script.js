let btn = document.querySelector(".nav-button");
        let ul = document.querySelector("ul");

        btn.onclick = function() {
            ul.classList.toggle("show");
        };

let storeManagement = document.getElementById("card-store-management");
let digitalWallet = document.getElementById("card-digital-wallet");
let storeRestock = document.getElementById("card-store-restock");

storeManagement.addEventListener("click", () => {
  window.location.href = "/store-management.html"; 
});

digitalWallet.addEventListener("click", () => {
    window.location.href = "/digital-wallet.html"; 
  });

storeRestock.addEventListener("click", () => {
    window.location.href = "/store-restock.html"; 
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