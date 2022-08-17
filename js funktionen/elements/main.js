const form = document.getElementById('myForm');

form.addEventListener('change', function() {
    const elements = form.elements;
    const output = {};
    for(let i = 0; i<elements.length; i++) {
        if(elements[i].attributes["type"].nodeValue !== "submit") {
            output[elements[i].attributes["name"].nodeValue] = {
                value: elements[i].value,
                type: elements[i].attributes["type"].nodeValue
            }
        }
    }
    console.log(output);
});