capbutton.addEventListener('click', (e) => {
    let isButton = e.target.id;
    let isButtonPoints = isButton.slice(0, 3) + 'Points';
    let isButtontext = isButton.slice(0, 3) + 'po';

        if (isButton.slice(-1) == '+'  && attrObj[isButtonPoints] < 5) {
            attrObj[isButtonPoints]++;
            document.getElementById(isButtontext).innerText = attrObj[isButtonPoints];
        }
        if (isButton.slice(-1) == '-' && attrObj[isButtonPoints] > 1) {
            attrObj[isButtonPoints]--;
            document.getElementById(isButtontext).innerText = attrObj[isButtonPoints];
        }

});

capbutton2.addEventListener('click', (e) => {
    let isButton = e.target.id;
    let isButtonPoints = isButton.slice(0, 4) + 'Points';
    let isButtontext = isButton.slice(0, 4) + 'po';

        if (isButton.slice(-1) == '+' && abiliObj[isButtonPoints] < 5) {
            abiliObj[isButtonPoints]++;
            document.getElementById(isButtontext).innerText = abiliObj[isButtonPoints];
        }
        if (isButton.slice(-1) == '-' && abiliObj[isButtonPoints] > 0) {
            abiliObj[isButtonPoints]--;
            document.getElementById(isButtontext).innerText = abiliObj[isButtonPoints];
        }

});

function resetfree (){
    //resets attributes
    attrObj.strPoints = 1;
    document.getElementById("strpo").innerText = 1;
    attrObj.dexPoints = 1;
    document.getElementById("dexpo").innerText = 1;
    attrObj.staPoints = 1;
    document.getElementById("stapo").innerText = 1;
    attrObj.chaPoints = 1;
    document.getElementById("chapo").innerText = 1;
    attrObj.manPoints = 1;
    document.getElementById("manpo").innerText = 1;
    attrObj.appPoints = 1;
    document.getElementById("apppo").innerText = 1;
    attrObj.perPoints = 1;
    document.getElementById("perpo").innerText = 1;
    attrObj.intPoints = 1;
    document.getElementById("intpo").innerText = 1;
    attrObj.witPoints = 1;
    document.getElementById("witpo").innerText = 1;

    //resets abilities
    abiliObj.alerPoints = 0;
    document.getElementById("alerpo").innerText = 0;
    abiliObj.athlPoints = 0;
    document.getElementById("athlpo").innerText = 0;
    abiliObj.awarPoints = 0;
    document.getElementById("awarpo").innerText = 0;
    abiliObj.brawPoints = 0;
    document.getElementById("brawpo").innerText = 0;
    abiliObj.dodgPoints = 0;
    document.getElementById("dodgpo").innerText = 0;
    abiliObj.empaPoints = 0;
    document.getElementById("empapo").innerText = 0;
    abiliObj.exprPoints = 0;
    document.getElementById("exprpo").innerText = 0;
    abiliObj.intiPoints = 0;
    document.getElementById("intipo").innerText = 0;
    abiliObj.intuPoints = 0;
    document.getElementById("intupo").innerText = 0;
    abiliObj.leadPoints = 0;
    document.getElementById("leadpo").innerText = 0;
    abiliObj.strePoints = 0;
    document.getElementById("strepo").innerText = 0;
    abiliObj.subtPoints = 0;
    document.getElementById("subtpo").innerText = 0;
    abiliObj.animPoints = 0;
    document.getElementById("animpo").innerText = 0;
    abiliObj.crafPoints = 0;
    document.getElementById("crafpo").innerText = 0;
    abiliObj.demoPoints = 0;
    document.getElementById("demopo").innerText = 0;
    abiliObj.drivPoints = 0;
    document.getElementById("drivpo").innerText = 0;
    abiliObj.etiqPoints = 0;
    document.getElementById("etiqpo").innerText = 0;
    abiliObj.firePoints = 0;
    document.getElementById("firepo").innerText = 0;
    abiliObj.melePoints = 0;
    document.getElementById("melepo").innerText = 0;
    abiliObj.perfPoints = 0;
    document.getElementById("perfpo").innerText = 0;
    abiliObj.secuPoints = 0;
    document.getElementById("secupo").innerText = 0;
    abiliObj.steaPoints = 0;
    document.getElementById("steapo").innerText = 0;
    abiliObj.survPoints = 0;
    document.getElementById("survpo").innerText = 0;
    abiliObj.techPoints = 0;
    document.getElementById("techpo").innerText = 0;
    abiliObj.acadPoints = 0;
    document.getElementById("acadpo").innerText = 0;
    abiliObj.burePoints = 0;
    document.getElementById("burepo").innerText = 0;
    abiliObj.compPoints = 0;
    document.getElementById("comppo").innerText = 0;
    abiliObj.finaPoints = 0;
    document.getElementById("finapo").innerText = 0;
    abiliObj.invePoints = 0;
    document.getElementById("invepo").innerText = 0;
    abiliObj.lawPoints = 0;
    document.getElementById("lawwpo").innerText = 0;
    abiliObj.lingPoints = 0;
    document.getElementById("lingpo").innerText = 0;
    abiliObj.mediPoints = 0;
    document.getElementById("medipo").innerText = 0;
    abiliObj.occuPoints = 0;
    document.getElementById("occupo").innerText = 0;
    abiliObj.poliPoints = 0;
    document.getElementById("polipo").innerText = 0;
    abiliObj.resePoints = 0;
    document.getElementById("resepo").innerText = 0;
    abiliObj.sciePoints = 0;
    document.getElementById("sciepo").innerText = 0;
}

