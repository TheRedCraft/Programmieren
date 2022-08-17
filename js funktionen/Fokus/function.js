setInterval(function() {
    if (document.hasFocus()) {
        console.log('Fokus');
    } else {
        console.log('Nicht im Fokus');
    }
}, 1000);