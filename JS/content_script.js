

function addPhrase()
{
    var p = document.getElementById("tecnology");
    var phrase = "Tecnology";

    var x;
    for(x = 0; x < phrase.length; x++)
    {
        p.innerText += phrase[x];
    }
}

function removePhrase()
{
    var p = document.getElementById("tecnology");
    
    p.innerText = "";
}