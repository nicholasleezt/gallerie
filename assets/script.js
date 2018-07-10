const toggleOverlay = (overlay) => {
    if (overlay.classList.contains("dropped")) {
        overlay.classList.remove("dropped");
    } else {
        overlay.classList.add("dropped");
    }
}

const sortPhotos = () => {
    let imgNodeList = document.querySelectorAll(".img");
    let imgArray = Array.prototype.slice.call(imgNodeList, 0);
    let mobile = window.innerWidth <= 768 ? true : false;

    imgArray.sort(function (a, b) {
        return a.id - b.id;
    });

    for (let i = 0; i < imgArray.length; i++) {
        if (mobile) {
            if (i < 7) {
                document.querySelector("#col1").appendChild(imgArray[i])
            } else {
                document.querySelector("#col2").appendChild(imgArray[i])
            }
        } else {
            if (i % 2 == 0) {
                document.querySelector("#col2").appendChild(imgArray[i])
            } else {
                document.querySelector("#col1").appendChild(imgArray[i])
            }
        }
    }
}

function hideNav(lastScrollTop, overlay, container) {
    var st = container.scrollTop;
    if (st > lastScrollTop) {
        if (overlay.classList.contains("hidden") == false) {
            overlay.classList.add("hidden");
        }
    } else {
        if (overlay.classList.contains("hidden")) {
            overlay.classList.remove("hidden");
        }
    }
    return st;
}

const throttled = (delay, fn) => {
    let lastCall = 0;
    return function () {
        const now = (new Date).getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn();
    }
}

function throttle(delay, fn) {
    let lastCall = 0;
    return function (args) {
        const now = (new Date).getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(args);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const button = document.querySelector(".dropdown");
    const container = document.querySelector(".container");
    let lastScrollTop = 0;

    getJSONData();

    const resizeEvent = (event) => sortPhotos();
    const resizeHandler = throttled(400, resizeEvent);
    window.addEventListener("resize", resizeHandler);

    const scrollEvent = (event) => {
        let st = hideNav(lastScrollTop, overlay, container);
        lastScrollTop = st <= 0 ? 0 : st;
    };
    const scrollHandler = throttle(400, scrollEvent);
    container.addEventListener("scroll", scrollHandler);

    button.addEventListener('click', (event) => {
        toggleOverlay(overlay);
    });
});