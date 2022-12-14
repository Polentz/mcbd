const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();

window.addEventListener("load", () => {
    history.scrollRestoration = "manual";
});

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".slide-section");
const closeBtns = document.querySelectorAll(".close-btn");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        sections.forEach(section => {
            if (link.id === `${section.id}-btn`) {
                section.classList.toggle("open");
            } else {
                section.classList.remove("open");
            }
        });
    })
});

closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        sections.forEach(section => {
            if (btn.id === `${section.id}-close`) {
                section.classList.toggle("open");
            } else {
                section.classList.remove("open");
            }
        });
    })
});