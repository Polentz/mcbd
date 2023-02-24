const logoName = document.querySelector(".logo-name");
const logoNameFirst = document.getElementById("mcbd");
const logoNameSecond = document.getElementById("architectes");
const logoInit = document.querySelector(".logo-init");
const cover = document.querySelector(".animation-cover");

const animation = sessionStorage.getItem("animation");

if (animation === "done") {
    logo.style.display = "none";
    cover.style.display = "none";
    projectShape.forEach(element => {
        element.classList.remove("animation");
    });
} else {
    sessionStorage.setItem("animation", "done");
    window.addEventListener("load", () => {
        projectShape.forEach(element => {
            element.classList.add("animation");
        });

        setTimeout(() => {
            logoNameFirst.style.transform = "translateX(0)";
            logoNameSecond.style.transform = "translateX(0)";
        }, 1000);

        setTimeout(() => {
            logoInit.classList.add("change-width");
        }, 2500);

        setTimeout(() => {
            cover.style.backgroundColor = "transparent";
            projectShape.forEach(element => {
                element.classList.remove("animation");
            });
        }, 2800);

        setTimeout(() => {
            cover.style.opacity = "0";
        }, 4000);

        setTimeout(() => {
            cover.style.display = "none";
        }, 5000);
    });
};