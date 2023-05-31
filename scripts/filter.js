const DepartmentFilter = document.getElementById("FilterDepartment")
const LocationFilter = document.getElementById("FilterLocation")

const ApplicationList = document.getElementById("applications")

const Observer = new MutationObserver(() => {
    const Department = (DepartmentFilter.innerText.trim() != "Department") ? DepartmentFilter.innerText.trim() : false
    const Location = (LocationFilter.innerText.trim() != "Location") ? LocationFilter.innerText.trim() : false

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

        if (show) {
            if (Row.classList.contains("d-none")) {
                Row.classList.remove("d-none")
            }
        } else {
            Row.classList.add("d-none")
        }
        

        /*
        if (Department) {
            if (ApplicationList.children[i].children[2].firstElementChild.innerText.trim() != Department) {
                if (!ApplicationList.children[i].classList.contains("d-none")) {
                    ApplicationList.children[i].classList.add("d-none")
                }
            } else {
                if (ApplicationList.children[i].classList.contains("d-none")) {
                    ApplicationList.children[i].classList.remove("d-none")
                }
            }
        } else {
            if (ApplicationList.children[i].classList.contains("d-none")) {
                ApplicationList.children[i].classList.remove("d-none")
            }
        }

        if (Location) {

            if (Department) {
                if (ApplicationList.children[i].children[2].firstElementChild.innerText.trim() != Department)
            }

            if (ApplicationList.children[i].children[1].firstElementChild.innerText.trim() != Location) {
                if (!ApplicationList.children[i].classList.contains("d-none")) {
                    ApplicationList.children[i].classList.add("d-none")
                }
            } else {
                if (!ApplicationList.children[i].classList.contains("d-none")) {
                    ApplicationList.children[i].classList.remove("d-none")
                }
            }
        } else {
            if (ApplicationList.children[i].classList.contains("d-none")) {
                ApplicationList.children[i].classList.remove("d-none")
            }
        }
        */
    }

});

Observer.observe(DepartmentFilter, { subtree: true, childList: true })
Observer.observe(LocationFilter, { subtree: true, childList: true })