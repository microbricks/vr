// ======================================
// SpaceOS VR
// dock.js
// ======================================

// Dock apps configuratie
const dockApps = [
    { name: "browser", color: "#4285F4" },
    { name: "spotify", color: "#1DB954" },
    { name: "discord", color: "#5865F2" },
    { name: "files", color: "#FFC107" },
    { name: "settings", color: "#AAAAAA" }
];

// Start dock zodra pagina geladen is
window.addEventListener("DOMContentLoaded", () => {
    createDock();
});


// ======================================
// Dock aanmaken
// ======================================

function createDock() {

    const dock = document.createElement("div");
    dock.className = "dock";

    dockApps.forEach(app => {

        const icon = document.createElement("div");
        icon.className = "icon";

        icon.style.background = app.color;

        icon.title = app.name;

        // klik actie
        icon.addEventListener("click", () => {
            openAppFromDock(app.name);
        });

        dock.appendChild(icon);

    });

    document.body.appendChild(dock);

    console.log("Dock geladen");
}


// ======================================
// Apps openen via dock
// ======================================

function openAppFromDock(appName) {

    console.log("Dock klik:", appName);

    // Check of windows.js bestaat
    if (typeof createWindow !== "undefined") {

        // als venster nog niet bestaat → maken
        createWindow(appName);

    }

    if (typeof openWindow !== "undefined") {

        openWindow(appName);

    }

}


// ======================================
// Highlight effect (optioneel VR gevoel)
// ======================================

function highlightDockIcon(appName) {

    const icons = document.querySelectorAll(".icon");

    icons.forEach(icon => {

        icon.style.transform = "scale(1)";

        if (icon.title === appName) {

            icon.style.transform = "scale(1.3)";

            icon.style.boxShadow = "0 0 25px cyan";

        }

    });

}
