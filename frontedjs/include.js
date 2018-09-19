function include(link, div)
{
    req = new XMLHttpRequest();
    req.open("GET", link, false);
    req.send(null);

    div.innerHTML = req.responseText;
}
