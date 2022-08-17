let canvas;
let ctx;
let backgroundImage = new Image();

function startGame() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    loadImages();
    draw();
    setInterval(createCarps, 2000);
    document.getElementById('InfoBox');
    InfoBox.innerHTML = "";
    console.log('Jaaaaa');
}

let Carps = [];
function draw() {
    ctx.drawImage(backgroundImage, 0, 0);
    Carps.forEach(function(Carp) {
        ctx.drawImage(Carp.img, Carp.x, Carp.y, Carp.width, Carp.height);
    });
    requestAnimationFrame(draw);
}

function loadImages() {
    backgroundImage.src = 'img/background.jpg';
}

function createCarps() {
    let Carp = {
        x: 800,
        y: Math.random() * 500, // platzieren unsere Carps an einem zufälligen Ort
        width: 850,
        height: 530,
        src: 'img/Karpfen.png',
        img: new Image()
    };
    Carp.img.src = Carp.src; // Carp-Bild wird geladen.
    Carps.push(Carp);
}