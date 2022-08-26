const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();

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
        selectedProject.classList.add("filtered")
    }
    for (let i = 0; i < remainingProjects.length; i++) {
        const project = remainingProjects[i];
        const selectedProject = document.getElementById(project.id);
        selectedProject.classList.remove("filtered")
    }

}

const buttons = document.querySelectorAll(".filter-btn");
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
        filterProjects()
    })
});

const buttonClear = document.getElementById("filter-none");
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
const projectPlan = document.querySelectorAll(".project-plan");
const projectInfo = document.querySelectorAll(".project-info");
const overlay = document.getElementById("overlay");

projectShape.forEach(shape => {
    shape.addEventListener("click", () => {
        projectPlan.forEach(plan => {
            if (plan.id === `${shape.id}-plan`) {
                plan.classList.add("show-info");
                shape.classList.add("hide");
                overlay.classList.add("over");
            }
        })
        projectInfo.forEach(info => {
            if (info.id === `${shape.id}-info`) {
                info.classList.add("show-info");
                shape.classList.add("hide");
            }
        })
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
})





// studiare switch

// switch (categories) {
//     case categories.elements: {
//         const filteredProjects = projects.filter((p) => p.elements.includes(filter))
//         for (let index = 0; index < filteredProjects.length; index++) {
//             const element = filteredProjects[index];
//             // element aggiungi classe per farlo visibile nel dom
//         }
//     }
// }