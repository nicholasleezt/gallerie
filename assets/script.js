let getScrollBarWidth = body => {
    const currentWidth = body.clientWidth;
    body.classList.add('active');
    let scrollBarWidth = body.clientWidth - currentWidth;
    body.classList.remove('active');
    if (scrollBarWidth > 0) {
        body.style.marginLeft = scrollBarWidth + "px";
    }
    return scrollBarWidth;
}

let toggleOverlay = (scrollBarWidth, overlay, body) => {
    if (body.classList.contains("active")) {
        body.classList.remove("active");
        overlay.classList.remove("dropped");
    } else {
        body.classList.add("active");
        overlay.classList.add("dropped");
        if (scrollBarWidth > 0) {
            body.style.marginLeft = scrollBarWidth + "px";
        }
    }
}

let mobileHero = body => body.clientWidth < 768 ? document.querySelector(".hero").setAttribute('src','assets/photos/photo_7_md.jpg') : document.querySelector(".hero").setAttribute('src','assets/photos/photo_7_xl.jpg');

document.addEventListener("DOMContentLoaded", function (event) {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const button = document.querySelector(".dropdown");

    setInterval(getScrollBarWidth(body), 100);

    let scrollBarWidth = getScrollBarWidth(body);

    mobileHero(body);

    button.addEventListener('click', (event) => {
        toggleOverlay(scrollBarWidth, overlay, body);
    });

    new ScrollReveal();
    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.img', {
        duration: 500,
        viewFactor: 0.3
    });
});