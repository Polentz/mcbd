const revealOnScroll = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("appear");
        } else {
            reveals[i].classList.remove("appear");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);

// click events
const btnOpen = document.getElementById("contact-btn");
const btnClose = document.querySelector(".close-btn")
const elementOpen = document.getElementById("contact");

btnOpen.addEventListener("click", () => {
    if (elementOpen.classList.contains("open")) {
        elementOpen.classList.remove("open");
    } else {
        elementOpen.classList.add("open");
    }
});

btnClose.addEventListener("click", () => {
    elementOpen.classList.remove("open");
});

window.addEventListener("scroll", () => {
    if (elementOpen.classList.contains("open")) {
        elementOpen.classList.remove("open");
    }
})
