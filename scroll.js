let slideIndex = 1;
const mediaQuery = window.matchMedia("(max-width: 720px)");

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll(".page-container section");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

const handleMediaQuery = (e) => {
    if (e.matches) {
        return false
    } else {
        showSlides(slideIndex);
    }
};

mediaQuery.addListener(handleMediaQuery);
handleMediaQuery(mediaQuery);

const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");

btnLeft.addEventListener("click", () => {
    plusSlides(-1);
});

btnRight.addEventListener("click", () => {
    plusSlides(1);
});;



// btnLeft.addEventListener("touchend", (e) => {
//     e.preventDefault();
//     plusSlides(-1);
// });

// btnRight.addEventListener("touchend", (e) => {
//     e.preventDefault();
//     plusSlides(1);
// });


