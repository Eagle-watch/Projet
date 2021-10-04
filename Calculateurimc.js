function validez () {
let poids = document.getElementById('poids').value
let taille = document.getElementById('taille').value
let imc= poids/(taille*taille)
document.getElementById ('resultats').value = imc
} 

// let poids = document.getElementById('poids').value // je recupere la valeur sur la balise html qui as pour id poids // .value // je recupere la valeur de l'input
//document.getElementById ('resultats').value = imc // j'utilise la valeur de la balise html qui as pour id 'resultats' // = imc// Du coup mon resultats se fera dans cette case 