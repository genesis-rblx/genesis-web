const Viewer = document.getElementById("viewer")
const ViewerClose = document.getElementById("viewer-closebutton")

const ViewerUsernameText = document.getElementById("viewer-username")
const ViewerDescriptionText = document.getElementById("viewer-description")
const ViewerImage = document.getElementById("viewer-image")

const DescriptionMap = {
    Ron_1imited: "Ron_1imited was appointed Board of Directors of Genesis Space and Chief Executive Officer in 2022 when he founded the company. He joined the Board of Directors with a year of experience working in Ro-Space executive management teams, most notably Astra Space under Rio_1imited's leadership where he worked as a Chief Operations Officer.Along with the rest of the team, Ron_1imited set the base plans of the Genesis Space company and led the development team throughout the early months of 2023 aswell.Ron_1imited resigned from the Chief Executive Officer role in April 2023 giving leadership of the company to PERISAKLARSSON after several discussions and meetings with the Board of Directors, although he currently still remains in the team as a Board of Directors member and Launch Systems Engineer.",
    PERISAKLARSSON: "PERISAKLARSSON (nicknamed 'Isak'), initially the Chief Operations Officer, he succeeded Ron_1imited as the new CEO of the corporation in early 2023. Along with Ron_1imited, he co-founded Genesis Space and contributed towards development and administration-related work. He is one of the core employees of Genesis Space, and holds the ultimate administrative power in the corporation. PERISAKLARSSON is well-known within the RO-Space community, holding several important positions in other RO-Space organizations and maintaining good relations between Genesis Space and other groups.",
    Solopia1: "Solopia1 (nicknamed 'Solo'), serves as the Chief of Human Resources, and the Programming Department. He is the only C-Executive in Genesis Space to serve as the head of two departments simultaneously. As the sole programmer, he is the developer of the Genesis Space website, including having created a few in-game assets for Genesis Space in the past. A controversial figure, Solopia1 has recieved allegations of moonlighting and favouritism by certain employees.",
    mattyd8452: "mattyd8452 (nicknamed 'Cruiser'), is the Chief Technical Officer of Genesis Space. Although initially being active in discussions and development, Cruiser has remained mostly inactive in the recent time (due to his personal life), occasionally joining conversations among the directors. A responsible employee, Cruiser possesses extensive technical knowledge and a considerable understanding in scripting and programming alike. Despite his inactivity, he remains as one of the directors, and is still respected among employees and executives.",
    ItsAervial: "ItsAervial (nicknamed 'Aervial'), has served as one of Genesis's founding members. As a CMO, he is responsible for tasks related to the promotion of the Genesis organization and managing relations with the community.",
    GTAVandmore: "Considered to be one of our most valued employees, GTAVandmore has served as the head of the Avionics Department, and has played a significant role in facilitating the development of our core in-game systems. He is a Chief Engineer, and is widely respected among the executives and employees alike. His contributions towards the corporation and the assets created by him, and crucial to the development of the organization.\nAn experienced scripter, the assets and services provided by him, are of a exceptional quality. As an individual, GTAVandmore is hardworking and constantly motivated. He does not present any sort of reluctance towards facing a task, should there be a challenge associated with.\nThe rare, positive traits and qualities exhibited by GTAVandmore as observed by several employees, makes him one of the finest employees to ever join the organization."
}

const ImagePathmap = {
    Ron_1imited: "../assets/team_images/Osman.png",
    PERISAKLARSSON: "../assets/team_images/Isak.png",
    Solopia1: "../assets/team_images/Solopia1.png",
    mattyd8452: "../assets/team_images/Cruiser.png",
    ItsAervial: "../assets/team_images/Aervial.png",
    GTAVandmore: "../assets/team_images/Popcat.png"
}

function close() {
    Viewer.style.zIndex = 3
    Viewer.style.opacity = 0;
}

ViewerClose.addEventListener('click', close)

function display(Username) {
    ViewerUsernameText.innerHTML = Username
    ViewerDescriptionText.innerHTML = DescriptionMap[Username]
    ViewerImage.src =ImagePathmap[Username]

    Viewer.style.zIndex = 5
    Viewer.style.opacity = 1
}

