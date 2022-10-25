// const anchorHome = document.getElementById("go-home")
const projectShape = document.querySelectorAll(".project");
const logo = document.querySelector(".logo-init");
const logoNameFirst = document.getElementById("mcbd");
const logoNameSecond = document.getElementById("architectes");
const cover = document.querySelector(".animation-cover");

// window.addEventListener("load", () => {
//     if (typeof (localStorage.getItem("animation")) != null && localStorage.getItem("animation") != "true") {

//         logo.style.display = "none";
//         cover.style.display = "none";

//         for (let i = 0; i < projectShape.length; i++) {
//             const el = projectShape[i];
//             el.classList.remove("animation");
//         }

//     } else {
//         setTimeout(() => {
//             logoNameFirst.style.transform = "translateX(0)";
//         }, 800);

//         setTimeout(() => {
//             logoNameSecond.style.transform = "translateX(0)";
//         }, 800);

//         for (let i = 0; i < projectShape.length; i++) {
//             const el = projectShape[i];
//             el.classList.add("animation");
//             el.classList.add("animation");
//             setTimeout(() => {
//                 el.classList.remove("animation");
//             }, 1800);
//             localStorage.setItem("animation", "true");
//         }

//         setTimeout(() => {
//             cover.style.backgroundColor = "transparent";
//         }, 1800);

//         setTimeout(() => {
//             logo.style.transform = "scale(0)";
//         }, 2500);

//         setTimeout(() => {
//             logo.style.display = "none";
//         }, 3500);
//     }
// })

const urlParams = new URLSearchParams(window.location.href);
alert(urlParams.getAll("loaded"));

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