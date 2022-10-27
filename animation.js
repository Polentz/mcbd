const projectShape = document.querySelectorAll(".project");
const logo = document.querySelector(".logo-init");
const logoSvg = document.querySelectorAll(".logo-init svg")
const logoNameFirst = document.getElementById("mcbd");
const logoNameSecond = document.getElementById("architectes");
const cover = document.querySelector(".animation-cover");

// const animation = sessionStorage.getItem("animation");

// if (animation === "done") {
//     logo.style.display = "none";
//     cover.style.display = "none";
//     projectShape.forEach(element => {
//         element.classList.remove("animation");
//     });
// } else {
//     sessionStorage.setItem("animation", "done");
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
//         }, 1800);
//     });

//     setTimeout(() => {
//         cover.style.backgroundColor = "transparent";
//     }, 1800);

//     setTimeout(() => {
//         logo.style.transform = "scale(10)";
//     }, 1800);

//     setTimeout(() => {
//         logoSvg.forEach(svg => {
//             svg.style.opacity = "0"
//         });
//     }, 3000)

//     setTimeout(() => {
//         logo.style.display = "none";
//     }, 3500);
// })
// }


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
        logo.style.transform = "scale(10)";
    }, 1800);

    setTimeout(() => {
        logoSvg.forEach(svg => {
            svg.style.opacity = "0"
        });
    }, 3000)

    setTimeout(() => {
        logo.style.display = "none";
    }, 3500);
})