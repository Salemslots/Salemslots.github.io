import { PDFDocument } from 'https://unpkg.com/pdf-lib/dist/pdf-lib.js'

async function fillForm(){

    const formUrl = 'https://SamCK98.github.io/HtR1-Page_Editable.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    const nameField = form.getTextField('name');
    const playerField = form.getTextField('player');
    const chroniclesField = form.getTextField('chronicles');

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
    playerField.setText(document.getElementById('huplayer'));
    chroniclesField.setText(document.getElementById('huchronicle'));

    natureField.setOptions(archetypes);
    natureField.select(document.getElementById("naturedrop").value);
    demeanorField.setOptions(archetypes);
    demeanorField.select(document.getElementById("demeanordrop").value);
    conceptField.setText(document.getElementById("huconcept").value);

    privirField.select(document.getElementById("privirt").value);
    creedField.select(document.getElementById('creeddrop').value);
    staconField.select(virtuevalueoverall);


    // Fill in Attributes

    fillbox(1, attrObj.strPoints, 'dot');
    fillbox(9, attrObj.dexPoints, 'dot');
    fillbox(17, attrObj.staPoints, 'dot');
    fillbox(25, attrObj.chaPoints, 'dot');
    fillbox(33, attrObj.manPoints, 'dot');
    fillbox(41, attrObj.appPoints, 'dot');
    fillbox(49, attrObj.perPoints, 'dot');
    fillbox(57, attrObj.intPoints, 'dot');
    fillbox(65, attrObj.witPoints, 'dot');


    // Fill in Abilities

    fillbox(73, abiliObj.alerPoints, 'dot');
    fillbox(81, abiliObj.athlPoints, 'dot');
    fillbox(89, abiliObj.awarPoints, 'dot');
    fillbox(97, abiliObj.brawPoints, 'dot');
    fillbox(105, abiliObj.dodgPoints, 'dot');
    fillbox(113, abiliObj.empaPoints, 'dot');
    fillbox(121, abiliObj.exprPoints, 'dot');
    fillbox(129, abiliObj.intiPoints, 'dot');
    fillbox(137, abiliObj.intuPoints, 'dot');
    fillbox(145, abiliObj.leadPoints, 'dot');
    fillbox(313, abiliObj.strePoints, 'dot');
    fillbox(321, abiliObj.subtPoints, 'dot');


    fillbox(153, abiliObj.animPoints, 'dot');
    fillbox(161, abiliObj.crafPoints, 'dot');
    fillbox(169, abiliObj.demoPoints, 'dot');
    fillbox(177, abiliObj.drivPoints, 'dot');
    fillbox(185, abiliObj.etiqPoints, 'dot');
    fillbox(193, abiliObj.firePoints, 'dot');
    fillbox(201, abiliObj.melePoints, 'dot');
    fillbox(209, abiliObj.perfPoints, 'dot');
    fillbox(217, abiliObj.secuPoints, 'dot');
    fillbox(225, abiliObj.steaPoints, 'dot');
    fillbox(329, abiliObj.survPoints, 'dot');
    fillbox(337, abiliObj.techPoints, 'dot');


    fillbox(223, abiliObj.acadPoints, 'dot');
    fillbox(241, abiliObj.burePoints, 'dot');
    fillbox(249, abiliObj.compPoints, 'dot');
    fillbox(257, abiliObj.finaPoints, 'dot');
    fillbox(265, abiliObj.invePoints, 'dot');
    fillbox(273, abiliObj.lawwPoints, 'dot');
    fillbox(281, abiliObj.lingPoints, 'dot');
    fillbox(289, abiliObj.mediPoints, 'dot');
    fillbox(297, abiliObj.occuPoints, 'dot');
    fillbox(305, abiliObj.poliPoints, 'dot');
    fillbox(345, abiliObj.resePoints, 'dot');
    fillbox(353, abiliObj.sciePoints, 'dot');


    // Fill in Edges + Creed

    edge1Field.setOptions(edgesFull);
    edge2Field.setOptions(edgesFull);
    edge1Field.select(document.getElementById("edgedrop1").value);
    edge2Field.select(document.getElementById("edgedrop2").value);

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


    //Fill in Virtues

    fillbox(1, mercy, 'vidot');
    fillbox(11, vision, 'vidot');
    fillbox(21, zeal, 'vidot');

    //Fill Backgrounds

    back1Field.select(document.getElementById("back1").value);
    back2Field.select(document.getElementById("back2").value);
    back3Field.select(document.getElementById("back3").value);
    back4Field.select(document.getElementById("back4").value);
    back5Field.select(document.getElementById("back5").value);

    //Fill in Background Points

    fillbox(432, backvalObj.back1point, 'dot');
    fillbox(440, backvalObj.back2point, 'dot');    
    fillbox(448, backvalObj.back3point, 'dot');
    fillbox(456, backvalObj.back4point, 'dot');
    fillbox(464, backvalObj.back5point, 'dot');


    //Fill in Conviction + Willpower

    fillbox(1, conviction, 'hdot');
    fillbox(1, willpower, 'willdot');

    const pdfBytes = await pdfDoc.save();
    download (pdfBytes, "HtR1-Page_Editable.pdf", "application/pdf");

}



document.getElementById("getpdfbutton").addEventListener('click', function(){
    if (freebiecode == false){
        confirm("You still have points to spend!")
    }
    if (freebiecode == true && freebiepoints != 0){
        if (confirm("You still have freebiepoints... Cancel if you still want to spend them")){
            fillForm();
        }
    }
    if (freebiecode == true && freebiepoints == 0){
        fillForm();
    }

})

