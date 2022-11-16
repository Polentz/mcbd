const logoName = document.querySelector(".logo-name");
const logoNameFirst = document.getElementById("mcbd");
const logoNameSecond = document.getElementById("architectes");
const logoInit = document.querySelector(".logo-init");
// const logoCompleto = document.querySelector(".logo-completo");
// const logoNegativo = document.querySelector(".logo-negativo");
const cover = document.querySelector(".animation-cover");

const animation = sessionStorage.getItem("animation");

// if (animation === "done") {
//     logo.style.display = "none";
//     cover.style.display = "none";
//     projectShape.forEach(element => {
//         element.classList.remove("animation");
//     });
// } else {
sessionStorage.setItem("animation", "done");
window.addEventListener("load", () => {
    projectShape.forEach(element => {
        element.classList.add("animation");
    });

    setTimeout(() => {
        logoNameFirst.style.transform = "translateX(0)";
        logoNameSecond.style.transform = "translateX(0)";
    }, 2000);

    setTimeout(() => {
        logoInit.style.width = "100%";
    }, 4500);

    setTimeout(() => {
        cover.style.backgroundColor = "transparent";
    }, 5000);

    setTimeout(() => {
        projectShape.forEach(element => {
            element.classList.remove("animation");
        });
    }, 6000);

    setTimeout(() => {
        cover.style.opacity = "0";
    }, 7000);

    setTimeout(() => {
        cover.style.display = "none";
    }, 9000);
})
// }


// window.addEventListener("load", () => {
//     setTimeout(() => {
//         logoNameFirst.style.transform = "translateX(0)";
//     }, 800);

//     setTimeout(() => {
//         logoNameSecond.style.transform = "translateX(0)";
//     }, 800);

//     projectShape.forEach(element => {
//         element.classList.add("animation");
//         setTimeout(() => {
//             element.classList.remove("animation");
//         }, 1700);
//     });

//     setTimeout(() => {
//         cover.style.backgroundColor = "transparent";
//     }, 1700);

//     setTimeout(() => {
//         logo.style.transform = "scale(10)";
//     }, 1700);

//     setTimeout(() => {
//         logoSvg.forEach(svg => {
//             svg.style.opacity = "0"
//         });
//     }, 3000)

//     setTimeout(() => {
//         logo.style.display = "none";
//     }, 3500);
// })