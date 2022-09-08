const fs = require('fs');
const path = require('path');
const readline = require("readline-sync");


let currentpath = readline.question('PATH? ');


fs.readdir(currentpath, dirread);


function dirread(err, files){

    files.forEach(processfile);
}

function processfile(file) {
    let extension = path.extname(file);


    fs.mkdir(currentpath + "/" + extension, function(){

        fs.rename(currentpath + "/" + file, currentpath + "/" + extension + '/' + file, copySucces);

    });
}


function copySucces(err){
    if(err) {
        console.log(err)
    }
}
