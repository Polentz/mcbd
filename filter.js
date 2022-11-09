let filters = [];

const filterProjects = () => {
    let filteredProjects = projects;
    let remainingProjects = projects;
    if (filters.length > 0) {
        filters.forEach(filter => {
            if (filter.category === categories.fonction) {
                filteredProjects = filteredProjects.filter(p => p.fonction.includes(filter.value))
            } else if (filter.category === categories.action) {
                filteredProjects = filteredProjects.filter(p => p.action.includes(filter.value))
            } else if (filter.category === categories.materiaux) {
                filteredProjects = filteredProjects.filter(p => p.materiaux.includes(filter.value))
            } else if (filter.category === categories.elements) {
                filteredProjects = filteredProjects.filter(p => p.elements.includes(filter.value))
            }
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
        const projectElements = document.getElementById(`${project.id}-wrapper`);
        if (projectElements) {
            projectElements.style.display = "flex";
        }
    }
    for (let i = 0; i < remainingProjects.length; i++) {
        const project = remainingProjects[i];
        const selectedProject = document.getElementById(project.id);
        selectedProject.classList.remove("filtered");
        // if (selectedProject.classList.contains("project-wrapper--lv")) {
        //     selectedProject.style.display = filters.length > 0 ? "none" : "flex";
        // }
        selectedProject.style.display = filters.length > 0 ? "none" : "flex";
        const projectElements = document.getElementById(`${project.id}-wrapper`);
        if (projectElements) {
            projectElements.style.display = filters.length > 0 ? "none" : "inherit";
        }
    }
}

const buttons = document.querySelectorAll(".filter-btn");
const buttonClear = document.getElementById("filter-clear");

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

buttonClear.addEventListener("click", () => {
    buttons.forEach(btn => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
    });
    filters = [];
    filterProjects();
});

const projectShape = document.querySelectorAll(".project");
const projectDiv = document.querySelectorAll(".project-wrapper--lv, .project-wrapper");
const overlay = document.getElementById("overlay");
const toThePage = document.querySelector(".to-the-page");

projectShape.forEach(shape => {
    shape.addEventListener("click", () => {
        projectDiv.forEach(div => {
            if (div.id === `${shape.id}-wrapper`) {
                const plan = div.querySelector(".project-plan");
                const info = div.querySelector(".project-info");
                const anchorTag = div.querySelector("a");
                const projectUrl = `${shape.id}.html`;

                if (toThePage) {
                    toThePage.setAttribute("href", projectUrl);
                }

                const addClasses = () => {
                    shape.classList.add("hide");
                    plan.classList.add("show-info");
                    info.classList.add("show-info");
                    overlay.classList.add("over");
                    toThePage.classList.add("show-info");
                }
                const removeClasses = () => {
                    shape.classList.remove("hide");
                    plan.classList.remove("show-info");
                    info.classList.remove("show-info");
                    overlay.classList.remove("over");
                    toThePage.classList.remove("show-info");
                }

                addClasses();

                // plan.addEventListener("click", () => {
                //     removeClasses();
                // });

                overlay.addEventListener("click", () => {
                    removeClasses();
                });

                // anchorTag.addEventListener("click", () => {
                //     removeClasses();
                // });
            }
        })
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