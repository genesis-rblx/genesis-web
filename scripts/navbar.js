document.getElementById("navbar-logo").addEventListener("click", function(){

    setTimeout(function(){window.location.href = "index.html"}, 1500)
    window.dispatchEvent( new Event('beforeunload'));
    
});