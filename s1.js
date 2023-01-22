var agreementPrimary = false;
var agreementSecondary = false;

function updateFormDropdown(text, id) {
    const button = document.getElementById(id)
    button.innerHTML = '&nbsp' + text
}

function postFormData() {

    const mandatoryInput = [document.getElementById('Username'), document.getElementById('DiscordUsernameNTag'), document.getElementById('TargetLaunchDate'), document.getElementById('PayloadReadyDate'), document.getElementById('Inclination'), document.getElementById('Altitude')]
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://genesiswebsiteservice.shaperorblx.repl.co/", true);

    var formData = {};
    var validationPassed = true;

    mandatoryInput.forEach(function(item, index){
        if (!item.validity.valueMissing) {
            formData[item.id] = item.value
        } else {
            console.warn("Invalid input")
            validationPassed = false;
        }
    })

    if (!agreementPrimary || !agreementSecondary) {
        validationPassed = false;
    }

    if (!validationPassed) {
        document.getElementById("errorMessagePresenter").innerHTML = "INCOMPLETE FORM"
        return;
    }

    
    xhr.send(JSON.stringify(formData));
    
    window.location.href = "index.html"
}

function updateAgreementButtonAnim(divid, textid, buttonid) {
    const div = document.getElementById(divid)
    const text = document.getElementById(textid)
    const button = document.getElementById(buttonid)

    button.style.borderColor = "rgb(255, 111, 111)";
    button.style.backgroundColor = "rgb(255, 111, 111)";
    text.style.color = "rgb(255, 79, 79)";
    div.style.borderColor= "rgb(255, 111, 111)";

    if (divid == "da-1") {
        agreementPrimary = true;
    } else if (divid == "da-2") {
        agreementSecondary = true
    }
}