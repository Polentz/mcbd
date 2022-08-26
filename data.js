const categories = {
    fonction: "fonction",
    action: "action",
    materiaux: "materiaux",
    elements: "elements"
}

const fonction = {
    logement: "logement",
    culturel: "culturel",
    social: "social",
    education: "education",
    bureaux: "bureaux"
}

const action = {
    construction: "construction",
    transformation: "transformation",
    scenographie: "scenographie",
    concours: "concours"
}

const materiaux = {
    bois: "bois",
    metal: "metal",
    terre: "terre",
    crue: "crue",
    vegetal: "vegetal",
    beton: "beton",
    pierre: "pierre",
    mixte: "mixte"
}

const elements = {
    facade: "facade",
    toit: "toit",
    interieur: "interieur",
    exterieur: "exterieur",
    cagedescalier: "cagedescalier",
    foyer: "foyer"
}

const projects = [
    {
        id: "00-bio",
        name: "00 BIO",
        fonction: [fonction.culturel],
        action: [fonction.construction],
        materiaux: [materiaux.bois],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "08-lul",
        name: "08 LUL",
        fonction: [fonction.logement],
        action: [action.transformation],
        materiaux: [materiaux.bois],
        elements: [elements.exterieur]
    },
    {
        id: "14-adc",
        name: "14 ADC",
        fonction: [fonction.culturel],
        action: [action.concours],
        materiaux: [materiaux.bois],
        elements: [elements.facade, elements.foyer]
    },
    {
        id: "14-oex",
        name: "14 OEX",
        fonction: [fonction.social],
        action: [action.concours],
        materiaux: [materiaux.bois],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "20-bus",
        name: "20 BUS",
        fonction: [fonction.social],
        action: [action.concours],
        materiaux: [materiaux.beton],
        elements: [elements.toit, elements.foyer]
    },
    {
        id: "21-bus",
        name: "21 BUS",
        fonction: [fonction.logement],
        action: [action.scenographie],
        materiaux: [materiaux.crue],
        elements: [elements.facade]
    },
    {
        id: "22-bus",
        name: "22 BUS",
        fonction: [fonction.education],
        action: [action.transformation],
        materiaux: [materiaux.mixte],
        elements: [elements.toit, elements.cagedescalier]
    },
]