function chrono (){
    let fin = new Date('2022-07-20T17:00:00')

let jour = document.getElementById('jour')
let heures = document.getElementById('heures')
let minutes = document.getElementById('minutes')
let secondes = document.getElementById('secondes')
let debut = new Date ()
let duree = fin - debut
jour.innerHTML = Math.floor (duree/1000/60/60/24)
heures.innerHTML = Math.floor (duree/1000/60/60%24)
minutes.innerHTML= Math.floor (duree/1000/60%60)
secondes.innerHTML= Math.floor (duree/1000%60)
}
setInterval(chrono,500)