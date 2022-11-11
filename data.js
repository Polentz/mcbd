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
    terrecrue: "terrecrue",
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
        action: [action.construction],
        materiaux: [materiaux.bois],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "04-stm",
        name: "04 STM",
        fonction: [fonction.education],
        action: [action.concours],
        materiaux: [materiaux.vegetal],
        elements: [elements.exterieur]
    },
    {
        id: "05-gol",
        name: "05 GOL",
        fonction: [fonction.logement],
        action: [action.concours],
        materiaux: [materiaux.beton],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "07-bot",
        name: "07 BOT",
        fonction: [fonction.culturel],
        action: [action.concours],
        materiaux: [materiaux.beton, materiaux.vegetal],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "07-vsc",
        name: "07 VSC",
        fonction: [fonction.logement],
        action: [action.transformation],
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
        id: "15-chp",
        name: "15 CHP",
        fonction: [fonction.logement],
        action: [action.transformation],
        materiaux: [materiaux.mixte],
        elements: [elements.interieur]
    },
    {
        id: "15-meg",
        name: "15 MEG",
        fonction: [fonction.culturel],
        action: [action.scenographie],
        materiaux: [materiaux.bois],
        elements: [elements.interieur]
    },
    {
        id: "16-pat",
        name: "16 PAT",
        fonction: [fonction.social],
        action: [action.transformation],
        materiaux: [materiaux.metal],
        elements: [elements.facade]
    },
    {
        id: "17-far",
        name: "17 FAR",
        fonction: [fonction.culturel, fonction.bureaux],
        action: [action.transformation],
        materiaux: [materiaux.bois],
        elements: [elements.interieur, elements.foyer]
    },
    {
        id: "18-adr",
        name: "18 ADR",
        fonction: [fonction.logement, fonction.bureaux],
        action: [action.transformation],
        materiaux: [materiaux.mixte],
        elements: [elements.interieur]
    },
    {
        id: "19-fus",
        name: "19 FUS",
        fonction: [fonction.bureaux],
        action: [action.transformation],
        materiaux: [materiaux.bois],
        elements: [elements.toit, elements.cagedescalier]
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
        id: "20-pgm",
        name: "20 PGM",
        fonction: [fonction.social],
        action: [action.concours],
        materiaux: [materiaux.terrecrue, materiaux.metal],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "21-gar",
        name: "21 GAR",
        fonction: [fonction.culturel],
        action: [action.transformation],
        materiaux: [materiaux.beton, materiaux.pierre],
        elements: [elements.foyer]
    },
    {
        id: "21-hea",
        name: "21 HEA",
        fonction: [fonction.education],
        action: [action.transformation, action.concours],
        materiaux: [materiaux.bois],
        elements: [elements.exterieur, elements.foyer]
    },
    {
        id: "22-sif",
        name: "22 SIF",
        fonction: [fonction.logement],
        action: [action.construction],
        materiaux: [materiaux.pierre],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "22-vdt",
        name: "22 VDT",
        fonction: [fonction.logement],
        action: [action.construction],
        materiaux: [materiaux.beton],
        elements: [elements.interieur, elements.exterieur]
    },
]