talentspriochoice.addEventListener('change', (event) => {
    resettalPoints();
    abiliObj.alltalPoints = `${event.target.value}`;
    abiliObj.curtalPoints = abiliObj.alltalPoints;
    taltexts.textContent = abiliObj.alltalPoints;
    if (abiliObj.alltalPoints != 0) {
        if (abiliObj.allskiPoints == abiliObj.alltalPoints) {
            resetskiPoints(2);
        }
        if (abiliObj.allknoPoints == abiliObj.alltalPoints) {
            resetknoPoints(2);
        }
    }
    if (abiliObj.alltalPoints == 0) {
        resettalPoints(2);
    }
});

skillpriochoice.addEventListener('change', (event) => {
    resetskiPoints();
    abiliObj.allskiPoints = `${event.target.value}`;
    skitexts.textContent = abiliObj.allskiPoints;
    abiliObj.curskiPoints = abiliObj.allskiPoints;
    if (abiliObj.allskiPoints != 0) {
        if (abiliObj.alltalPoints == abiliObj.allskiPoints) {
            resettalPoints(2);
        }
        if (abiliObj.allknoPoints == abiliObj.allskiPoints) {
            resetknoPoints(2);
        }
    }
    if (abiliObj.allskiPoints == 0) {
        resetskiPoints(2);
    }
});

knowpriochoice.addEventListener('change', (event) => {
    resetknoPoints();
    abiliObj.allknoPoints = `${event.target.value}`;
    knotexts.textContent = abiliObj.allknoPoints;
    abiliObj.curknoPoints = abiliObj.allknoPoints;
    if (abiliObj.allknoPoints != 0) {
        if (abiliObj.allskiPoints == abiliObj.allknoPoints) {
            resetskiPoints(2);
        }
        if (abiliObj.alltalPoints == abiliObj.allknoPoints) {
            resettalPoints(2);
        }
    }
    if (abiliObj.allknoPoints == 0) {
        resetknoPoints(2);
    }
});

function resettalPoints(val) {
    if (val == 2) {
        talentspriochoice.value = 0;
        taltexts.textContent = 0;
        abiliObj.alltalPoints = 0;
        abiliObj.curtalPoints = 0;
    }
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
}

function resetskiPoints(val) {
    if (val == 2) {
        skillpriochoice.value = 0;
        skitexts.textContent = 0;
        abiliObj.allskiPoints = 0;
        abiliObj.curskiPoints = 0;
    }
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
}

function resetknoPoints(val) {
    if (val == 2) {
        knowpriochoice.value = 0;
        knotexts.textContent = 0;
        abiliObj.allknoPoints = 0;
        abiliObj.curknoPoints = 0;
    }
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

function resetallabi() {
    resettalPoints(2);
    resetskiPoints(2);
    resetknoPoints(2);
}

capbutton2.addEventListener('click', (e) => {
    let isButton = e.target.id;
    let isButtonPoints = isButton.slice(0, 4) + 'Points';
    let isButtontext = isButton.slice(0, 4) + 'po';
    let isButtontype = isButton.slice(-2, -1);
    let isButtonfreebiePoints = isButton.slice(0, 4) + 'freePoints';
    let isButtonpsm;
    let isButtonpsmtext;

    switch (isButtontype) {
        case ('t'):
            isButtonpsm = 'curtalPoints';
            isButtonpsmtext = 'taltext';
            break;
        case ('s'):
            isButtonpsm = 'curskiPoints';
            isButtonpsmtext = 'skilltext';
            break;
        case ('k'):
            isButtonpsm = 'curknoPoints';
            isButtonpsmtext = 'knowtext';
    }

    if (freebiecode == false) {
        if (isButton.slice(-1) == '+' && abiliObj[isButtonPoints] < 3 && abiliObj[isButtonpsm] > 0) {
            abiliObj[isButtonPoints]++;
            abiliObj[isButtonpsm]--;
            document.getElementById(isButtontext).innerText = abiliObj[isButtonPoints];
            document.getElementById(isButtonpsmtext).innerText = abiliObj[isButtonpsm];
        }
        if (isButton.slice(-1) == '-' && abiliObj[isButtonPoints] > 0) {
            abiliObj[isButtonPoints]--;
            abiliObj[isButtonpsm]++;
            document.getElementById(isButtontext).innerText = abiliObj[isButtonPoints];
            document.getElementById(isButtonpsmtext).innerText = abiliObj[isButtonpsm];
        }
    }
    else {
        if (isButton.slice(-1) == '+' && abiliObj[isButtonPoints] < 5 && freebiepoints > 1) {
            abiliObj[isButtonPoints]++;
            abiliObj[isButtonfreebiePoints]++;
            freebiepoints = freebiepoints - 2;
            document.getElementById(isButtontext).innerText = abiliObj[isButtonPoints];
            freebietext.innerText = freebiepoints;
        }
        if (isButton.slice(-1) == '-' && abiliObj[isButtonPoints] > 0 && abiliObj[isButtonfreebiePoints] > 0) {
            abiliObj[isButtonPoints]--;
            abiliObj[isButtonfreebiePoints]--;
            freebiepoints = freebiepoints + 2;
            document.getElementById(isButtontext).innerText = abiliObj[isButtonPoints];
            freebietext.innerText = freebiepoints;
        }

    }
});
