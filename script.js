const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();

// click events
const contactBtnOpen = document.getElementById("contact-btn");
const contactBtnClose = document.querySelector(".contact-close");
const contactElement = document.getElementById("contact");
const bureauBtnOpen = document.getElementById("bureau-btn");
const bureauBtnClose = document.querySelector(".bureau-close");
const bureauElement = document.getElementById("bureau");

const clickFunctions = () => {
    openClick(contactBtnOpen, contactElement);
    openClick(contactBtnClose, contactElement);
    openClick(bureauBtnOpen, bureauElement);
    openClick(bureauBtnClose, bureauElement);
}

const openClick = (button, element) => {
    button.addEventListener("click", () => {
        if (element.classList.contains("open")) {
            element.classList.remove("open");
        } else {
            element.classList.add("open");
        }
    });
}

clickFunctions();

// filters
let filters = [];

const filterProjects = () => {
    let filteredProjects = projects;
    let remainingProjects = projects;
    if (filters.length > 0) {
        filters.forEach(filter => {
            // console.log(filter);
            if (filter.category === categories.fonction) {
                filteredProjects = filteredProjects.filter(p => p.fonction.includes(filter.value))
            } else if (filter.category === categories.action) {
                filteredProjects = filteredProjects.filter(p => p.action.includes(filter.value))
            } else if (filter.category === categories.materiaux) {
                filteredProjects = filteredProjects.filter(p => p.materiaux.includes(filter.value))
            } else if (filter.category === categories.elements) {
                filteredProjects = filteredProjects.filter(p => p.elements.includes(filter.value))
            }
            // console.log(filteredProjects);
        });
        remainingProjects = projects.filter(p => !filteredProjects.includes(p));
    }
    for (let i = 0; i < filteredProjects.length; i++) {
        const project = filteredProjects[i];
        const selectedProject = document.getElementById(project.id);
        selectedProject.classList.add("filtered");
        // if (selectedProject.classList.contains("project-wrapper--lv")) {
        //     selectedProject.style.display = "flex";
        // }
        selectedProject.style.display = "flex";
    }
    for (let i = 0; i < remainingProjects.length; i++) {
        const project = remainingProjects[i];
        const selectedProject = document.getElementById(project.id);
        selectedProject.classList.remove("filtered");
        // if (selectedProject.classList.contains("project-wrapper--lv")) {
        //     selectedProject.style.display = filters.length > 0 ? "none" : "flex";
        // }
        selectedProject.style.display = filters.length > 0 ? "none" : "flex";
    }
}

const buttons = document.querySelectorAll(".filter-btn");
const buttonClear = document.getElementById("filter-clear");

if (buttons, buttonClear) {
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("active")) {
                btn.classList.remove("active");
                const index = filters.findIndex(p => p.category === btn.dataset.categories && p.value === btn.id)
                filters.splice(index, 1);
            } else {
                btn.classList.add("active");
                filters.push({ category: btn.dataset.categories, value: btn.id });
            }
            filterProjects();
        })
    });

    // const buttonClear = document.getElementById("filter-clear");
    buttonClear.addEventListener("click", () => {
        buttons.forEach(btn => {
            if (btn.classList.contains("active")) {
                btn.classList.remove("active");
            }
        });
        filters = [];
        filterProjects();
    });

    const projectDiv = document.querySelectorAll(".project-wrapper--lv");
    const projectShape = document.querySelectorAll(".project");
    const projectPlan = document.querySelectorAll(".project-plan");
    const projectInfo = document.querySelectorAll(".project-info");
    const overlay = document.getElementById("overlay");
    const projectLink = document.querySelectorAll(".project-info a");

    projectShape.forEach(shape => {
        shape.addEventListener("click", () => {
            projectDiv.forEach(div => {
                if (shape.id === `${div.id}-shape`) {
                    projectPlan.forEach(plan => {
                        if (plan.id === `${div.id}-plan`) {
                            // console.log(div.id, div)
                            plan.classList.add("show-info");
                            shape.classList.add("hide");
                        }
                        overlay.classList.add("over");
                    })
                    projectInfo.forEach(info => {
                        if (info.id === `${div.id}-info`) {
                            info.classList.add("show-info");
                            shape.classList.add("hide");
                        }
                    })
                }
            })
            projectPlan.forEach(plan => {
                if (plan.id === `${shape.id}-plan`) {
                    plan.classList.add("show-info");
                    shape.classList.add("hide");
                }
                overlay.classList.add("over");
            })
            projectInfo.forEach(info => {
                if (info.id === `${shape.id}-info`) {
                    info.classList.add("show-info");
                    shape.classList.add("hide");
                }
            })
        })
    })

    projectPlan.forEach(plan => {
        plan.addEventListener("click", () => {
            projectShape.forEach(shape => {
                shape.classList.remove("hide");
            })
            projectInfo.forEach(info => {
                info.classList.remove("show-info");
            })
            plan.classList.remove("show-info");
            if (overlay) {
                overlay.classList.remove("over");
            }
        })
    })

    overlay.addEventListener("click", () => {
        projectShape.forEach(shape => {
            shape.classList.remove("hide");
        })
        projectInfo.forEach(info => {
            info.classList.remove("show-info");
        })
        projectPlan.forEach(plan => {
            plan.classList.remove("show-info");
        })
        overlay.classList.remove("over");
    });

    projectLink.forEach(link => {
        link.addEventListener("click", () => {
            projectShape.forEach(shape => {
                shape.classList.remove("hide");
            })
            projectInfo.forEach(info => {
                info.classList.remove("show-info");
            })
            projectPlan.forEach(plan => {
                plan.classList.remove("show-info");
            })
            overlay.classList.remove("over");
        })
    })

    const filterBtn = document.querySelector(".always-visible");
    const filterUi = document.querySelector(".always-visible svg");
    const filterOpen = document.querySelectorAll(".filter-list:not(.filter-list.always-visible)");

    filterBtn.addEventListener("click", () => {
        filterOpen.forEach(element => {
            element.classList.toggle("open-filter");
        });
        filterUi.classList.toggle("rotate")
    });
}

// animation
// window.addEventListener("load", () => {
//     if (typeof (localStorage.getItem("animation")) != null && localStorage.getItem("animation") != "true") {
//         for (let i = 0; i < projectShape.length; i++) {
//             const el = projectShape[i];
//             el.classList.add("initAnimate");
//             localStorage.setItem("animation", "true");
//         }
//     } else {
//         for (let i = 0; i < projectShape.length; i++) {
//             const el = projectShape[i];
//             el.classList.remove("initAnimate");
//         }
//     }
// })