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