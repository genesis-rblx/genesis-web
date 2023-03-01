const pageLoader = document.getElementById('loadingScreen')
const loadIconRenderer = document.createElement("canvas")
const ctx = loadIconRenderer.getContext('2d')

loadIconRenderer.height = document.body.scrollHeight
loadIconRenderer.width = document.body.scrollWidth

pageLoader.appendChild(loadIconRenderer)

var increment = 0

function renderIcon() {
    ctx.clearRect(0, 0, loadIconRenderer.width, loadIconRenderer.height);

    const radius = Math.min(document.body.clientWidth, document.body.clientHeight)/3

    const gradient = ctx.createLinearGradient(document.body.clientWidth/2 - radius - 600, 0, document.body.clientWidth/2 + radius + 600, 0);
    gradient.addColorStop(0.0, "black")
    gradient.addColorStop(increment % 1.0, "red")
    gradient.addColorStop(1.0, "black")

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;

    ctx.beginPath()
    ctx.arc(document.body.clientWidth/2, document.body.clientHeight/2, radius, 0, 2 * Math.PI);
    ctx.stroke()

    increment += 0.05;

    requestAnimationFrame(renderIcon)
}

window.onpageshow = function()
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

requestAnimationFrame(renderIcon)