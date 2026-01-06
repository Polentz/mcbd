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
    vegetal: "vegetal",
    mineral: "mineral",
    mixte: "mixte"
}

const elements = {
    facade: "facade",
    toit: "toit",
    interieur: "interieur",
    exterieur: "exterieur",
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
        id: "05-gol",
        name: "05 GOL",
        fonction: [fonction.logement],
        action: [action.concours],
        materiaux: [materiaux.mixte],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "07-bot",
        name: "07 BOT",
        fonction: [fonction.culturel],
        action: [action.concours],
        materiaux: [materiaux.mineral, materiaux.vegetal],
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
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "14-adc",
        name: "14 ADC",
        fonction: [fonction.culturel],
        action: [action.concours],
        materiaux: [materiaux.bois],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "14-oex",
        name: "14 OEX",
        fonction: [fonction.social],
        action: [action.concours],
        materiaux: [materiaux.mineral, materiaux.bois],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "15-meg",
        name: "15 MEG",
        fonction: [fonction.culturel],
        action: [action.scenographie],
        materiaux: [materiaux.bois, materiaux.vegetal],
        elements: [elements.interieur]
    },
    {
        id: "16-pat",
        name: "16 PAT",
        fonction: [fonction.social],
        action: [action.transformation],
        materiaux: [materiaux.metal, materiaux.vegetal],
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
        materiaux: [materiaux.mixte, materiaux.bois],
        elements: [elements.interieur]
    },
    {
        id: "19-fus",
        name: "19 FUS",
        fonction: [fonction.bureaux],
        action: [action.transformation],
        materiaux: [materiaux.bois, materiaux.metal],
        elements: [elements.toit, elements.foyer]
    },
    {
        id: "20-bus",
        name: "20 BUS",
        fonction: [fonction.social],
        action: [action.concours],
        materiaux: [materiaux.mixte],
        elements: [elements.toit, elements.foyer]
    },
    {
        id: "20-pgm",
        name: "20 PGM",
        fonction: [fonction.social],
        action: [action.concours],
        materiaux: [materiaux.mixte, materiaux.metal],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "21-gar",
        name: "21 GAR",
        fonction: [fonction.culturel],
        action: [action.transformation],
        materiaux: [materiaux.mineral, materiaux.metal],
        elements: [elements.foyer, elements.facade]
    },
    {
        id: "21-hea",
        name: "21 HEA",
        fonction: [fonction.education],
        action: [action.transformation, action.concours],
        materiaux: [materiaux.mixte, materiaux.bois],
        elements: [elements.exterieur, elements.foyer]
    },
    {
        id: "22-per",
        name: "22 PER",
        fonction: [fonction.logement],
        action: [action.construction],
        materiaux: [materiaux.terre, materiaux.bois],
        elements: [elements.interieur, elements.facade]
    },
    {
        id: "22-sif",
        name: "22 SIF",
        fonction: [fonction.logement],
        action: [action.construction],
        materiaux: [materiaux.mineral],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "22-vdt",
        name: "22 VDT",
        fonction: [fonction.logement],
        action: [action.construction],
        materiaux: [materiaux.mixte],
        elements: [elements.interieur, elements.exterieur]
    },
    {
        id: "25-alimentarium",
        name: "Alimentarium",
        fonction: [fonction.culturel],
        action: [action.scenographie],
        materiaux: [materiaux.bois, materiaux.metal],
        elements: [elements.interieur]
    },
    {
        id: "25-tzo",
        name: "25 TZO",
        fonction: [fonction.logement],
        action: [action.construction],
        materiaux: [materiaux.bois, materiaux.terre],
        elements: [elements.interieur, elements.exterieur]
    },
]