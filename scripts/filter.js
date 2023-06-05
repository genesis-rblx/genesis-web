const DepartmentFilter = document.getElementById("FilterDepartment")
const LocationFilter = document.getElementById("FilterLocation")
const JobFilter = document.getElementById("FilterJobName")
const ApplicationList = document.getElementById("applications")

function callback() {
    const Department = (DepartmentFilter.innerText.trim() != "Department") ? DepartmentFilter.innerText.trim() : false
    const Location = (LocationFilter.innerText.trim() != "Location") ? LocationFilter.innerText.trim() : false
    const Job = JobFilter.value.length > 0 ? JobFilter.value.trim() : false

    for (let i = 0; i < ApplicationList.children.length; i++) {

        var show = true;

        const Row = ApplicationList.children[i]
        
        if (Department) {
            if (Row.children[2].firstElementChild.innerText.trim() != Department) {
                show = false;
            }
        }
        
        if (Location) {
            if (Row.children[1].firstElementChild.innerText.trim() != Location) {
                show = false;
            }
        }

        if (Job) {
            if (!(Row.children[0].firstElementChild.innerText.toLowerCase().match(Job.toLowerCase()))) {
                show = false
            }
        }

        if (show) {
            if (Row.classList.contains("d-none")) {
                Row.classList.remove("d-none")
            }
        } else {
            Row.classList.add("d-none")
        }
    }
}

const Observer = new MutationObserver(callback);

Observer.observe(DepartmentFilter, { subtree: true, childList: true })
Observer.observe(LocationFilter, { subtree: true, childList: true })
JobFilter.addEventListener('input', callback);