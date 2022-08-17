

const buttons = document.querySelectorAll('.theme-switch');
const darkmode = window.matchMedia('(prefers-color-theme: dark)').matches;

if(darkmode) {
    document.body.dataset.theme = 'theme-dark'
} else {
    document.body.dataset.theme = '';
}


buttons.forEach(button => {
    button.addEventListener('click', setTheme);
})

function setTheme($event) {
    document.body.dataset.theme = $event.target.dataset.theme;
}