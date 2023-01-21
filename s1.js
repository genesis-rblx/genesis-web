function updateFormDropdown(text) {
    const button = document.getElementById('LaunchVehicleDropdownToggle')
    button.innerHTML = '&nbsp' + text
}

function postFormData() {

    const mandatoryInput = [document.getElementById('Username'), document.getElementById('DiscordUsernameNTag'), document.getElementById('TargetLaunchDate'), document.getElementById('PayloadReadyDate'), document.getElementById('Inclination'), document.getElementById('Altitude')]

    
    var xhr = new XMLHttpRequest();
  
    
    xhr.open("POST", "https://genesiswebsiteservice.shaperorblx.repl.co/", true);

    var formData = {};
        
    mandatoryInput.forEach(function(item, index){
        formData[item.id] = item.value
    })

    
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
}