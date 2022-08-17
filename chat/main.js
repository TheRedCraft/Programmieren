let t1 = 'hallo';
document.getElementById('id1');

func(t1);

function func(string) {
    //set variable hash as 0
    var hash = 0;
    // if the length of the string is 0, return 0
    if (string.length == 0) return hash;
    for (i = 0 ;i<string.length ; i++)
    {
    ch = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash;
    }
    return hash;
}

text.innerHTML = hash;