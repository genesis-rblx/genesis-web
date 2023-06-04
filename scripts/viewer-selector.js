const Viewer = document.getElementById("viewer")
const ViewerClose = document.getElementById("viewer-closebutton")

const ViewerUsernameText = document.getElementById("viewer-username")
const ViewerDescriptionText = document.getElementById("viewer-description")

const DescriptionMap = {
    Ron_1imited: "Ron_1imited was appointed Board of Directors of Genesis Space and Chief Executive Officer in 2022 when he founded the company. He joined the Board of Directors with a year of experience working in Ro-Space executive management teams, most notably Astra Space under Rio_1imited's leadership where he worked as a Chief Operations Officer.Along with the rest of the team, Ron_1imited set the base plans of the Genesis Space company and led the development team throughout the early months of 2023 aswell.Ron_1imited resigned from the Chief Executive Officer role in April 2023 giving leadership of the company to PERISAKLARSSON after several discussions and meetings with the Board of Directors, although he currently still remains in the team as a Board of Directors member and Launch Systems Engineer.",
    PERISAKLARSSON: "isak is great",
    Solopia1: "im slow at making websites",
    mattyd8452: "hes in college"
}

function close() {
    Viewer.style.opacity = 0;
}

ViewerClose.addEventListener('click', close)

function display(Username) {
    ViewerUsernameText.innerHTML = Username
    ViewerDescriptionText.innerHTML = DescriptionMap[Username]

    Viewer.style.opacity = 1
}

