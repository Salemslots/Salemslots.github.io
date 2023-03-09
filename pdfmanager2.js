const { PDFDocument } = PDFLib

function fillbox (boxnumber, boxvalue, boxname, forms){
    for (let step = 0; step < boxvalue; step++){
        let box = boxnumber + step;
        forms.getCheckBox(boxname + box).check();
    }
}

async function fillForm2(){

    const formUrl = 'https://SamCK98.github.io/HtR1-Page_Editable.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    const nameField = form.getTextField('name');
    const playerField = form.getTextField('player');
    const chroniclesField = form.getTextField('chronicle');

    const natureField = form.getDropdown('nature');
    const demeanorField = form.getDropdown('demeanor');
    const conceptField = form.getTextField('concept');

    const privirField = form.getDropdown('pv');
    const creedField = form.getDropdown('creed');
    const staconField = form.getDropdown('sc');

    const edge1Field = form.getDropdown('edge1');
    const edge1creedField = form.getDropdown('edge_creed1');
    const edge2Field = form.getDropdown('edge2');
    const edge2creedField = form.getDropdown('edge_creed2');

    const back1Field = form.getDropdown('back1');
    const back2Field = form.getDropdown('back2');
    const back3Field = form.getDropdown('back3');
    const back4Field = form.getDropdown('back4');
    const back5Field = form.getDropdown('back5');

    nameField.setText(document.getElementById('huname').value);
    playerField.setText(document.getElementById('huplayer').value);
    chroniclesField.setText(document.getElementById('huchronicle').value);

    natureField.setOptions(archetypes);
    natureField.select(document.getElementById("naturedrop").value);
    demeanorField.setOptions(archetypes);
    demeanorField.select(document.getElementById("demeanordrop").value);
    conceptField.setText(document.getElementById("huconcept").value);

    privirField.select(document.getElementById("privirt").innerText);
    creedField.select(document.getElementById('creeddrop').value);
    staconField.select(document.getElementById('hustarcon').innerText);

    
    // Fill in Attributes

    fillbox(1, attrObj.strPoints, 'dot', form);
    fillbox(9, attrObj.dexPoints, 'dot', form);
    fillbox(17, attrObj.staPoints, 'dot', form);
    fillbox(25, attrObj.chaPoints, 'dot', form);
    fillbox(33, attrObj.manPoints, 'dot', form);
    fillbox(41, attrObj.appPoints, 'dot', form);
    fillbox(49, attrObj.perPoints, 'dot', form);
    fillbox(57, attrObj.intPoints, 'dot', form);
    fillbox(65, attrObj.witPoints, 'dot', form);


    // Fill in Abilities

    fillbox(73, abiliObj.alerPoints, 'dot', form);
    fillbox(81, abiliObj.athlPoints, 'dot', form);
    fillbox(89, abiliObj.awarPoints, 'dot', form);
    fillbox(97, abiliObj.brawPoints, 'dot', form);
    fillbox(105, abiliObj.dodgPoints, 'dot', form);
    fillbox(113, abiliObj.empaPoints, 'dot', form);
    fillbox(121, abiliObj.exprPoints, 'dot', form);
    fillbox(129, abiliObj.intiPoints, 'dot', form);
    fillbox(137, abiliObj.intuPoints, 'dot', form);
    fillbox(145, abiliObj.leadPoints, 'dot', form);
    fillbox(313, abiliObj.strePoints, 'dot', form);
    fillbox(321, abiliObj.subtPoints, 'dot', form);


    fillbox(153, abiliObj.animPoints, 'dot', form);
    fillbox(161, abiliObj.crafPoints, 'dot', form);
    fillbox(169, abiliObj.demoPoints, 'dot', form);
    fillbox(177, abiliObj.drivPoints, 'dot', form);
    fillbox(185, abiliObj.etiqPoints, 'dot', form);
    fillbox(193, abiliObj.firePoints, 'dot', form);
    fillbox(201, abiliObj.melePoints, 'dot', form);
    fillbox(209, abiliObj.perfPoints, 'dot', form);
    fillbox(217, abiliObj.secuPoints, 'dot', form);
    fillbox(225, abiliObj.steaPoints, 'dot', form);
    fillbox(329, abiliObj.survPoints, 'dot', form);
    fillbox(337, abiliObj.techPoints, 'dot', form);


    fillbox(233, abiliObj.acadPoints, 'dot', form);
    fillbox(241, abiliObj.burePoints, 'dot', form);
    fillbox(249, abiliObj.compPoints, 'dot', form);
    fillbox(257, abiliObj.finaPoints, 'dot', form);
    fillbox(265, abiliObj.invePoints, 'dot', form);
    fillbox(273, abiliObj.lawwPoints, 'dot', form);
    fillbox(281, abiliObj.lingPoints, 'dot', form);
    fillbox(289, abiliObj.mediPoints, 'dot', form);
    fillbox(297, abiliObj.occuPoints, 'dot', form);
    fillbox(305, abiliObj.poliPoints, 'dot', form);
    fillbox(345, abiliObj.resePoints, 'dot', form);
    fillbox(353, abiliObj.sciePoints, 'dot', form);


    // Fill in Edges + Creed

    edge1Field.select(edgechoice1);
    edge2Field.select(edgechoice2);

    if ((document.getElementById("edgedrop1").value).includes("Innocence")){
        edge1creedField.select("Innocence");
    }
    if ((document.getElementById("edgedrop2").value).includes("Innocence")){
        edge2creedField.select("Innocence");
    }
    if ((document.getElementById("edgedrop1").value).includes("Martyrdom")){
        edge1creedField.select("Martyrdom");
    }
    if ((document.getElementById("edgedrop2").value).includes("Martyrdom")){
        edge2creedField.select("Martyrdom");
    }
    if ((document.getElementById("edgedrop1").value).includes("Redemption")){
        edge1creedField.select("Redemption");
    }
    if ((document.getElementById("edgedrop2").value).includes("Redemption")){
        edge2creedField.select("Redemption");
    }
    if ((document.getElementById("edgedrop1").value).includes("Deviance")){
        edge1creedField.select("Martyrdom");
    }
    if ((document.getElementById("edgedrop2").value).includes("Deviance")){
        edge2creedField.select("Martyrdom");
    }
    if ((document.getElementById("edgedrop1").value).includes("Solitude")){
        edge1creedField.select("Innocence");
    }
    if ((document.getElementById("edgedrop2").value).includes("Solitude")){
        edge2creedField.select("Innocence");
    }
    if ((document.getElementById("edgedrop1").value).includes("Vision")){
        edge1creedField.select("Visionary");
    }
    if ((document.getElementById("edgedrop2").value).includes("Vision")){
        edge2creedField.select("Visionary");
    }
    if ((document.getElementById("edgedrop1").value).includes("Defense")){
        edge1creedField.select("Defense");
    }
    if ((document.getElementById("edgedrop2").value).includes("Defense")){
        edge2creedField.select("Defense");
    }
    if ((document.getElementById("edgedrop1").value).includes("Judgement")){
        edge1creedField.select("Judgement");
    }
    if ((document.getElementById("edgedrop2").value).includes("Judgement")){
        edge2creedField.select("Judgement");
    }
    if ((document.getElementById("edgedrop1").value).includes("Vengence")){
        edge1creedField.select("Vengence");
    }
    if ((document.getElementById("edgedrop2").value).includes("Vengence")){
        edge2creedField.select("Vengence");
    }


    // Fill in Edge Level

    if (document.getElementById("edgedrop1").value.slice(-1) == 2){
        fillbox(361, 2, 'dot', form);
    }
    else{
        fillbox(361, 1, 'dot', form);
    }
    
    if (document.getElementById("edgedrop2").value.slice(-1) == 2){
        fillbox(369, 2, 'dot', form);
    }
    else{
        fillbox(369, 1, 'dot', form);
    }

    //Fill in Virtues

    fillbox(1, mercy, 'vidot', form);
    fillbox(11, vision, 'vidot', form);
    fillbox(21, zeal, 'vidot', form);

    //Fill Backgrounds

    back1Field.select(document.getElementById("back1").value);
    back2Field.select(document.getElementById("back2").value);
    back3Field.select(document.getElementById("back3").value);
    back4Field.select(document.getElementById("back4").value);
    back5Field.select(document.getElementById("back5").value);

    //Fill in Background Points

    fillbox(432, backvalObj.back1point, 'dot', form);
    fillbox(440, backvalObj.back2point, 'dot', form);    
    fillbox(448, backvalObj.back3point, 'dot', form);
    fillbox(456, backvalObj.back4point, 'dot', form);
    fillbox(464, backvalObj.back5point, 'dot', form);


    //Fill in Conviction + Willpower

    fillbox(1, conviction, 'hdot', form);
    fillbox(1, willpower, 'willdot', form);

    const pdfBytes = await pdfDoc.save();
    download (pdfBytes, "HtR1-Page_Editable.pdf", "application/pdf");

}


document.getElementById("getpdfbutton2").addEventListener('click', function(){
        if (confirm("Are all points spend wisely?")){
            fillForm();
        }
})