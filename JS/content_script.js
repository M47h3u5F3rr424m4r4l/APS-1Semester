var p = document.getElementById("tecnology");


function addPhrase(object)
{
    var phrase = "Tecnology";

    var x;
    for (x = 0; x < phrase.length; x++)
    {
        object.innerText = phrase;
    }
}

p.onmouseover(addPhrase(p));