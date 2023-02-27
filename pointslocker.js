/// ATTRIBUTES 
let attrObj = {
    allphyPoints: 0,
    allmenPoints: 0,
    allsocPoints: 0,
    curphyPoints: 0,
    curmenPoints: 0,
    cursocPoints: 0,
    strPoints: 1,
    dexPoints: 1,
    staPoints: 1,
    chaPoints: 1,
    manPoints: 1,
    appPoints: 1,
    perPoints: 1,
    intPoints: 1,
    witPoints: 1,
    strfreePoints: 0,
    dexfreePoints: 0,
    stafreePoints: 0,
    chafreePoints: 0,
    manfreePoints: 0,
    appfreePoints: 0,
    perfreePoints: 0,
    intfreePoints: 0,
    witfreePoints: 0
}

/// ABILITIES
let abiliObj = {
    alltalPoints: 0,
    allskiPoints: 0,
    allknoPoints: 0,
    curtalPoints: 0,
    curskiPoints: 0,
    curknoPoints: 0,

    alerPoints: 0,
    athlPoints: 0,
    awarPoints: 0,
    brawPoints: 0,
    dodgPoints: 0,
    empaPoints: 0,
    exprPoints: 0,
    intiPoints: 0,
    intuPoints: 0,
    leadPoints: 0,
    strePoints: 0,
    subtPoints: 0,

    animPoints: 0,
    crafPoints: 0,
    demoPoints: 0,
    drivPoints: 0,
    etiqPoints: 0,
    firePoints: 0,
    melePoints: 0,
    perfPoints: 0,
    secuPoints: 0,
    steaPoints: 0,
    survPoints: 0,
    techPoints: 0,

    acadPoints: 0,
    burePoints: 0,
    compPoints: 0,
    finaPoints: 0,
    invePoints: 0,
    lawwPoints: 0,
    lingPoints: 0,
    mediPoints: 0,
    occuPoints: 0,
    poliPoints: 0,
    resePoints: 0,
    sciePoints: 0,

    alerfreePoints: 0,
    athlfreePoints: 0,
    awarfreePoints: 0,
    brawfreePoints: 0,
    dodgfreePoints: 0,
    empafreePoints: 0,
    exprfreePoints: 0,
    intifreePoints: 0,
    intufreePoints: 0,
    leadfreePoints: 0,
    strefreePoints: 0,
    subtfreePoints: 0,

    animfreePoints: 0,
    craffreePoints: 0,
    demofreePoints: 0,
    drivfreePoints: 0,
    etiqfreePoints: 0,
    firefreePoints: 0,
    melefreePoints: 0,
    perffreePoints: 0,
    secufreePoints: 0,
    steafreePoints: 0,
    survfreePoints: 0,
    techfreePoints: 0,

    acadfreePoints: 0,
    burefreePoints: 0,
    compfreePoints: 0,
    finafreePoints: 0,
    invefreePoints: 0,
    lawwfreePoints: 0,
    lingfreePoints: 0,
    medifreePoints: 0,
    occufreePoints: 0,
    polifreePoints: 0,
    resefreePoints: 0,
    sciefreePoints: 0
}

/// SELECTIONS
let phypriochoice = document.querySelector('.phyprio');
let socpriochoice = document.querySelector('.socprio');
let menpriochoice = document.querySelector('.menprio');
var talentspriochoice = document.querySelector('.talentsPrio');
var skillpriochoice = document.querySelector('.skillPrio');
var knowpriochoice = document.querySelector('.knowPrio');

///TEXTS
let phytext = document.querySelector('#phytext');
let soctext = document.querySelector('#soctext');
let mentext = document.querySelector('#mentext');
var taltexts = document.querySelector('#taltext');
var skitexts = document.querySelector('#skilltext');
var knotexts = document.querySelector('#knowtext');
let mercytext = document.getElementById("mercypo");
let visiontext = document.getElementById("visionpo");
let zealtext = document.getElementById("zealpo");
let freebietext = document.getElementById("freebiecount");
let backtext = document.getElementById("backtext");
let virtext = document.getElementById("virtuetext");

///BUTTONS
let capbutton = document.getElementById("attri");
let capbutton2 = document.getElementById("abili");
let virbutton = document.getElementById("virtues");
let backbutton = document.getElementById("backgrounds");
let wilconbutton = document.getElementById("willcon");

