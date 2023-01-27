window.addEventListener('load', function(){
    console.log('run')
    const CoverImage = document.getElementById('cover-image')
    const Navbar = document.getElementById('navbar')

    var imgBoundsCrossed = (CoverImage.offsetHeight + Navbar.offsetHeight) > document.body.clientHeight

    if (imgBoundsCrossed) {
        const Text = document.getElementById("dsized-responsive")

        Text.style.top = String(parseInt(document.body.clientHeight/2 - Navbar.offsetHeight)) + "px";
    }
})
