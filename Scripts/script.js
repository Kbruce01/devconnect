document.addEventListener("DOMContentLoaded", () => {
  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Remote" },
    { title: "Backend Engineer", company: "Meta", location: "USA" },
     { title: "UI/UX Designer", company: "Apple", location: "Hybrid" },
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