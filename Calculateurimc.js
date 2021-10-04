function validez () {
let poids = document.getElementById('poids').value
let taille = document.getElementById('taille').value
let imc= poids/(taille*taille)
document.getElementById ('resultats').value = imc
} 

