const logoName = document.querySelector(".logo-name");
const logoNameFirst = document.getElementById("mcbd");
const logoNameSecond = document.getElementById("architectes");
const logoCompleto = document.querySelector(".logo-completo");
const logoNegativo = document.querySelector(".logo-negativo");
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

    setTimeout(() => {
        logoNameFirst.style.transform = "translateX(0)";
        logoNameSecond.style.transform = "translateX(0)";
    }, 1200);

    setTimeout(() => {
        logoName.style.opacity = "0";
        cover.style.backgroundColor = "transparent";
    }, 2800);

    setTimeout(() => {
        logoCompleto.style.opacity = "0";
    }, 3200);

    // OK ANIMATE SHAPES
    projectShape.forEach(element => {
        element.classList.add("animation");
        setTimeout(() => {
            element.classList.remove("animation");
        }, 4000);
    });

    setTimeout(() => {
        logoNegativo.style.opacity = "0";
    }, 4000);

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