/// CREATION CHOICES
let archetypes =
    [
        '--', 'Addict', 'Architect', 'Autocrat', 'Bon Vivant', 'Bravo', 'Capitalist', 'Caregiver', 'Celebrant', 'Chameleon', 'Child', 'Competitor',
        'Conformist', 'Conniver', 'Creep Show', 'Curmudgeon', 'Dabbler', 'Deviant', 'Director', 'Dreamer', 'Enigma', 'Eye of the storm',
        'Fanatic', 'Gallant', 'Guru', 'Gambler', 'Idealist', 'Loner', 'Masocist', 'Monster', 'Pedagogue', 'Penitent', 'Perfectionist',
        'Rebel', 'Rogue', 'Sadist', 'Scientist', 'Sociopath', 'Soldier', 'Survivor', 'Thrill - Seeker', 'Traditionalist', 'Trickster'
    ];

let creedtypes = ['--', 'Avenger', 'Defender', 'Hermit', 'Innocent', 'Judge', 'Martyr', 'Redeemer', 'Visionary', 'Wayward'];

let edges = [
    "--",
    //      Innocent
    "Fool's Luck - Innocence - 1", "Hide - Innocence - 1", "Illuminate - Innocence - 2", "Ease - Innocence - 2", "Conceal - Innocence - 2",
    //      Martyr
    "Demand - Marytrdom - 1", "Project - Marytrdom - 1", "Witness - Marytrdom - 2", "Revelation - Marytrdom - 2",
    //      Redeemer
    "Bluster - Redemption - 1", "Outreach - Redemption - 1", "Insinuate - Redemption - 2", "Insight - Redemption - 2",
    //      Visionary
    "Foresee - Vision - 1", "Focus - Vision - 1", "Pinpoint - Vision - 2", "Summon - Vision - 2", "Return - Vision - 2",
    //      Hermit
    "Foresee - Solitude - 1", "Send - Solitude - 2",
    //      Wayward
    "Impart - Deviance - 1", "Forewarn - Deviance - 2",
    //      Avenger
    "Cleave - Vengence - 1", "Impact - Vengence - 1", "Wardance - Vengence - 1", "Track - Vengence - 2", "Muse of Flame - Vengence - 2",
    //      Defender
    "Ward - Defense - 1", "Alarm - Defense - 1", "Rejuvenate - Defense - 2", "Lock - Defense - 2",
    //      Judge
    "Discern - Judgement - 1", "Vigilance - Judgement - 1", "Burden - Judgement - 2", "Anathema - Judgement - 2", "View - Judgement - 2",
];

let edgesFull = [
    "--",
    //      Innocent
    "Fool's Luck - Innocence - 1", "Hide - Innocence - 1", "Illuminate - Innocence - 2", "Ease - Innocence - 2", "Conceal - Innocence - 2",
    //      Martyr
    "Demand - Marytrdom - 1", "Project - Marytrdom - 1", "Witness - Marytrdom - 2", "Revelation - Marytrdom - 2",
    //      Redeemer
    "Bluster - Redemption - 1", "Outreach - Redemption - 1", "Insinuate - Redemption - 2", "Insight - Redemption - 2",
    //      Visionary
    "Foresee - Vision - 1", "Focus - Vision - 1", "Pinpoint - Vision - 2", "Summon - Vision - 2", "Return - Vision - 2",
    //      Hermit
    "Foresee - Solitude - 1", "Send - Solitude - 2",
    //      Wayward
    "Impart - Deviance - 1", "Forewarn - Deviance - 2",
    //      Avenger
    "Cleave - Vengence - 1", "Impact - Vengence - 1", "Wardance - Vengence - 1", "Track - Vengence - 2", "Muse of Flame - Vengence - 2",
    //      Defender
    "Ward - Defense - 1", "Alarm - Defense - 1", "Rejuvenate - Defense - 2", "Lock - Defense - 2",
    //      Judge
    "Discern - Judgement - 1", "Vigilance - Judgement - 1", "Burden - Judgement - 2", "Anathema - Judgement - 2", "View - Judgement - 2",

]

let background = ['    ', 'Allies', 'Arseneal', 'Bystander', 'Contacts', 'Destiny', 'Exposure', 'Fame', 'Influence', 'Mentor', 'Patron', 'Ressources'];

let freebiecode = false;
let freebiepoints = 21;
let backvalObj = {
    backpoint: 5,
    back1point: 0,
    back2point: 0,
    back3point: 0,
    back4point: 0,
    back5point: 0,
    back1freepoint: 0,
    back2freepoint: 0,
    back3freepoint: 0,
    back4freepoint: 0,
    back5freepoint: 0
}

let virtuevalueoverall = 0, virtuevalue= 0, conviction = 3, convictionfreebies = 0;
let creedset = false;
let willpower = 3;
let mercy = 0, vision = 0, zeal = 0;


