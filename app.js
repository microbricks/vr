// ======================================
// SpaceOS VR
// app.js
// ======================================

console.log("SpaceOS VR gestart");

// Versie
const SYSTEM_NAME = "SpaceOS VR";
const VERSION = "1.0";

// Lijst van apps
const apps = {
    browser: false,
    spotify: false,
    notes: false,
    discord: false,
    files: false,
    settings: false
};

// ======================================
// Opstarten
// ======================================

function bootSystem() {

    console.log("Opstarten...");
    console.log(SYSTEM_NAME);
    console.log("Versie:", VERSION);

    showBootMessage();

}

bootSystem();


// ======================================
// Boot bericht
// ======================================

function showBootMessage() {

    const message = document.createElement("div");

    message.innerHTML = `
        <h1>SpaceOS VR</h1>
        <p>Starting...</p>
    `;

    message.style.position = "absolute";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%,-50%)";
    message.style.color = "white";
    message.style.textAlign = "center";
    message.style.fontFamily = "Segoe UI";

    document.body.appendChild(message);

    setTimeout(() => {

        message.remove();

    }, 2500);

}


// ======================================
// Apps openen
// ======================================

function openApp(appName) {

    if (apps[appName] === undefined) {

        console.log("App bestaat niet");

        return;
    }

    apps[appName] = true;

    console.log(appName + " geopend");

}


// ======================================
// Apps sluiten
// ======================================

function closeApp(appName) {

    if (apps[appName] === undefined) {

        return;

    }

    apps[appName] = false;

    console.log(appName + " gesloten");

}


// ======================================
// Status weergeven
// ======================================

function listRunningApps() {

    console.log("Actieve apps:");

    for (let app in apps) {

        if (apps[app]) {

            console.log("✓ " + app);

        }

    }

}


// ======================================
// Test
// ======================================

openApp("browser");
openApp("spotify");

setTimeout(() => {

    listRunningApps();

}, 2000);


// ======================================
// Tijd
// ======================================

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {

        minutes = "0" + minutes;

    }

    const timeString = hours + ":" + minutes;

    console.log("Tijd:", timeString);

}

setInterval(updateClock, 60000);


// ======================================
// Achtergronden
// ======================================

let environment = "space";

function setEnvironment(name) {

    environment = name;

    console.log("Nieuwe omgeving:", environment);

}


// ======================================
// Donkere modus
// ======================================

let darkMode = true;

function toggleDarkMode() {

    darkMode = !darkMode;

    console.log("Dark Mode:", darkMode);

}


// ======================================
// Volume
// ======================================

let volume = 75;

function setVolume(value) {

    volume = value;

    console.log("Volume:", volume);

}


// ======================================
// Systeeminformatie
// ======================================

function systemInfo() {

    console.log("Naam:", SYSTEM_NAME);
    console.log("Versie:", VERSION);
    console.log("Omgeving:", environment);
    console.log("Volume:", volume);

}
