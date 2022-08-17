let save = 'DAS URALGEBIRGE TRENT DIE BEIDEN KOTINENTE EUROPA UND ASIEN'





function appendoperation(opperation) {
    document.getElementById('resultarea').innerHTML += opperation;
}

function calculateResult() {
    let container = document.getElementById('resultarea');
    if (container.innerHTML =='57382') {
        let result = save;
        container.innerHTML = result;
    } else {
        let result = eval(container.innerHTML);
        container.innerHTML = result;
    }
}

function deletelast() {
    let container = document.getElementById('resultarea');
    if(container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
    }
}
function ac() {
    let container = document.getElementById('resultarea');
    container.innerHTML = ''
}