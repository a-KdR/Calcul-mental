// Ce script va permettre d'écrire dans les champs nombreA et nombreB
// et lire la réponse de l'utilisateur, lorsqu'il cliquera le bouton.
// v1.0 calcul des champs
// v1.1 ajout du framework CSS MetreoUI
// v1.2 ajout du bouton pour relancer le code

function tirageNombre(min, max) {
    // cette fonction tire un nombre au hasard entre min et max
    let nombre = Math.floor(Math.random() * (max-min+1)) + min
    return nombre
    }
    function ecrireNombre(ID, valeur) {
    document.querySelector(ID).value = valeur
    // document.getElementById(ID).value = valeur // autre possibilité
    }
    function lireNombre(ID) {
    return Number(document.querySelector(ID).value)
    }
    // Partie du code qui s'exécute dès l'appel du script dans la page web
    for (let t=0; t < 50; t++) {
    console.log(tirageNombre(5,50))
    }

    function init() {
        ecrireNombre("#nombreA", tirageNombre(1,50))
        ecrireNombre("#nombreB", tirageNombre(1,50))
        document.querySelector("#reponse").value = ""
        document.querySelector("#reponse").style.backgroundColor = "white"
        }
        // Lancement d'une séquence de calcul
        init()

    function repondre() {
        nbreCoupJoue++
        // cette fonction lit les champs et vérifie la bonne ou mauvaise réponse
        let resultatJuste = lireNombre("#nombreA") + lireNombre("#nombreB")
        let resultatUser = lireNombre("#reponse")
            // test d'égalité et modification de la couleur du champ réponse
        if (resultatUser == resultatJuste) {
                document.querySelector("#reponse").style.backgroundColor = 
                "#77FF00"
                nbreBonneReponse++
        } else {
                document.querySelector("#reponse").style.backgroundColor = 
                "#FFAA00"
        }
        reussite(nbreBonneReponse, nbreCoupJoue)
    }
    function reussite(bonne, coup) {
        // modifier la barre de réussite (MetroUI)
        let progression = Metro.getPlugin("#progression", "progress")
        progression.buff(100)
        progression.val(bonne/coup*100)
        document.querySelector("#preussite").innerHTML = "Réussite : "+bonne+" bonne(s) réponse(s) sur "+coup
        document.querySelector("#repondre").disabled=true
        document.querySelector("#repondre").disabled=false

    }
let nbreBonneReponse = 0
let nbreCoupJoue = 0
init()


                