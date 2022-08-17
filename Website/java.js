const SUBMIT = document.querySelector('test');

const submitForm = ($event) => {
    if (!$event.target.classList.contains('active')) {
        $event.target.classList.add('active');
        setTimeout(() => {
            $event.target.classList.remove('active');
            $event.target.classList.add('done');
            $event.target.innerHTML = 'Done'
        }, 1000);
    }
}

SUBMIT.addEventListener('click', submitForm);