const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();

window.addEventListener("load", () => {
    history.scrollRestoration = "manual"
});

// click events

const contactBtnOpen = document.getElementById("contact-btn");
const contactBtnClose = document.querySelector(".contact-close");
const contactElement = document.getElementById("contact");
const bureauBtnOpen = document.getElementById("bureau-btn");
const bureauBtnClose = document.querySelector(".bureau-close");
const bureauElement = document.getElementById("bureau");

const openClick = (button, element) => {
    button.addEventListener("click", () => {
        if (element.classList.contains("open")) {
            element.classList.remove("open");
        } else {
            element.classList.add("open");
        }
    });
}

openClick(contactBtnOpen, contactElement);
openClick(contactBtnClose, contactElement);
openClick(bureauBtnOpen, bureauElement);
openClick(bureauBtnClose, bureauElement);