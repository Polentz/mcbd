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
            console.log(filter);
            if (filter.category === categories.fonction) {
                filteredProjects = filteredProjects.filter(p => p.fonction.includes(filter.value))
            } else if (filter.category === categories.action) {
                filteredProjects = filteredProjects.filter(p => p.action.includes(filter.value))
            } else if (filter.category === categories.materiaux) {
                filteredProjects = filteredProjects.filter(p => p.materiaux.includes(filter.value))
            } else if (filter.category === categories.elements) {
                filteredProjects = filteredProjects.filter(p => p.elements.includes(filter.value))
            }
            console.log(filteredProjects);
        });
        remainingProjects = projects.filter(p => !filteredProjects.includes(p));
    }
    for (let i = 0; i < filteredProjects.length; i++) {
        const project = filteredProjects[i];
        const selectedProject = document.getElementById(project.id);
        selectedProject.classList.add("colorMe")
    }
    for (let i = 0; i < remainingProjects.length; i++) {
        const project = remainingProjects[i];
        const selectedProject = document.getElementById(project.id);
        selectedProject.classList.remove("colorMe")
    }

}

const buttons = document.querySelectorAll(".filters label");
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

// bottone elimina tutto:
// eliminaButton.addEventListener("click", () => {
//     //     filters = [];
//     //     filterProjects()
// })

// fare:
// aggiungere x quando button is active

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