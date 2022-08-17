window.addEventListener('resize', function() {
    if (this.window.matchMedia('(min-width: 700px)').matches) {
        console.log('Media Query');
    }
});


if (window.matchMedia('(min-width: 700px)').matches) {
    console.log(window.matchMedia('(min-width: 700px)').matches);
}