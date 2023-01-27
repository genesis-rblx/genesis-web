const pageLoader = document.getElementById('loadingScreen')
window.onload = function()
{

    setTimeout(function(){
        pageLoader.classList.add("anim-out")
    }, 1000)

    setTimeout(() => {pageLoader.style.display = 'none'}, 1500)
    
};
