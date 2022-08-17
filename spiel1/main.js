let KEY_SPACE = false; // 32
let canvas;
let ctx;
let backgroundImage = new Image();

let chicken = {
    x: 50,
    y: 200,
    width: 100,
    height: 50,
    src: 'img/chicken.png'
};

let ufos = [];
let shots = [];


document.onkeydown = function(e) {
    if (e.keyCode == 32) { // Leertaste gedrückt
        KEY_SPACE = true;
    }
}


document.onkeyup = function(e) {
    if (e.keyCode == 32) { // Leertaste losgelassen
        KEY_SPACE = false;
    }
}


function startGame() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    loadImages();
    setInterval(update, 1000 / 25);
    setInterval(createUfos, 1000);

    draw();
}

function update() {
    if (KEY_SPACE) {
        chicken.y -= 10;
    }
}

function createUfos() {
    let ufo = {
        x: 800,
        y: Math.random() * 500, // platzieren unsere UFOs an einem zufälligen Ort
        width: 100,
        height: 40,
        src: 'img/shot.png',
        img: new Image()
    };
    ufo.img.src = ufo.src; // Ufo-Bild wird geladen.
    ufos.push(ufo);
}




function loadImages() {
    backgroundImage.src = 'img/house.jpg';
    chicken.img = new Image();
    chicken.img.src = chicken.src;
}

function draw() {
    ctx.drawImage(backgroundImage, 0, 0);
    ctx.drawImage(chicken.img, chicken.x, chicken.y, chicken.width, chicken.height);

    ufos.forEach(function(ufo) {
        ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.width, ufo.height);
    });


    shots.forEach(function(shot) {
        ctx.drawImage(shot.img, shot.x, shot.y, shot.width, shot.height);
    });


    requestAnimationFrame(draw);
}