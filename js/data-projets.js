const projets = [
    {
    id: 1,
    title: "MAISON JE",
    lieu: "Malemort (19)",
    calendar: "Livré en 2000",
    moa: "Privé",
    budget: "NC",
    surface: "NC",
    desc: '',
    type: "MAISON",
    photos:["mije200001", "mije200002", "mije200003"],
    image: "mije200000",
    },
    {
    id: 2,
    title: "MAISON HE",
    lieu: "Dampniat (19)",
    calendar: "Livré en 2001",
    moa: "Privé",
    budget: "190 000 € TTC",
    surface: "110 m²",
    desc: '',
    type: "MAISON",
    photos:["mihe200101", "mihe200102"],
    image: "mihe200100",
    },
    {
    id: 3,
    title: "CONSTRUCTION GROUPE SCOLAIRE D'USSAC",
    lieu: "Ussac (19)",
    calendar: "Livré en 2005",
    moa: "Commune d'Ussac",
    budget: "1 350 000 € HT",
    surface: "1 350 m²",
    desc: '',
    type: "EDUCATION",
    photos:["gsu200501", "gsu200502", "gsu200503"],
    image: "gsu200500",
    },
    {
    id: 4,
    title: "CONSTRUCTION MAISON DE L'ENFANCE DE POMPADOUR",
    lieu: "Pompadour (19)",
    calendar: "Livré en 2005",
    moa: "Commune de Pompadour",
    budget: "450 000 € HT",
    surface: "325 m²",
    desc: '',
    type: "EQUIPEMENTS",
    photos:["mep200501", "mep200502", "mep200503", "mep200504", "mep200505", "mep200506"],
    image: "mep200500",
    },
    {
    id: 5,
    title: "RESTRUCTURATION & EXTENSION GROUPE SCOLAIRE DE PAZAYAC",
    lieu: "Pazayac (24)",
    calendar: "Livré en 2007",
    moa: "Commune de Pazayac",
    budget: "450 000 € HT",
    surface: "220 m²",
    desc: '',
    type: "EDUCATION",
    photos:["gsp200701", "gsp200702", "gsp200703", "gsp200704", "gsp200705"],
    image: "gsp200700",
    },
    {
    id: 6,
    title: "CONSTRUCTION MAISON DE L'ENFANCE DE COSNAC",
    lieu: "Cosnac (19)",
    calendar: "Livré en 2008",
    moa: "Commune de Cosnac",
    budget: "503 000 € HT",
    surface: "385 m²",
    desc: '',
    type: "EQUIPEMENTS",
    photos:["mec200801", "mec200802", "mec200803", "mec200804", "mec200805", "mec200806", "mec200807", "mec200808"],
    image: "mec200800",
    },
    {
    id: 7,
    title: "MAISON SE",
    lieu: "Chanteix (19)",
    calendar: "Livré en 2008",
    moa: "Privé",
    budget: "270 000 € TTC",
    surface: "248 m²",
    desc: '',
    type: "MAISON",
    photos:["mise200801", "mise200802", "mise200803", "mise200804", "mise200805", "mise200806", "mise200807", "mise200808", "mise200809", "mise200810", "mise200811"],
    image: "mise200800",
    },
    {
    id: 8,
    title: "MAISON WI",
    lieu: "Brive-la-Gaillarde (19)",
    calendar: "Livré en 2009",
    moa: "Privé",
    budget: "185 000 € TTC",
    surface: "120 m²",
    desc: '',
    type: "MAISON",
    photos:["miwi200901", "miwi200902", "miwi200903", "miwi200904", "miwi200905", "miwi200906"],
    image: "miwi200900",
    },
    {
    id: 9,
    title: "RESTRUCTURATION ET EXTENSION EHPAD DE TREIGNAC",
    lieu: "Treignac (19)",
    calendar: "Livré en 2009",
    moa: "Commune de Treignac",
    budget: "7 100 000 € HT",
    surface: "6 770 m²",
    desc: '',
    type: "MEDICO",
    photos:["reet200901", "reet200902", "reet200903", "reet200904", "reet200905", "reet200906", "reet200907", "reet200908", "reet200909", "reet200910", "reet200911"],
    image: "reet200900",
    },
    {
    id: 10,
    title: "EXTENSION EHPAD ALLASSAC",
    lieu: "Allassac (19)",
    calendar: "Livré en 2010",
    moa: "Commune d'Allassac",
    budget: "6 821 593 € HT",
    surface: "4 279 m²",
    desc: '',
    type: "MEDICO",
    photos:["eea201001", "eea201002", "eea201003", "eea201004", "eea201005", "eea201006", "eea201007", "eea201008", "eea201009", "eea201010", "eea201011"],
    image: "eea201000",
    },
    {
    id: 11,
    title: "MAISON DE",
    lieu: "Brive-la-Gaillarde (19)",
    calendar: "Livré en 2011",
    moa: "Privé",
    budget: "220 000 € TTC",
    surface: "130 m²",
    desc: '',
    type: "MAISON",
    photos:["mide201101", "mide201102", "mide201103", "mide201104", "mide201105"],
    image: "mide201100",
    },
    {
    id: 12,
    title: "RESTRUCTURATION & EXTENSION CENTRE HOSPITALIER ESQUIROL",
    lieu: "Limoges (87)",
    calendar: "Livré en 2011",
    moa: "Centre Hospitalier Esquirol",
    budget: "850 000 € HT",
    surface: "515 m²",
    desc: '',
    type: "MEDICO",
    photos:["reche201101", "reche201102", "reche201103", "reche201104", "reche201105", "reche201106", "reche201107"],
    image: "reche201100",
    },
    {
    id: 13,
    title: "RESTRUCTURATION EXTENSION GROUPE SCOLAIRE JULES FERRY",
    lieu: "Malemort (19)",
    calendar: "Livré en 2012",
    moa: "Commune de Malemort",
    budget: "1 128 800 € HT",
    surface: "971 m²",
    desc: '',
    type: "EDUCATION",
    photos:["regjf201201", "regjf201202", "regjf201203", "regjf201204", "regjf201205", "regjf201206"],
    image: "regjf201200",
    },
    {
    id: 14,
    title: "CONSTRUCTION EHPAD D'USSEL",
    lieu: "Ussel (19)",
    calendar: "Livré en 2012",
    moa: "Commune d'Ussel (19)",
    budget: "13 250 000 € HT",
    surface: "9 033 m²",
    desc: '',
    type: "MEDICO",
    photos:["ceu201201", "ceu201202", "ceu201203", "ceu201204", "ceu201205", "ceu201206", "ceu201207", "ceu201208", "ceu201209", "ceu201210", "ceu201211", "ceu201212", "ceu201213", "ceu201214", "ceu201215"],
    image: "ceu201200",
    },
    {
    id: 15,
    title: "MAISON MA",
    lieu: "Saint-Mexant (19)",
    calendar: "Livré en 2013",
    moa: "Privé",
    budget: "372 000 € TTC",
    surface: "128 m²",
    desc: '',
    type: "MAISON",
    photos:["mima201301", "mima201302", "mima201303", "mima201304", "mima201305", "mima201306", "mima201307", "mima201308"],
    image: "mima201300",
    },
    {
    id: 16,
    title: "CONSTRUCTION MAISON DE SANTE D'USSEL",
    lieu: "Ussel (19)",
    calendar: "Livré en 2014",
    moa: "Commune d'Ussel (19)",
    budget: "1 470 000 € HT",
    surface: "1 030 m²",
    desc: '',
    type: "MEDICO",
    photos:["cmsu201401", "cmsu201402", "cmsu201403", "cmsu201404", "cmsu201405", "cmsu201406"],
    image: "cmsu201400",
    },
    {
    id: 17,
    title: "MAISON MT",
    lieu: "Naves (19)",
    calendar: "Livré en 2015",
    moa: "Privé",
    budget: "259 000 € TTC",
    surface: "133 m²",
    desc: '',
    type: "MAISON",
    photos:["mimt201501", "mimt201502", "mimt201503", "mimt201504", "mimt201505", "mimt201506", "mimt201507"],
    image: "mimt201500",
    },
    {
    id: 18,
    title: "CONSTRUCTION DE 26 LOGEMENTS COLLECTIFS INTERGENERATIONNELS",
    lieu: "Malemort (19)",
    calendar: "Livré en 2016",
    moa: "Polygone",
    budget: "2 180 000 € HT",
    surface: "2 017 m²",
    desc: '',
    type: "LOGEMENTS",
    photos:["26lci201601", "26lci201602", "26lci201603", "26lci201604", "26lci201605", "26lci201606", "26lci201607", "26lci201608", "26lci201609"],
    image: "26lci201600",
    },
    {
    id: 19,
    title: "CONSTRUCTION CUISINE CENTRALE DU PALAIS",
    lieu: "Palais sur Vienne (87)",
    calendar: "Livré en 2017",
    moa: "Commune de Palais sur Vienne (87)",
    budget: "1 400 000 € HT",
    surface: "622 m²",
    desc: '',
    type: "EQUIPEMENTS",
    photos:["ccpsv201701", "ccpsv201702", "ccpsv201703", "ccpsv201704", "ccpsv201705"],
    image: "ccpsv201700",
    },
    {
    id: 20,
    title: "CONSTRUCTION DE 22 LOGEMENTS COLLECTIFS",
    lieu: "Brive-la-Gaillarde (19)",
    calendar: "Livré en 2018",
    moa: "Le Point Immobilier",
    budget: "2 150 000 € HT",
    surface: "1 144 m²",
    desc: '',
    type: "LOGEMENTS",
    photos:["22lc201801", "22lc201802", "22lc201803", "22lc201804", "22lc201805", "22lc201806", "22lc201807", "22lc201808", "22lc201809"],
    image: "22lc201800",
    },
    {
    id: 21,
    title: "CONSTRUCTION DE 24 LOGEMENTS SOCIAUX",
    lieu: "Malemort (19)",
    calendar: "Livré en 2018",
    moa: "Polygone",
    budget: "2 800 000 € HT",
    surface: "3 075 m²",
    desc: '',
    type: "LOGEMENTS",
    photos:["24lcs201801", "24lcs201802", "24lcs201803", "24lcs201804", "24lcs201805", "24lcs201806", "24lcs201807", "24lcs201808", "24lcs201809", "24lcs201810", "24lcs201811"],
    image: "24lcs201800",
    },
    {
    id: 22,
    title: "MAISON BE",
    lieu: "Saint-Clément (19)",
    calendar: "Livré en 2019",
    moa: "Privé",
    budget: "452 000 € TTC",
    surface: "124 m²",
    desc: '',
    type: "MAISON",
    photos:["mibe201901", "mibe201902", "mibe201903", "mibe201904", "mibe201905", "mibe201906", "mibe201907", "mibe201908", "mibe201908", "mibe201909", "mibe201910", "mibe201911", "mibe201912"],
    image: "mibe201900",
    },
    {
    id: 23,
    title: "MAISON RE",
    lieu: "Donzenac (19)",
    calendar: "Livré en 2019",
    moa: "Privé",
    budget: "223 000 € TTC",
    surface: "110 m²",
    desc: '',
    type: "MAISON",
    photos:["mire201901", "mire201902", "mire201903", "mire201904", "mire201905", "mire201906", "mire201907", "mire201908", "mire201909", "mire201910"],
    image: "mire201900",
    },
    {
    id: 24,
    title: "CONSTRUCTION EHPAD DE MALEMORT",
    lieu: "Malemort (19)",
    calendar: "Livré en 2019",
    moa: "Ehpad de Rivet",
    budget: "8 370 000 € HT",
    surface: "5 638 m²",
    desc: '',
    type: "MEDICO",
    photos:["cem201901", "cem201902", "cem201903", "cem201904", "cem201905", "cem201906", "cem201907", "cem201908", "cem201909", "cem201910", "cem201911", "cem201912", "cem201913", "cem201914", "cem201915", "cem201916", "cem201917", "cem201918", "cem201919", "cem201920", "cem201921"],
    image: "cem201900",
    },
    {
    id: 25,
    title: "RESTRUCTURATION LYCEE EPLEFPA DE HAUTE CORREZE",
    lieu: "Neuvic (19)",
    calendar: "Livré en 2022",
    moa: "Région Nouvelle-Aquitaine",
    budget: "2 100 000 € HT",
    surface: "2 390 m²",
    desc: '',
    type: "EDUCATION",
    photos:["ln202101", "ln202102", "ln202103"],
    image: "ln202100",
    },
    {
    id: 26,
    title: "CONSTRUCTION BATIMENT DE STOCKAGE CESSAC EMBALLAGES",
    lieu: "Saint-Mexant (19)",
    calendar: "Livré en 2022",
    moa: "Cessac Emballages",
    budget: "950 000 € TTC",
    surface: "900 m²",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    type: "INDUSTRIEL",
    video: "vid_202100",
    photos:["cdce202101", "cdce202102", "cdce202103", "cdce202104", "cdce202105", "cdce202106", "cdce202107"],
    image: "cdce202100",
    }
];

// Architecte HMONP
export { projets }