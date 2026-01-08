const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();

window.addEventListener("load", () => {
    history.scrollRestoration = "manual";
});

const createAbout = () => {
    return `
    <div class="info-wrapper">
    <div class="info-content">
        <p>Après 15 ans de pratique respective en tant qu'architectes indépendants, Bernard Delacoste et Marcel
            Croubalian s'associent en 2008. Ils fondent mcbd architectes Genève, une aventure
            étoffée en 2020 par mcbd architectes Sàrl à Monthey.</p>
        <p><span>mcbd</span> est un espace dédié à une pratique de l'architecture généraliste et complète, se
            déployant de la première esquisse à la finalisation. Le concours d'architecture y tient une place
            importante, comme une hygiène de vie et un entraînement de la pensée.</p>
        <p><span>mcbd</span> pratique assidûment la polyvalence et le saut d'échelle. De la scénographie à la
            zone industrielle, de l'immeuble de logement au théâtre, en passant par l'étude de faisabilité et le
            pavillon en terre crue: autant d'opportunités de réinventer l'espace comme l'usage des
            matériaux, de se confronter aux défis sociaux et environnementaux.</p>
        <p><span>mcbd</span> pense et construit chaque projet avec la volonté de l'accompagner jusqu'au bout, et
            plus loin… Tout recommencer, transformer pour que rien ne se perde, avec et pour les gens qui nous
            sont proches ou le deviennent.</p>
    </div>
    <div class="info-list">
        <h2>ÉQUIPE</h2>
        <div class="info-list-content">
            <p>associés :</p>
            <p>Marcel Croubalian (architecte diplômé en 1993 à Genève, EAUG SIA)</p>
            <p>Bernard Delacoste (architecte diplômé en 1995 à Lausanne, EPFL SIA)</p>
        </div>
        <div class="info-list-content">
            <p>collaborent ou ont collaboré à cette aventure :</p>
            <p>Sara dell'Osa (arch. Rome)</p>
            <p>Lucie Delacoste (arch. ETH)</p>
            <p>Moritz Schmidt (arch. ETH)</p>
            <p>Laura Macchioni (arch. Paris)</p>
            <p>Rogerio Maurício Oliveira (arch. Porto)</p>
            <p>Marco Panico (arch. HEPIA)</p>
            <p>Ruben Semadeni (arch. EPFL)</p>
        </div>
        <div class="info-list-content">
            <p>maquettes :</p>
            <p>Dominique Ferrero, architecte maquettiste</p>
        </div>
        <div class="info-list-content">
            <p>images 3D :</p>
            <p>Tomáš Král, <a href="http://www.architecturemade.com/" target="_blank">architecturemade.com</a>
            </p>
        </div>
        <div class="info-list-content">
            <p>site web :</p>
            <p><a href="https://www.iampolenta.com/" target="_blank">Giulia Polenta</a></p>
        </div>
    </div>
    <div class="info-images">
        <img src="assets/media/about/mcbd.jpg">
    </div>
    </div>
    <a id="bureau-close" class="close-btn">
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49 1L1 49M49 49L1 1" />
        </svg>
    </a>`;
};
const createContact = () => {
    return `
    <div class="contact-logo">
    <svg viewBox="0 0 68 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M60.7631 83.4704L60.6982 88H67.9267V41.9714L60.769 40.7667L60.834 56.0268C58.4481 53.641 54.2728 51.7157 49.3003 51.7157C38.8237 51.7157 31.4003 59.8714 31.4003 69.8815C31.4003 79.8916 38.8237 87.9764 49.3003 87.9764C54.8693 87.9764 58.5131 85.7913 60.769 83.4704H60.7631ZM38.3571 69.8165C38.3571 63.3203 43.3946 58.082 49.8259 58.082C56.2571 58.082 61.2297 62.3931 61.2297 69.8165C61.2297 77.2399 56.1922 81.616 49.8259 81.616C43.4596 81.616 38.3571 76.3127 38.3571 69.8165Z" />
        <path
            d="M58.3536 6.384C62.3104 6.384 65.7475 8.04939 67.7849 11.0908C67.8322 11.1617 67.8794 11.2325 67.9208 11.3034V3.11227C67.8794 3.07684 67.8263 3.04731 67.7849 3.01188C65.3282 1.27562 61.8321 0.0236206 57.8162 0.0236206C47.3455 0.0236206 39.9221 8.17931 39.9221 18.1894C39.9221 28.1994 47.3455 36.2843 57.8162 36.2843C62.2868 36.2843 65.5172 34.8787 67.779 33.1248C67.8263 33.0893 67.8735 33.0598 67.9149 33.0185V24.9868C67.8735 25.0576 67.8263 25.1285 67.779 25.1994C65.7357 28.2585 62.2986 29.918 58.3477 29.918C51.9165 29.918 46.879 24.6147 46.879 18.1185C46.879 11.6223 51.9165 6.384 58.3477 6.384H58.3536Z" />
        <path
            d="M29.1798 55.0229C26.2919 52.9382 22.6895 51.7098 18.6323 51.7098C13.6598 51.7098 9.48446 53.6291 7.09858 56.015L7.16355 40.7607L0 41.9655V87.9941H7.23441L7.16945 83.4704C9.42541 85.7913 13.0692 87.9764 18.6382 87.9764C20.4631 87.9764 22.1993 87.7283 23.8116 87.2736L25.1639 79.1415C23.2328 80.6947 20.7879 81.616 18.1067 81.616C11.7463 81.616 6.70291 77.3108 6.70291 69.8165C6.70291 62.3223 11.7404 58.082 18.1067 58.082C22.217 58.082 25.7545 60.2198 27.7801 63.4679L29.1798 55.0288V55.0229Z" />
        <path
            d="M38.3513 0.0236226C32.422 0.253943 29.103 2.79928 27.5853 5.63989C25.4002 1.92524 21.6206 0 16.778 0C9.88606 0 7.56515 4.24616 7.16947 5.17334V0L0.00592041 1.21066V36.2843H7.16947V14.7169C7.69507 9.15375 11.7463 6.36628 15.7208 6.36628C20.4276 6.36628 22.4119 9.47856 22.4119 14.9826V36.2843H29.5755V16.0456C29.5755 10.0691 33.3019 6.84464 37.2883 6.41943L38.3513 0.0236226Z" />
    </svg>
    </div>
    <div class="contact-block">
        <p>mcbd architectes Genève</p>
        <p>Rue du Beulet 4</p>
        <p>1203 Genève</p>
        <p>+41 22 340 31 51</p>
    </div>
    <div class="contact-block">
        <p>mcbd architectes Monthey </p>
        <p>Avenue de la Gare 13A</p>
        <p>1870 Monthey</p>
        <p>+41 79 447 59 63</p>
    </div>
    <div class="contact-block">
        <a href="mailto:mcbd@mcbd.ch">mcbd@mcbd.ch</a>
    </div>
    <div class="contact-block">
        <a id="contact-close" class="close-btn">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49 1L1 49M49 49L1 1" />
            </svg>
        </a>
    </div>`;
};
const createNews = () => {
    return `
    <div class="info-list">
        <div class="info-list-content">
            <h2>RAUM UND WOHNEN</h2>
            <h3>Magazine 08/09.2024</h3>
            <p>Lieu de retraite</p>
            <p>Au cœur des Cyclades, sur l'île de Sifnos, se trouvent deux petites maisons, qui s'intègrent parfaitement dans les oliveraies en terrasses d'une vallée pittoresque. La famille d'architectes Delacoste a créé ici un lieu de calme et de beauté naturelle qui permet de laisser son âme vagabonder.</p>
            <div class="project-info-link">
                <a href="assets/media/news/RuW_8_9_24_Wohnen - Griechenland.pdf" target="_blank">pour en savoir plus</a>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.34326 4.5H0.343262M4.34318 0.5L8.23227 4.5L4.34318 8.5" />
                </svg>
            </div>
        </div>
        <div class="info-list-content">
            <h2>LA SALLE DE LA GARE</h2>
            <h3>12.12.2022</h3>
            <p>La Ville de Monthey rénove et transforme</p>
            <p>Ancien théâtre puis salle municipale de la Ville de Monthey, la salle de la Gare est
                ancrée dans la tradition culturelle est sociale de la commune depuis sa construction
                au début du XXe siècle. Elle profite aujourd'hui d'une rénovation et d'un réaménagement de ses
                espaces afin de répondre aux standards actuels et aux spécificités de
                ses différentes utilisations.</p>
            <div class="project-info-link">
                <a href="assets/media/news/panneau_salle_de_la_gare.pdf" target="_blank">pour en savoir plus</a>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.34326 4.5H0.343262M4.34318 0.5L8.23227 4.5L4.34318 8.5" />
                </svg>
            </div>
        </div>
    </div>
    <a id="news-close" class="close-btn">
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49 1L1 49M49 49L1 1" />
        </svg>
    </a>`;
};
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const news = document.querySelector(".news");
about.insertAdjacentHTML('beforeend', createAbout());
contact.insertAdjacentHTML('beforeend', createContact());
news.insertAdjacentHTML('beforeend', createNews());

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".slide-section");
const closeBtns = document.querySelectorAll(".close-btn");
const openSection = (event, section) => {
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].className = navLinks[i].className.replace("current", "");
        sections.forEach(section => {
            if (navLinks[i].id != `${section.id}-btn`) {
                section.classList.remove("open");
            };
        });
    };
    document.getElementById(section).classList.toggle("open");
    event.currentTarget.className += "current";
}
const closeSection = () => {
    sections.forEach(section => {
        section.classList.remove("open");
    });
    navLinks.forEach(link => {
        link.classList.remove("current")
    });
};
document.getElementById("news-btn").addEventListener("click", (event) => {
    openSection(event, "news");
});
document.getElementById("bureau-btn").addEventListener("click", (event) => {
    openSection(event, "bureau");
});
document.getElementById("contact-btn").addEventListener("click", (event) => {
    openSection(event, "contact");
});
closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        closeSection();
    });
});

const projectLists = document.querySelectorAll(".project-list--lv");
projectLists.forEach(list => {
    const title = list.querySelector(".project-title--lv");
    const images = list.querySelectorAll(".project-list--lv img");
    title.addEventListener("mouseenter", () => {
        images.forEach(image => {
            image.classList.add("no-filter");
        });
    });
    title.addEventListener("mouseleave", () => {
        images.forEach(image => {
            image.classList.remove("no-filter");
        });
    });
});