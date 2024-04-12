function soumettreDevinette() {
    var devinette = document.getElementById("guessInput").value;
    document.getElementById("couleurDevinee").innerText = "\n Votre Devine est :" + devinette + "\n\n";
}

function changerCouleur() {
    var element = document.getElementById("conteneur");
    var couleurAleatoire = getCouleurAleatoire();
    element.style.backgroundColor = couleurAleatoire;
}

function getCouleurAleatoire() {
    var lettres = '0123456789ABCDEF';
    var couleur = '#';
    for (var i = 0; i < 6; i++) {
        couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
}
