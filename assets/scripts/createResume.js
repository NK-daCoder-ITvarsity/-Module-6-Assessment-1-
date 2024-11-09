const createResumeBtn = document.getElementById("create-resume-btn");
const createResumeCancleBtn = document.getElementById("create-resume-cancle-button");
const createResumeForm = document.getElementById("create-resume-form");

const jobListContainer = document.getElementById("job-list");
const jobListItems = document.querySelectorAll(".ul-job-list-items");
const searchBar = document.getElementById("search-bar");

const filterJobs = (event) => {
    // getting input from search  bar
    const searchTerm = event.target.value.toLowerCase();
    // console.log(searchTerm);

    // loop through each job item
    jobListItems.forEach((job) => {
        // getting job title in loweercase
        const jobTitle = job.dataset.title.toLowerCase();
        // console.log(jobTitle);

        // check if job title includes the search term which is the input 
        // user types into the search bar

        if (jobTitle.includes(searchTerm)) {
            job.classList.remove("hidden");
        }
        else {
            job.classList.add("hidden");
        }
    });
}

createResumeBtn.addEventListener("click", () => {
    createResumeForm.classList.remove("hidden");
});

createResumeCancleBtn.addEventListener("click", () => {
    createResumeForm.classList.add("hidden");
});

/* Search Filter */
searchBar.value = "";
searchBar.addEventListener("input", filterJobs);