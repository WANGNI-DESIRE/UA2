var boule = document.getElementById("boule");
var direction = 1; // 1 pour descendre, -1 pour monter
var vitesse = 0.02; 

function scrollAuto() {
    var position = boule.getAttribute("position");
    position.y += direction * vitesse;
    boule.setAttribute("position", position);
    
   
    if (position.y >= 3 || position.y <= -3) {
        direction *= -1;
    }
}
