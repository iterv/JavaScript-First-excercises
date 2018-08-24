/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function pelaa() {
    var luku = Number(document.getElementById("luku").value);
    luku++;
    
    document.getElementById("havisit").innerHTML = "Hävisit niukasti, minun lukuni on " + luku;
}
