// ======================================
// SpaceOS VR
// windows.js
// ======================================

// Alle vensters
const windows = {};

// Maak een nieuw venster
function createWindow(name, x = 0, y = 2, z = -4, width = 2, height = 1.2) {

    // Bestaat al?
    if (windows[name]) {
        console.log(name + " bestaat al");
        return;
    }

    // Zoek scene
    const scene = document.querySelector("a-scene");

    // Venster
    const windowEntity = document.createElement("a-plane");

    windowEntity.setAttribute("position", `${x} ${y} ${z}`);
    windowEntity.setAttribute("width", width);
    windowEntity.setAttribute("height", height);
    windowEntity.setAttribute("color", "#222");
    windowEntity.setAttribute("opacity", "0.85");

    // Titel
    const title = document.createElement("a-text");

    title.setAttribute("value", name);
    title.setAttribute("align", "center");
    title.setAttribute("color", "white");
    title.setAttribute("position", "0 0.75 0.01");

    windowEntity.appendChild(title);

    scene.appendChild(windowEntity);

    windows[name] = {
        entity: windowEntity,
        minimized: false
    };

    console.log(name + " gemaakt");
}



// Open venster
function openWindow(name) {

    if (!windows[name]) return;

    windows[name].entity.setAttribute("visible", true);

    console.log(name + " geopend");

}



// Sluit venster
function closeWindow(name) {

    if (!windows[name]) return;

    windows[name].entity.setAttribute("visible", false);

    console.log(name + " gesloten");

}



// Minimaliseren
function minimizeWindow(name) {

    if (!windows[name]) return;

    windows[name].minimized = true;

    windows[name].entity.setAttribute("scale", "0.2 0.2 0.2");

    console.log(name + " geminimaliseerd");

}



// Herstellen
function restoreWindow(name) {

    if (!windows[name]) return;

    windows[name].minimized = false;

    windows[name].entity.setAttribute("scale", "1 1 1");

    console.log(name + " hersteld");

}



// Verplaatsen
function moveWindow(name, x, y, z) {

    if (!windows[name]) return;

    windows[name].entity.setAttribute(
        "position",
        `${x} ${y} ${z}`
    );

}



// Vergroten
function resizeWindow(name, width, height) {

    if (!windows[name]) return;

    windows[name].entity.setAttribute("width", width);
    windows[name].entity.setAttribute("height", height);

}



// Verwijderen
function destroyWindow(name) {

    if (!windows[name]) return;

    windows[name].entity.remove();

    delete windows[name];

    console.log(name + " verwijderd");

}



// Lijst actieve vensters
function listWindows() {

    console.log("Actieve vensters:");

    for (let name in windows) {

        console.log(name);

    }

}



// ======================================
// TEST
// ======================================

createWindow("Browser");
createWindow("Spotify", 3, 1.8, -5);
createWindow("Notities", -3, 1.8, -5);


// Voorbeelden

// moveWindow("Browser",0,3,-6);

// resizeWindow("Browser",3,2);

// minimizeWindow("Spotify");

// restoreWindow("Spotify");

// closeWindow("Notities");
