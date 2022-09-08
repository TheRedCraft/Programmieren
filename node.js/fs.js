const fs = require('fs');
const path = require('path');
const readline = require("readline-sync");


let currentpath = readline.question('PATH? ');


fs.readdir(currentpath, dirread);


function dirread(err, files){
    console.log('Verzeichnis ausgelesen ' + currentpath);
    console.log(files);

    files.forEach(processfile);
}

function processfile(file) {
    let extension = path.extname(file);
    console.log('Extension ist: '+ extension);

    fs.mkdir(currentpath + "/" + extension, function(){
        console.log('Ordner wurde fertig erstellt!');
        fs.rename(currentpath + "/" + file, currentpath + "/" + extension + '/' + file, copySucces);

    });
}


function copySucces(){
    console.log('Datei wurde verschoben');
}
