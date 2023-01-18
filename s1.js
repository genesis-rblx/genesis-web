function updateFormDropdown(text) {
    const button = document.getElementById('LaunchVehicleDropdownToggle')
    button.innerHTML = '&nbsp' + text
}

function postFormData() {

    const mandatoryInput = [document.getElementById('Username'), document.getElementById('DiscordUsernameNTag'), document.getElementById('TargetLaunchDate'), document.getElementById('PayloadReadyDate'), document.getElementById('Inclination'), document.getElementById('Altitude')]

    
    var xhr = new XMLHttpRequest();
  
    
    xhr.open("POST", "https://genesiswebsiteservice.shaperorblx.repl.co/", true);
    
    
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }

    var formData = {};
        
    mandatoryInput.forEach(function(item, index){
        formData[item.id] = item.value
    })

    
    xhr.send(JSON.stringify(formData));
}