function fillDropdowns(insertArray, chosenMenu) {
    let menu = document.getElementById(chosenMenu);
    let opts = insertArray;
    for (i = 0; i < insertArray.length; i++) {
        let option = document.createElement("OPTION");
        txt = document.createTextNode(opts[i]);
        option.appendChild(txt);
        option.setAttribute("value", opts[i]);
        menu.insertBefore(option, chosenMenu.lastChild);
    }

}

function fillwebsite() {
    fillDropdowns(archetypes, "naturedrop");
    fillDropdowns(archetypes, "demeanordrop");
    fillDropdowns(creedtypes, "creeddrop");
    fillDropdowns(edges, "edgedrop1");
    fillDropdowns(edges, "edgedrop2");
    fillDropdowns(background, "back1");
    fillDropdowns(background, "back2");
    fillDropdowns(background, "back3");
    fillDropdowns(background, "back4");
    fillDropdowns(background, "back5");
}

document.getElementById('creeddrop').addEventListener('change', (event) => {
    let chosencreed = event.target.value;
    if (chosencreed == 'Defender' || chosencreed == 'Judge') {
        document.getElementById("privirt").innerText = "Zeal";
    }
    if (chosencreed == 'Innocent' || chosencreed == 'Redeemer') {
        document.getElementById("privirt").innerText = "Mercy";
    }
    if (chosencreed == 'Visionary' || chosencreed == 'Hermit') {
        document.getElementById("privirt").innerText = "Vision";
    }
    if (chosencreed == 'Avenger') {
        document.getElementById("privirt").innerText = "Zeal";
    }
    if (chosencreed == 'Martyr') {
        document.getElementById("privirt").innerText = "Mercy";
    }
    if (chosencreed == 'Wayward') {
        document.getElementById("privirt").innerText = "Vision";
    }

    if (chosencreed == 'Defender' ||
        chosencreed == 'Innocent' ||
        chosencreed == 'Judge' ||
        chosencreed == 'Redeemer' ||
        chosencreed == 'Visionary' ||
        chosencreed == 'Hermit') {
            creedset = true;
        virtuevalue = 3;
        virtuevalueoverall = 3;
        conviction = 3;
        mercy = 0;
        vision = 0;
        zeal = 0;
        mercytext.innerText = 0;
        visiontext.innerText = 0;
        zealtext.innerText = 0;
    }
    else {
        creedset = true;
        virtuevalueoverall = 4;
        virtuevalue = 4;
        conviction = 4;
        mercy = 0;
        vision = 0;
        zeal = 0;
        mercytext.innerText = 0;
        visiontext.innerText = 0;
        zealtext.innerText = 0;
    }
    document.getElementById("hustarcon").innerText = virtuevalueoverall;
    document.getElementById("convi").innerText = virtuevalueoverall;
    if (chosencreed == '--'){
        creedset = false;
        virtuevalue = 0;
        virtuevalueoverall = 0;
        document.getElementById("hustarcon").innerText = "--";
        document.getElementById("convi").innerText = "--";
        document.getElementById("privirt").innerText = "--";
    }
})

