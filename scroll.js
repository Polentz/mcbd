// const scrollFunctions = () => {
//     window.addEventListener("scroll", revealOnScroll);
//     // hideOnScroll(contactElement);
//     // hideOnScroll(bureauElement);
// }

// const revealOnScroll = () => {
//     const reveals = document.querySelectorAll(".reveal");
//     for (let i = 0; i < reveals.length; i++) {
//         const windowHeight = window.innerHeight;
//         const elementTop = reveals[i].getBoundingClientRect().top;
//         const elementVisible = 100;

//         if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("appear");
//         } else {
//             reveals[i].classList.remove("appear");
//         }
//     }
// }

// const hideOnScroll = (element) => {
//     window.addEventListener("scroll", () => {
//         if (element.classList.contains("open")) {
//             element.classList.remove("open");
//         }
//     });

// }

// scrollFunctions();

// const pageInfo = document.querySelector(".filters--page");
// const section = document.querySelector(".info-section");

// const inViewport = (element) => {
//     const elementRect = element.getBoundingClientRect();
//     return (elementRect.top < innerHeight && elementRect.bottom > 0);
// };

// window.addEventListener("scroll", () => {
//     if (inViewport(section)) {
//         pageInfo.style.position = "absolute";
//     } else {
//         pageInfo.style.position = "fixed";
//     }
// });

// const history = document.getElementById("history-js");
// window.onload = () => {
//     history.addEventListener("click", () => {
//         e.preventDefault();
//         if (history.state == null) {
//             const url = history.getAttribute("href");
//             window.history.pushState(state, '', url);
//             // document.location.href = url;
//         } else if (history.state != null) {
//             window.history.back();
//         }
//     })
// }


let slideIndex = 1;

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
    slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);

const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");

btnLeft.addEventListener("click", () => {
    plusSlides(-1);
});

btnRight.addEventListener("click", () => {
    plusSlides(1);
});

btnLeft.addEventListener("touchend", () => {
    plusSlides(-1);
});

btnRight.addEventListener("touchend", () => {
    plusSlides(1);
});