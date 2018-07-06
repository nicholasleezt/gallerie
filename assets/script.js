let toggleOverlay = (overlay) => {
    if (overlay.classList.contains("dropped")) {
        overlay.classList.remove("dropped");
    } else {
        overlay.classList.add("dropped");
    }
}

//let mobileHero = body => body.clientWidth < 768 ? document.querySelector(".hero").setAttribute('src','assets/photos/photo_7_md.jpg') : document.querySelector(".hero").setAttribute('src','assets/photos/photo_7_xl.jpg');

document.addEventListener("DOMContentLoaded", function (event) {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const button = document.querySelector(".dropdown");

    //mobileHero(body);

    button.addEventListener('click', (event) => {
        toggleOverlay(overlay);
    });

    new ScrollReveal();
    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.img', {
        duration: 500,
        viewFactor: 0.2,
        container:document.querySelector('.container')
    });
});