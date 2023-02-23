let slideIndex = 1;

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

const showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll(".page-container section");
    if (n > slides.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = slides.length;
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slides[slideIndex - 1].style.display = "flex";
};

const mediaQuery = window.matchMedia("(max-width: 720px)");
const handleMediaQuery = (e) => {
    if (e.matches) {
        return false
    } else {
        showSlides(slideIndex);
    }
};

mediaQuery.addListener(handleMediaQuery);
handleMediaQuery(mediaQuery);

const pageContainer = document.querySelector(".page-container");
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

const defaultCursorElements = document.querySelectorAll("nav, footer, .slide-section, .page-container a, video");

document.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    let w = document.body.clientWidth;
    const xP = x / w * 100;
    const xX = xP.toFixed(0);

    if (xX >= 0 && xX <= 50) {
        cursor.style.backgroundImage = "url('assets/ui/arrow-left.svg')";
        pageContainer.classList.remove("right");
        pageContainer.classList.add("left");
    } else {
        cursor.style.backgroundImage = "url('assets/ui/arrow-right.svg')";
        pageContainer.classList.remove("left");
        pageContainer.classList.add("right");
    };
});

defaultCursorElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.style.opacity = "0";
    });
    el.addEventListener("mouseleave", () => {
        cursor.style.opacity = "1";
    });
});

pageContainer.addEventListener("click", () => {
    if (pageContainer.classList.contains("left")) {
        plusSlides(-1);
    } else if (pageContainer.classList.contains("right")) {
        plusSlides(1);
    };
});


