let toggleOverlay = (overlay) => {
    if (overlay.classList.contains("dropped")) {
        overlay.classList.remove("dropped");
    } else {
        overlay.classList.add("dropped");
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const button = document.querySelector(".dropdown");

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