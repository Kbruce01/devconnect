 import { renderLoginForm } from './LoginForm.js'

 export function renderSigninForm() {

      document.body.innerHTML = '';

  
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = '/Styles/SignUpForm.css';
  document.head.appendChild(cssLink);

  const container = document.createElement('div');
  container.className = 'signup-container';

  container.innerHTML = `
    <h1>Create Account</h1>
    <p class="subtitle">Let devconnect help you find your dream job</p>

    <form>
      <label>Full Name*</label>
      <div class="input-group">
        <span class="icon"></span>
        <input type="text" placeholder="Enter your full name" required />
      </div>

      <label>Email Address*</label>
      <div class="input-group">
        <span class="icon"></span>
        <input type="email" placeholder="Enter a valid email" required />
      </div>

      <label>Password*</label>
      <div class="input-group">
        <span class="icon"></span>
        <input type="password" placeholder="Create a strong password" required />
      </div>

      <label>Profile (optional)</label>
      <div class="input-group">
        <span class="icon"></span>
        <input type="file" />
      </div>

      <label>I am a*</label>
      <div class="options">
        <label class="option"><input type="radio" name="role" required /> Job Seeker</label>
        <label class="option"><input type="radio" name="role" required /> Employer</label>
      </div>

      <button type="submit">Create Account</button>
    </form>

    <p class="login-link">Already have an account? <a id="signinLink">Sign in here</a></p>
  `;

  document.body.appendChild(container);
 };


export function setUpSignupForm () {
  document.getElementById("signupBtn").addEventListener("click", () => {
    renderSigninForm();
  

  document.getElementById('signinLink').addEventListener('click', (e) => {
    renderLoginForm();
  });


});
};

setUpSignupForm();