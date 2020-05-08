var image = document.getElementById("img-forest");

function BigImage(x)
{
    x.style.width = "400px";
    x.style.height = "400px";
}

function NormalImage(x)
{
    x.style.width = "300px";
    x.style.height = "300px";
}


image.onmouseover.call(BigImage());
image.onmouseout.call(NormalImage());