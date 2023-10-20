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


