document.addEventListener("DOMContentLoaded", function(e) {

// Variabelen aanmaken
let maagje = 5;
let blijdschap = 5;

// HTML-elementen selecteren
const statusTekst = document.querySelector("#status");
const voerKnop = document.querySelector("#voer");
const speelKnop = document.querySelector("#speel");
const maagjeBar = document.querySelector("#maagje-bar");
const blijdschapBar = document.querySelector("#blijdschap-bar");
const poesImg = document.querySelector("#blij");

// Miauw-geluid laden - Bron:
const miauwGeluid = new Audio("sounds/miauw.mp3");

// Functie om Bibi te voeren
function voerBibi() {
    if (maagje < 10) {
        maagje++;
        maagjeBar.value = maagje;
    }
    updateStatus();
}

// Functie om met Bibi te spelen
function speelMetBibi() {
    if (blijdschap < 10) {
        blijdschap++;
        blijdschapBar.value = blijdschap;
    }
    updateStatus();
}

// Automatische afname van maagje en blijdschap
setInterval(() => {
    if (maagje > 0) {
        maagje--;
        maagjeBar.value = maagje;
    }

    if (blijdschap > 0) {
        blijdschap--;
        blijdschapBar.value = blijdschap;
    }

    updateStatus();
}, 5000);

// Functie om status en afbeelding bij te werken
function updateStatus() {
    if (maagje === 0 || blijdschap === 0) {
        statusTekst.textContent = "Bibi is verdrietig 😿";
        poesImg.src = "images/huilendekat.png";
        
        // Speel miauw-geluid af
        miauwGeluid.play();
    } else {
        statusTekst.textContent = "Bibi is blij 😊";
        poesImg.src = "images/bibidekat.png";
    }
}

// Event listeners toevoegen
voerKnop.addEventListener("click", voerBibi);
speelKnop.addEventListener("click", speelMetBibi);
});
