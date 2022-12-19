const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();

window.addEventListener("load", () => {
    history.scrollRestoration = "manual";
});

// click events

// const contactBtnOpen = document.getElementById("contact-btn");
// const contactBtnClose = document.getElementById("contact-close");
// const contactElement = document.getElementById("contact");
// const bureauBtnOpen = document.getElementById("bureau-btn");
// const bureauBtnClose = document.getElementById("bureau-close");
const bureauElement = document.getElementById("bureau");
// const newsBtnOpen = document.getElementById("news-btn");
// const newsBtnClose = document.getElementById("news-close");
// const newsElement = document.getElementById("news");

// const openClick = (button, element, elementA, elementB) => {
//     button.addEventListener("click", () => {
//         if (element.classList.contains("open")) {
//             element.classList.remove("open");
//         } else {
//             element.classList.add("open");
//         }
//         if (elementA.classList.contains("open")) {
//             elementA.classList.remove("open");
//         }
//         if (elementB.classList.contains("open")) {
//             elementB.classList.remove("open");
//         }
//     });
// };

// openClick(contactBtnOpen, contactElement, bureauElement, newsElement);
// openClick(contactBtnClose, contactElement, bureauElement, newsElement);
// openClick(bureauBtnOpen, bureauElement, contactElement, newsElement);
// openClick(bureauBtnClose, bureauElement, contactElement, newsElement);
// openClick(newsBtnOpen, newsElement, bureauElement, contactElement);
// openClick(newsBtnClose, newsElement, bureauElement, contactElement);

const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".slide-section");
const btns = document.querySelectorAll(".close-btn");

links.forEach(link => {
    link.addEventListener("click", () => {
        sections.forEach(section => {
            if (link.id === `${section.id}-btn`) {
                section.classList.toggle("open");
            } else {
                section.classList.remove("open");
            }
        });

    })
});

btns.forEach(btn => {
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


const reveals = document.querySelectorAll(".info-images img");
const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 300;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("appear");
        } else {
            reveals[i].classList.remove("appear");
        }
    }
}

bureauElement.addEventListener("scroll", revealOnScroll);