document.getElementById('edgedrop1').addEventListener('change', (event) =>{
    let chosenedge = event.target.id;
    let edgevalue = document.getElementById(chosenedge).value;
    let count = edges.indexOf(edgevalue);
    edgechoice1 = edgeshort[count];
})

document.getElementById('edgedrop2').addEventListener('change', (event) =>{
    let chosenedge = event.target.id;
    let edgevalue = document.getElementById(chosenedge).value;
    let count = edges.indexOf(edgevalue);
    edgechoice2 = edgeshort[count];
})

virbutton.addEventListener('click', (e) => {
    let target = e.target;
    let isButton = target.id;
    switch (isButton) {
        case ('mercy+'):
            if (mercy < 5) {
                mercy++;
                mercytext.innerText = mercy;
            }
            break;
        case ('mercy-'):
            if (mercy > 0) {
                mercy--;
                mercytext.innerText = mercy;
            }
            break;
        case ('vision+'):
            if (vision < 5) {
                vision++;
                visiontext.innerText = vision;
            }
            break;
        case ('vision-'):
            if (vision > 0) {
                vision--;
                visiontext.innerText = vision;
            }
            break;
        case ('zeal+'):
            if (zeal < 5) {
                zeal++;
                zealtext.innerText = zeal;
            }
            break;
        case ('zeal-'):
            if (zeal > 0) {
                zeal--;
                zealtext.innerText = zeal;
            }
            break;
    }
});

backbutton.addEventListener('click', (e) => {
    let isButton = e.target.id;
    let isButtonPoints = isButton.slice(0, 5) + 'point';
    let isButtontext = isButton.slice(0, 5) + 'po';

        if (isButton.slice(-1) == '+' && backvalObj[isButtonPoints] < 5) {
            backvalObj.backpoint--;
            backvalObj[isButtonPoints]++;
            document.getElementById(isButtontext).innerText = backvalObj[isButtonPoints];
        }
        if (isButton.slice(-1) == '-' && backvalObj[isButtonPoints] > 0) {
            backvalObj.backpoint++;
            backvalObj[isButtonPoints]--;
            document.getElementById(isButtontext).innerText = backvalObj[isButtonPoints];
    }
});

wilconbutton.addEventListener('click', (e) => {
    let target = e.target;
    let isButton = target.id;
        switch (isButton) {
            case ('convi+'):
                if (conviction < 8) {
                    conviction++;
                    document.getElementById("convi").innerText = conviction;
                }
                break;
            case ('convi-'):
                if (conviction > 0) {
                    conviction--;
                    convictionfreebies--;
                    document.getElementById("convi").innerText = conviction;
                }
                break;
            case ('willp+'):
                if (willpower < 10) {
                    willpower++;
                    document.getElementById("willp").innerText = willpower;
                }
                break;
            case ('willp-'):
                if (willpower > 3) {
                    willpower--;
                    document.getElementById("willp").innerText = willpower;
                }
                break;
        }
});