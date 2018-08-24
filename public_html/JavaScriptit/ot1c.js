
function laskepaketti() {
    
    var emolevy = Number(document.getElementById("emolevy").value);
    var prosessori = Number(document.getElementById("prosessori").value);
    var muisti = Number(document.getElementById("muisti").value);
    var kiintolevy = Number(document.getElementById("kiintolevy").value);
    var kotelo = Number(document.getElementById("kotelo").value);
    var naytonohjain = Number(document.getElementById("naytonohjain").value);
    var virtalahde = Number(document.getElementById("virtalahde").value);
    
    var yhteensa = emolevy + prosessori + muisti + kiintolevy + kotelo + naytonohjain + virtalahde;
    
    document.getElementById("tulostustilaC").innerHTML = "Tietokonepakettisi yhteishinta on " + yhteensa + " €.";
    
}