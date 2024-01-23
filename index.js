// No framework was used as I didn't had a neccessity 
var i = 0;
var types = [];

document.addEventListener('DOMContentLoaded', function () {
    var uploadButton = document.querySelector(".upload");
    uploadButton.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("Upload button clicked");
        jobBars();
        console.log("After calling jobBars");
    });

    var filterDropdown = document.getElementById("filter");
    filterDropdown.addEventListener('change', function () {
        console.log("Filter dropdown changed");
        filterJobs();
    });

    function jobBars() {
        var jobInfoData = document.querySelector(".jobInfo").value;
        var jobTypeData = document.querySelector("#job-options").value;
        var jobStipendData = document.querySelector("#stipend").value;
        const newElement = document.createElement('div');
        newElement.className = "job-des";
        newElement.innerHTML = `
            <div class="job-info job-content"><span class="jobHeader">${jobTypeData}</span></div>
            <div class="job-type"><span class="ges">What it is all about? </span>${jobInfoData}</div>
            <div class="job-stipend"><span class="ges">Stipend (in INR): </span>${jobStipendData}</div>
        `;
        if (jobTypeData == "select") {
            alert("Enter the type of the job");
        } else if (jobInfoData == "") {
            alert("Enter the description of the job");
        } else if (jobStipendData == "") {
            alert("Enter the stipend/salary for the job");
        } else {
            types.push(newElement);
            displayJobs();
        }
    }

    function filterJobs() {
        console.log("Inside filterJobs function");
        displayJobs();
    }

    function displayJobs() {
        console.log("Inside displayJobs function");
        var typeOption = document.getElementById("filter").value;
        const sectionVar = document.querySelector(".jobsHorScroll");

        // Remove all existing job elements
        while (sectionVar.firstChild) {
            sectionVar.removeChild(sectionVar.firstChild);
        }

        for (let j = 0; j < types.length; j++) {
            if (typeOption === 'All' || types[j].querySelector('.jobHeader').textContent === typeOption) {
                sectionVar.appendChild(types[j].cloneNode(true));
                types[j].style.left = i * 10 + "%";
                i = i + 1;
            }
        }
    }
});

