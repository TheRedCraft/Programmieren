imgCard = document.getElementById('img_card')
textcard = document.getElementById('fortschritt')
let grow_status = 0;

function change() {
    imgCard = document.getElementById('img_card');
    textcard = document.getElementById('fortschritt');
    grow_status +=1;
    console.log(grow_status);
    if(grow_status < 7) {
        if(grow_status ==1) {
            imgCard.innerHTML = "<img src='img/Potato_1.jpg'>";
            textcard.innerHTML = '1/7';
        }
        if(grow_status ==2) {
            imgCard.innerHTML = "<img src='img/Potato_2.jpg'>";
            textcard.innerHTML = '2/7';
        }
        if(grow_status ==3) {
            imgCard.innerHTML = "<img src='img/Potato_3.jpg'>";
            textcard.innerHTML = '3/7';
        }
        if(grow_status ==4) {
            imgCard.innerHTML = "<img src='img/Potato_4.jpg'>";
            textcard.innerHTML = '4/7';
        }
        if(grow_status ==5) {
            imgCard.innerHTML = "<img src='img/Potato_5.jpg'>";
            textcard.innerHTML = '5/7';
        }
        if(grow_status ==6) {
            imgCard.innerHTML = "<img src='img/Potato_6.jpg'>";
            textcard.innerHTML = '6/7';
        }
        if(grow_status ==7) {
            imgCard.innerHTML = "<img src='img/Potato_7.jpg'>";

        }
    } else {
        imgCard.innerHTML = "<img src='img/star.jpg'>";
        textcard.innerHTML = '7/7';
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.8, x: 0.5 }
        });
    }



}