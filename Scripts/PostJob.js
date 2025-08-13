   document.getElementById("jobForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const job = {
                title: document.getElementById("title").value,
                category: document.getElementById("category").value,
                type: document.getElementById("jobType").value,
                location: document.getElementById("location").value,
                salaryMin: document.getElementById("salaryMin").value,
                salaryMax: document.getElementById("salaryMax").value,
                active: true
            };

            // Save to localStorage
            let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
            jobs.unshift(job); // Add to start
            localStorage.setItem("jobs", JSON.stringify(jobs));

            alert("✅ Job posted successfully!");

            this.reset();
        });