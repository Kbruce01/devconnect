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
        navbar.style.background = '#23243a';
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

/*document.addEventListener("DOMContentLoaded", () => {
  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Remote" },
    { title: "Backend Engineer", company: "Meta", location: "USA" },
    { title: "UI/UX Designer", company: "Apple", location: "Hybrid" },
    { title: "Full-Stack Developer", company: "Devops", location: "Remote"},
  ];

  const container = document.getElementById("jobsContainer");

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} - ${job.location}</p>
      <button>Apply</button>
    `;
    container.appendChild(div);
  });
}); 

*/