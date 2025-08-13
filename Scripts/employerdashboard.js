    function loadJobs() {
            const jobList = document.getElementById("jobList");
            jobList.innerHTML = "";

            let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

            if (jobs.length === 0) {
                jobList.innerHTML = "<p>No jobs posted yet.</p>";
                return;
            }

            jobs.forEach(job => {
                const jobCard = document.createElement("div");
                jobCard.classList.add("job-card");
                jobCard.innerHTML = `
                    <span>${job.title}</span>
                    <span class="status ${job.active ? 'active' : ''}">
                        ${job.active ? 'Active' : 'Closed'}
                    </span>
                `;
                jobList.appendChild(jobCard);
            });
        }

        document.addEventListener("DOMContentLoaded", loadJobs);