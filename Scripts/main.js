import { setUpSignupForm, hideModal, showModal } from "./SignUpForm.js";


// Theme toggle logic for DevConnect
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn');
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  let darkMode = false;

  toggleBtn.addEventListener('click', function() {
    darkMode = !darkMode;
    if (darkMode) {
      body.style.background = '#181a20';
      body.style.color = 'rgba(255, 255, 255, 0.8)';
      toggleBtn.querySelector('i').style.color = '#ffe066';
      // Navbar dark mode
      if (navbar) {
        navbar.style.background = '#2b2c30ff';
        navbar.style.color = '#f3f2f3';
      }
      // Modal backgrounds
      const modals = document.querySelectorAll('#signupModal, #loginModal');
      modals.forEach(modal => {
        modal.style.background = 'linear-gradient(120deg, #23243a 0%, #181a20 100%)';
        modal.style.color = '#f3f2f3';
      });
    } else {
      body.style.background = '';
      body.style.color = '';
      toggleBtn.querySelector('i').style.color = '';
      if (navbar) {
        navbar.style.background = '';
        navbar.style.color = '';
      }
      const modals = document.querySelectorAll('#signupModal, #loginModal');
      modals.forEach(modal => {
        modal.style.background = 'linear-gradient(120deg, #f3f2f3 0%, #eaf1ff 100%)';
        modal.style.color = '';
      });
    }
  });
});