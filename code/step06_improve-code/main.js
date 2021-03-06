let canvas;
let canvasContext;
let text;
let keySpace, keyA, keyG, keyM, keyP, keyS, keyZ;
let state;

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
    
    state = 'start';
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
    if (e.keyCode == 77) {
        keyM = true;
    }
    if (e.keyCode == 80) {
        keyP = true;
    }
    if (e.keyCode == 83) {
        keyS = true;
    }
    if (e.keyCode == 90) {
        keyZ = true;
    }
}

function update() {
    if(state == 'start') {
        if (keyA) {
            text = [];
            text.push('Tu te spécialises en graphisme 2D ou en 3D ?');
            text.push('D pour 2D');
            text.push('T pour 3D');
            changeState('artiste');
        }
        if (keyG) {
            text = [];
            text.push('Tu préfères les petits jeux Smartphones ou les Grosses productions ?');
            text.push('S pour Smartphone');
            text.push('G pour Grosses production');
            changeState('gd');
        }
        if (keyP) {
            text = [];
            text.push('Plutôt programmeur Gameplay ou Moteur ?');
            text.push('G pour Gameplay');
            text.push('M pour Moteur');
            changeState('programmeur');
        }
        if (keyZ) {
            text = [];
            text.push('Tu travailles en Freelance ou dans une Entreprise ?');
            text.push('F pour Freelance');        
            text.push('E pour Entreprise');
            changeState('producteur');
        }
    }
    if(state == 'gd') {
        if (keyG) {
            text = [];
            text.push('Il te faudra te spécialiser au sein d\'une équipe.');
            changeState('gd grosses productions');
        }
        if (keyS) {
            text = [];
            text.push('Tu vas devoir travailler seul sur plusieurs compétences.');
            changeState('gd smartphones');
        }
    }
    if(state == 'programmeur') {
        if (keyG) {
            text = [];
            text.push('Un boulot répandu et facile à trouver.');
            changeState('programmeur gameplay');
        }
        if (keyM) {
            text = [];
            text.push('Un boulot assez spécifique, mais très apprécié.');
            changeState('programmeur moteur');
        }
    }


    if (keySpace) {
        text = 'Bien ou bien ?';
    }
}

function changeState(newState) {
    state = newState;
    resetKeys();
}

function resetKeys() {
    keySpace = keyA = keyG = keyM = keyP = keyS = keyZ = false;
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