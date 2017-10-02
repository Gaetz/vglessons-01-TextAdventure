let canvas;
let canvasContext;
let text;
let keySpace;

window.onload = function () {
    load();

    setInterval(() => {
        update();
        draw();
    }, 1000 / 60);
}

function load() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    document.addEventListener('keydown', detectKey, false);

    text = 'Alors du veux créer des jeux vidéo ?' +
    'G pour devenir Game Designer\ ' +
    'A pour devenir Artiste' +
    'P pour devenir Programmeur' +
    'Z pour devenir Producteur';
}

function detectKey(e) {
    if (e.keyCode == 32) {
        keySpace = true;
    }
}

function update() {
    if (keySpace) {
        text = 'Bien ou bien ?';
    }
}

function draw() {
    // Fill in black
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, 800, 600);
    // Draw in white
    canvasContext.fillStyle = 'white';
    canvasContext.fillText(text, 50, 50);
}