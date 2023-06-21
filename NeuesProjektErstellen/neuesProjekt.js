const fs = require("fs");
const readline = require("readline-sync");


let projektpath = readline.question("PATH? ");
let projektname = readline.question("PROJEKTNAME? ");
let pattern = readline.question("Website or Firebase? ");
pattern = pattern.toLowerCase();

let prettieryn = 0;
let whichprettier = 0;

if(pattern == "website") {
  prettieryn = readline.question("Prettier (Y/N)? ");
  prettieryn = prettieryn.toUpperCase();

  if(prettieryn == "Y") {
    whichprettier = readline.question("Welche Prettier settings (Unleashed)? ");
    whichprettier = whichprettier.toLowerCase();
  }

}

if (pattern == "website") {
  fs.readFile(
    "standarts/" + pattern + "/standartindex.txt",
    function (err, data) {
      if (err) {
        console.log(err);
      }

      standartindexhtml = data.toString();

      fs.readFile(
        "standarts/" + pattern + "/standartscss.txt",
        function (err, data) {
          if (err) {
            console.log(err);
          }

          standartscss = data.toString();

          fs.readFile(
            "standarts/" + pattern + "/standartReadMe.txt",
            function (err, data) {
              if (err) {
                console.log(err);
              }

              standartReadMe = data.toString();

              fs.readFile(
                "standarts/" + pattern + "/standartjs.txt",
                function (err, data) {
                  if (err) {
                    console.log(err);
                  }

                  standartjs = data.toString();

                  fs.readFile(
                    "standarts/" + pattern + "/standartscss_preset.txt",
                    function (err, data) {
                      if (err) {
                        console.log(err);
                      }

                      standartscss_preset = data.toString();

                      fs.readFile(
                        "standarts/" + pattern + "/standartcss.txt",
                        function (err, data) {
                          if (err) {
                            console.log(err);
                          }

                          standartcss = data.toString();

                          fs.readFile(
                            "standarts/" + "prettier" + "/unleashedprettierrc.txt",
                            function (err, data) {
                              if (err) {
                                console.log(err);
                              }

                              standartprettierconfig = data.toString();


                              fs.readFile(
                                "standarts/" + "prettier" + "/unleashedprettierignore.txt",
                                function (err, data) {
                                  if (err) {
                                    console.log(err);
                                  }
    
                                  unleashedprettierignore = data.toString();
        

                                fs.mkdir(
                                    projektpath + "/" + projektname,
                                    function (err) {
                                    if (err) {
                                        console.log(err);
                                    }

                                    fs.writeFile(
                                        projektpath + "/" + projektname + "/ReadMe.txt",
                                        standartReadMe,
                                        function (err) {
                                        if (err) {
                                            console.log(err);
                                        }
                                        }
                                    );

                                    fs.mkdir(
                                        projektpath + "/" + projektname + "/src",
                                        function (err) {
                                        if (err) {
                                            console.log(err);
                                        }

                                        fs.writeFile(
                                            projektpath +
                                            "/" +
                                            projektname +
                                            "/src/index.html",
                                            standartindexhtml,
                                            function (err) {
                                            if (err) {
                                                console.log(err);
                                            }
                                            }
                                        );
                                        
                                        if(prettieryn == 'Y') {
                                            if(whichprettier == 'unleashed') {
                                                fs.writeFile(
                                                    projektpath +
                                                    "/" +
                                                    projektname +
                                                    "/src/.prettierrc",
                                                    standartprettierconfig,
                                                    function (err) {
                                                    if (err) {
                                                        console.log(err);
                                                    }
                                                    }
                                                );
                                            }
                                        } else {
                                            fs.writeFile(
                                                projektpath +
                                                "/" +
                                                projektname +
                                                "/src/.prettierignore",
                                                unleashedprettierignore,
                                                function (err) {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                }
                                            );
                                        }


                                        fs.mkdir(
                                            projektpath + "/" + projektname + "/src/js",
                                            function (err) {
                                            if (err) {
                                                console.log(err);
                                            }

                                            fs.writeFile(
                                                projektpath +
                                                "/" +
                                                projektname +
                                                "/src/js/main.js",
                                                standartjs,
                                                function (err) {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                }
                                            );
                                            }
                                        );

                                        fs.mkdir(
                                            projektpath +
                                            "/" +
                                            projektname +
                                            "/src/css",
                                            function (err) {
                                            if (err) {
                                                console.log(err);
                                            }

                                            fs.writeFile(
                                                projektpath +
                                                "/" +
                                                projektname +
                                                "/src/css/styleCSS.css",
                                                standartcss,
                                                function (err) {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                }
                                            );

                                            fs.mkdir(
                                                projektpath +
                                                "/" +
                                                projektname +
                                                "/src/css/scss",
                                                function (err) {
                                                if (err) {
                                                    console.log(err);
                                                }

                                                fs.writeFile(
                                                    projektpath +
                                                    "/" +
                                                    projektname +
                                                    "/src/css/scss/_preset.scss",
                                                    standartscss_preset,
                                                    function (err) {
                                                    if (err) {
                                                        console.log(err);
                                                    }
                                                    }
                                                );

                                                fs.writeFile(
                                                    projektpath +
                                                    "/" +
                                                    projektname +
                                                    "/src/css/scss/style.scss",
                                                    standartscss,
                                                    function (err) {
                                                    if (err) {
                                                        console.log(err);
                                                    }
                                                    }
                                                );
                                                }
                                            );
                                            }
                                        );

                                        fs.mkdir(
                                            projektpath +
                                            "/" +
                                            projektname +
                                            "/src/assets",
                                            function (err) {
                                            if (err) {
                                                console.log(err);
                                            }
                                            fs.mkdir(
                                                projektpath +
                                                "/" +
                                                projektname +
                                                "/src/assets/img",
                                                function (err) {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                }
                                            );
                                            fs.mkdir(
                                                projektpath +
                                                "/" +
                                                projektname +
                                                "/src/assets/fonts",
                                                function (err) {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                }
                                            );
                                            }
                                        );
                                        }
                                    );
                                    }
                                );
                                }
                                );
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
      console.log("Projekt fertig angelegt!");
    }
  );
} else if (pattern == "firebase") {
  fs.readFile(
    "standarts/" + pattern + "/standartHtml.txt",
    function (err, data) {
      if (err) {
        console.log(err);
      }

      standartindexhtml = data.toString();

      fs.readFile(
        "standarts/" + pattern + "/standartJs.txt",
        function (err, data) {
          if (err) {
            console.log(err);
          }

          standartjs = data.toString();

          fs.readFile(
            "standarts/" + pattern + "/standartCss.txt",
            function (err, data) {
              if (err) {
                console.log(err);
              }

              standartcss = data.toString();

              /*fs.readFile(
                "standarts/" + "prettier" + "/unleashedprettierignore.txt",
                function (err, data) {
                  if (err) {
                    console.log(err);
                  }
    
                  standartprettierignore = data.toString();
                  */

              fs.mkdir(projektpath + "/" + projektname, function (err) {
                if (err) {
                  console.log(err);
                }
                fs.writeFile(
                  projektpath + "/" + projektname + "/index.html",
                  standartindexhtml,
                  function (err) {
                    if (err) {
                      console.log(err);
                    }
                    fs.writeFile(
                      projektpath + "/" + projektname + "/app.js",
                      standartjs,
                      function (err) {
                        if (err) {
                          console.log(err);
                        }
                        fs.writeFile(
                          projektpath + "/" + projektname + "/style.css",
                          standartcss,
                          function (err) {
                            if (err) {
                              console.log(err);
                            }
                            /*fs.writeFile(
                              projektpath + "/" + projektname + "/.prettierignore",
                              standartprettierignore,
                              function (err) {
                                if (err) {
                                  console.log(err);
                                }
                              }
                            );
                            */}
                        );
                      }
                    );
                  }
                );
              
                }
              );
        }
      );
      console.log("Projekt fertig angelegt!");
    }
  );
  }
);
}
