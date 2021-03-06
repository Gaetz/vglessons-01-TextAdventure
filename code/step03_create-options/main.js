let canvas;
let canvasContext;
let text;
let keySpace, keyA, keyG, keyP, keyZ;

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
    if (e.keyCode == 65) {
        keyA = true;
    }
    if (e.keyCode == 71) {
        keyG = true;
    }
    if (e.keyCode == 80) {
        keyP = true;
    }
    if (e.keyCode == 90) {
        keyZ = true;
    }
}

function update() {
    if (keySpace) {
        text = 'Bien ou bien ?';
    }
    if (keyA) {
        text = [];
        text.push('Tu te spécialises en graphisme 2D ou en 3D ?');
        text.push('D pour 2D');
        text.push('T pour 3D');
    }
    if (keyG) {
        text = [];
        text.push('Tu préfères les petits jeux Smartphones ou les Grosses productions ?');
        text.push('S pour Smartphone');
        text.push('G pour Grosses production');
    }
    if (keyP) {
        text = [];
        text.push('Plutôt programmeur Gameplay ou Moteur ?');
        text.push('G pour Gameplay');
        text.push('M pour Moteur');
    }
    if (keyZ) {
        text = [];
        text.push('Tu travailles en Freelance ou dans une Entreprise ?');
        text.push('F pour Freelance');        
        text.push('E pour Entreprise');
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