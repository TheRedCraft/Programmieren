function spin() {


    let min = 0;
    let max = 10;
    document.getElementById('number')
    document.getElementById('number2')
    
    let number1 = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(number1)
    let number3 = 'Zahl: ' + number1;
    number2.innerHTML = number3;
    if(number1 == 5) {
        number.innerHTML = 'Gewonnen!';
        confetti({
            particleCount: 100,
            spread: 40,
            origin: { y: 0.8, x: 0.5 }
            });
    } else {
        number.innerHTML = 'Verloren!';
    }
}