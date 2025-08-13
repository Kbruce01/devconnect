
// Modal logic for signup/login
export function showModal(type) {
  document.getElementById('modalOverlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
  if (type === 'signup') {
    document.getElementById('signupModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
  } else {
    document.getElementById('signupModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'block';
  }
}

function hideModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  document.getElementById('signupModal').style.display = 'none';
  document.getElementById('loginModal').style.display = 'none';
  document.body.style.overflow = '';
};

export function setUpSignupForm() {
  // Open signup modal
  document.getElementById('signupBtn').addEventListener('click', () => {
    showModal('signup');
    window.history.pushState({page: 'signup'}, '', '#signup');
  });
  // Open login modal
  document.getElementById('loginBtn').addEventListener('click', () => {
    showModal('login');
    window.history.pushState({page: 'login'}, '', '#login');
  });
  // Switch to login from signup modal link
  document.getElementById('showLoginLink').addEventListener('click', (e) => {
    e.preventDefault();
    showModal('login');
    window.history.pushState({page: 'login'}, '', '#login');
  });
  // Switch to signup from login modal link
  document.getElementById('showSignupLink').addEventListener('click', (e) => {
    e.preventDefault();
    showModal('signup');
    window.history.pushState({page: 'signup'}, '', '#signup');
  });
  
  
  // Close modals
  ['closeSignupModal', 'closeLoginModal', 'modalOverlay'].forEach(id => {
   document.getElementById(id)?.addEventListener('click', hideModal);
  });
  
  
  // Handle browser back button
  window.addEventListener('popstate', (event) => {
    if (!event.state || !event.state.page) {
      hideModal();
    } else if (event.state.page === 'signup') {
      showModal('signup');
    } else if (event.state.page === 'login') {
      showModal('login');
    }
  });
};

setUpSignupForm();