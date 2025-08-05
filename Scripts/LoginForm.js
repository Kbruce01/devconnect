import { renderSigninForm } from "./SignUpForm.js";

export function renderLoginForm() {
    document.body.innerHTML = '';
    
  
  
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = '/Styles/LoginForm.css';
  document.head.appendChild(cssLink);

    const container = document.createElement('div');
    container.className = 'loginBtn-container';

    container.innerHTML = `
    
         <h1>Welcome Back</h1>
         <p class="login-subtitle">Sign in to your devconnect account</p>

        <form>
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

            <button type="submit">Create Account</button>
        </form>
        <p class="login-link">Don't have an account? <a href="#" id="signupLink">Sign up here</a></p>
    
    `;

    document.body.appendChild(container);
}

export function setUpLoginForm () {
    console.log("heeheheh1")
     document.getElementById("loginBtn").addEventListener('click',  () => {
    renderLoginForm()

    document.getElementById('signupLink').addEventListener('click', () => {
        console.log('rendered')
        renderSigninForm();
    })

});
};



setUpLoginForm();