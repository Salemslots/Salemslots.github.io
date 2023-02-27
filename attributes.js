phypriochoice.addEventListener('change', (event) => {
    resetphyPoints();
    attrObj.allphyPoints = `${event.target.value}`;
    attrObj.curphyPoints = attrObj.allphyPoints;
    phytext.textContent = attrObj.allphyPoints;
    if (attrObj.allphyPoints != 0) {
        if (attrObj.allsocPoints == attrObj.allphyPoints) {
            resetsocPoints(2);
        }
        if (attrObj.allmenPoints == attrObj.allphyPoints) {
            resetmenPoints(2);
        }
    }
    if (attrObj.allphyPoints == 0) {
        resetphyPoints(2);
    }
});

socpriochoice.addEventListener('change', (event) => {
    resetsocPoints();
    attrObj.allsocPoints = `${event.target.value}`;
    soctext.textContent = attrObj.allsocPoints;
    attrObj.cursocPoints = attrObj.allsocPoints;
    if (attrObj.allphyPointsallsocPoints != 0) {
        if (attrObj.allphyPoints == attrObj.allsocPoints) {
            resetphyPoints(2);
        }
        if (attrObj.allmenPoints == attrObj.allsocPoints) {
            resetmenPoints(2);
        }
    }
    if (attrObj.allsocPoints == 0) {
        resetsocPoints(2);
    }
});

menpriochoice.addEventListener('change', (event) => {
    resetmenPoints();
    attrObj.allmenPoints = `${event.target.value}`;
    mentext.textContent = attrObj.allmenPoints;
    attrObj.curmenPoints = attrObj.allmenPoints;
    if (attrObj.allmenPoints != 0) {
        if (attrObj.allsocPoints == attrObj.allmenPoints) {
            resetsocPoints(2);
        }
        if (attrObj.allphyPoints == attrObj.allmenPoints) {
            resetphyPoints(2);
        }
    }
    if (attrObj.allmenPoints == 0) {
        resetmenPoints(2);
    }
});

function resetphyPoints(val) {
    if (val == 2) {
        phypriochoice.value = 0;
        phytext.textContent = 0;
        attrObj.allphyPoints = 0;
        attrObj.curphyPoints = 0;
    }
    attrObj.strPoints = 1;
    document.getElementById("strpo").innerText = 1;
    attrObj.dexPoints = 1;
    document.getElementById("dexpo").innerText = 1;
    attrObj.staPoints = 1;
    document.getElementById("stapo").innerText = 1;
}

function resetsocPoints(val) {
    if (val == 2) {
        socpriochoice.value = 0;
        soctext.textContent = 0;
        attrObj.allsocPoints = 0;
        attrObj.cursocPoints = 0;
    }
    attrObj.chaPoints = 1;
    document.getElementById("chapo").innerText = 1;
    attrObj.manPoints = 1;
    document.getElementById("manpo").innerText = 1;
    attrObj.appPoints = 1;
    document.getElementById("apppo").innerText = 1;
}

function resetmenPoints(val) {
    if (val == 2) {
        menpriochoice.value = 0;
        mentext.textContent = 0;
        attrObj.allmenPoints = 0;
        attrObj.curmenPoints = 0;
    }
    attrObj.perPoints = 1;
    document.getElementById("perpo").innerText = 1;
    attrObj.intPoints = 1;
    document.getElementById("intpo").innerText = 1;
    attrObj.witPoints = 1;
    document.getElementById("witpo").innerText = 1;
}

function resetallatt() {
    resetmenPoints(2);
    resetphyPoints(2);
    resetsocPoints(2);
}

capbutton.addEventListener('click', (e) => {
    let isButton = e.target.id;
    let isButtonPoints = isButton.slice(0, 3) + 'Points';
    let isButtontext = isButton.slice(0, 3) + 'po';
    let isButtontype = isButton.slice(-2, -1);
    let isButtonfreebiePoints = isButton.slice(0, 3) + 'freePoints';
    let isButtonpsm;
    let isButtonpsmtext;

    switch (isButtontype) {
        case ('p'):
            isButtonpsm = 'curphyPoints';
            isButtonpsmtext = 'phytext';
            break;
        case ('s'):
            isButtonpsm = 'cursocPoints';
            isButtonpsmtext = 'soctext';
            break;
        case ('m'):
            isButtonpsm = 'curmenPoints';
            isButtonpsmtext = 'mentext';
    }

    if (freebiecode == false) {
        if (isButton.slice(-1) == '+' && attrObj[isButtonPoints] < 5 && attrObj[isButtonpsm] > 0) {
            attrObj[isButtonPoints]++;
            attrObj[isButtonpsm]--;
            document.getElementById(isButtontext).innerText = attrObj[isButtonPoints];
            document.getElementById(isButtonpsmtext).innerText = attrObj[isButtonpsm];
        }
        if (isButton.slice(-1) == '-' && attrObj[isButtonPoints] > 1) {
            attrObj[isButtonPoints]--;
            attrObj[isButtonpsm]++;
            document.getElementById(isButtontext).innerText = attrObj[isButtonPoints];
            document.getElementById(isButtonpsmtext).innerText = attrObj[isButtonpsm];
        }
    }
    else {
        if (isButton.slice(-1) == '+' && attrObj[isButtonPoints] < 5 && freebiepoints > 4) {
            attrObj[isButtonPoints]++;
            attrObj[isButtonfreebiePoints]++;
            freebiepoints = freebiepoints - 5;
            document.getElementById(isButtontext).innerText = attrObj[isButtonPoints];
            freebietext.innerText = freebiepoints;
        }
        if (isButton.slice(-1) == '-' && attrObj[isButtonPoints] > 1 && attrObj[isButtonfreebiePoints] > 0) {
            attrObj[isButtonPoints]--;
            attrObj[isButtonfreebiePoints]--;
            freebiepoints = freebiepoints + 5;
            document.getElementById(isButtontext).innerText = attrObj[isButtonPoints];
            freebietext.innerText = freebiepoints;
        }

    }
});