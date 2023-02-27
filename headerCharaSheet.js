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
        virtext.innerText = 3;
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
        virtext.innerText = 4;
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
    document.getElementById("virtuetext").innerText = virtuevalueoverall;
    if (chosencreed == '--'){
        creedset = false;
        virtuevalue = 0;
        virtuevalueoverall = 0;
        document.getElementById("hustarcon").innerText = "--";
        document.getElementById("convi").innerText = "--";
        document.getElementById("virtuetext").innerText = "--";
        document.getElementById("privirt").innerText = "--";
    }
})

virbutton.addEventListener('click', (e) => {
    let target = e.target;
    let isButton = target.id;
    switch (isButton) {
        case ('mercy+'):
            if (virtuevalue > 0) {
                virtuevalue--;
                virtext.innerText = virtuevalue;
                mercy++;
                mercytext.innerText = mercy;
            }
            break;
        case ('mercy-'):
            if (virtuevalue < virtuevalueoverall && mercy > 0) {
                virtuevalue++;
                virtext.innerText = virtuevalue;
                mercy--;
                mercytext.innerText = mercy;
            }
            break;
        case ('vision+'):
            if (virtuevalue > 0) {
                virtuevalue--;
                virtext.innerText = virtuevalue;
                vision++;
                visiontext.innerText = vision;
            }
            break;
        case ('vision-'):
            if (virtuevalue < virtuevalueoverall && vision > 0) {
                virtuevalue++;
                virtext.innerText = virtuevalue;
                vision--;
                visiontext.innerText = vision;
            }
            break;
        case ('zeal+'):
            if (virtuevalue > 0) {
                virtuevalue--;
                virtext.innerText = virtuevalue;
                zeal++;
                zealtext.innerText = zeal;
            }
            break;
        case ('zeal-'):
            if (virtuevalue < virtuevalueoverall && zeal > 0) {
                virtuevalue++;
                virtext.innerText = virtuevalue;
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
    let isButtonfreebiePoints = isButton.slice(0, 5) + 'freepoint';

    if (freebiecode == false) {
        if (isButton.slice(-1) == '+' && backvalObj[isButtonPoints] < 5 && backvalObj.backpoint > 0) {
            backvalObj.backpoint--;
            backvalObj[isButtonPoints]++;
            document.getElementById(isButtontext).innerText = backvalObj[isButtonPoints];
            backtext.innerText = backvalObj.backpoint;
        }
        if (isButton.slice(-1) == '-' && backvalObj[isButtonPoints] > 0) {
            backvalObj.backpoint++;
            backvalObj[isButtonPoints]--;
            document.getElementById(isButtontext).innerText = backvalObj[isButtonPoints];
            backtext.innerText = backvalObj.backpoint;
        }
    }
    else {
        if (isButton.slice(-1) == '+' && backvalObj[isButtonPoints] < 5 && freebiepoints > 0) {
            backvalObj[isButtonPoints]++;
            backvalObj[isButtonfreebiePoints]++;
            freebiepoints--;
            document.getElementById(isButtontext).innerText = backvalObj[isButtonPoints];
            freebietext.innerText = freebiepoints;
        }
        if (isButton.slice(-1) == '-' && backvalObj[isButtonPoints] > 0 && backvalObj[isButtonfreebiePoints] > 0) {
            backvalObj[isButtonPoints]--;
            backvalObj[isButtonfreebiePoints]--;
            freebiepoints++;
            document.getElementById(isButtontext).innerText = backvalObj[isButtonPoints];
            freebietext.innerText = freebiepoints;
        }
    }
});

wilconbutton.addEventListener('click', (e) => {
    let target = e.target;
    let isButton = target.id;
    if (freebiecode == true) {
        switch (isButton) {
            case ('convi+'):
                if (freebiepoints > 0 && conviction < 8) {
                    conviction++;
                    convictionfreebies++;
                    freebiepoints--;
                    freebietext.innerText = freebiepoints;
                    document.getElementById("convi").innerText = conviction;
                }
                break;
            case ('convi-'):
                if (convictionfreebies > 0) {
                    conviction--;
                    convictionfreebies--;
                    freebiepoints++;
                    freebietext.innerText = freebiepoints;
                    document.getElementById("convi").innerText = conviction;
                }
                break;
            case ('willp+'):
                if (freebiepoints > 0 && willpower < 10) {
                    willpower++;
                    freebiepoints--;
                    freebietext.innerText = freebiepoints;
                    document.getElementById("willp").innerText = willpower;
                }
                break;
            case ('willp-'):
                if (willpower > 3) {
                    willpower--;
                    freebiepoints++;
                    freebietext.innerText = freebiepoints;
                    document.getElementById("willp").innerText = willpower;
                }
                break;
        }
    }
});

document.getElementById("freebies").addEventListener('click', (e) => {
    let warningtxt = "If you enter freebie mode, you can't change any of your prior choices. Are you happy with your current sheet and want to move on?";
    let doesntworktxt = "You still have points to spend!";

    if (phypriochoice.value == 0 || socpriochoice.value == 0 || menpriochoice.value == 0 ||
        talentspriochoice.value == 0 || skillpriochoice.value == 0 || knowpriochoice.value == 0 ||
        attrObj.curmenPoints != 0 || attrObj.curphyPoints != 0 || attrObj.cursocPoints != 0 ||
        abiliObj.curknoPoints != 0 || abiliObj.curskiPoints != 0 || abiliObj.curtalPoints != 0 ||
        creedset == false || virtuevalue != 0 || backvalObj.backpoint != 0
        ){
        confirm(doesntworktxt);
    }
    else {
    if (confirm(warningtxt)) {
        freebiecode = true;
        document.getElementById("creeddrop").disabled = true;
        phypriochoice.disabled = true;
        socpriochoice.disabled = true;
        menpriochoice.disabled = true;
        talentspriochoice.disabled = true;
        skillpriochoice.disabled = true;
        knowpriochoice.disabled = true;
    }}
})

