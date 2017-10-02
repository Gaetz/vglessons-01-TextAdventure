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

    text = [];
    text.push('Alors du veux créer des jeux vidéo ?');
    text.push('G pour devenir Game Designer');
    text.push('A pour devenir Artiste');
    text.push('P pour devenir Programmeur');
    text.push('Z pour devenir Producteur');
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
    // Draw
    canvasContext.fillStyle = 'white';
    for (let i = 0; i < text.length; i++) {
        canvasContext.fillText(text[i], 50, 50 + i * 20);
    }
}