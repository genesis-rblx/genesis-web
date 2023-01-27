const pageLoader = document.getElementById('loadingScreen')
window.onload = function()
{

    setTimeout(function(){
        pageLoader.classList.add("anim-out")
    }, 1000)

    setTimeout(() => { pageLoader.style.visibility = 'hidden' }, 1500)
};

window.onbeforeunload = function() {
    pageLoader.style.visibility = 'visible'
    pageLoader.classList.add("anim-in")
}
