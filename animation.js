const projectShape = document.querySelectorAll(".project");
const logo = document.querySelector(".logo-init");
const logoNameFirst = document.getElementById("mcbd");
const logoNameSecond = document.getElementById("architectes");
const cover = document.querySelector(".animation-cover");



// const urlParams = new URLSearchParams(window.location.href);
// alert(urlParams.getAll("loaded"));


const animation = sessionStorage.getItem("animation");

if (animation === "done") {
    logo.style.display = "none";
    cover.style.display = "none";
    projectShape.forEach(element => {
        element.classList.remove("animation");
    });
} else {
    sessionStorage.getItem("animation", "done");
    window.addEventListener("load", () => {
        setTimeout(() => {
            logoNameFirst.style.transform = "translateX(0)";
        }, 800);

        setTimeout(() => {
            logoNameSecond.style.transform = "translateX(0)";
        }, 800);

        projectShape.forEach(element => {
            element.classList.add("animation");
            setTimeout(() => {
                element.classList.remove("animation");
            }, 1800);
        });

        setTimeout(() => {
            cover.style.backgroundColor = "transparent";
        }, 1800);

        setTimeout(() => {
            logo.style.transform = "scale(0)";
        }, 2500);

        setTimeout(() => {
            logo.style.display = "none";
        }, 3500);
    })
}


