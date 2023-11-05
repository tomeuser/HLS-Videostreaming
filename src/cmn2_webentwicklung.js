//Funktion zur Einbindung der abgerufenen Json objekte in html
function createImgElement(obj)
{   
    //Erzeugt Bild Button
    const newButton = document.createElement('button');
    newButton.onclick = function()
    {
        var url = "Videoplayer.html?url=" + obj.url + "&name=" + obj.name;
        window.location.replace(url);
    };
    
    //Erzeugt Bild
    const newDiv = document.createElement('div');
    newDiv.className = 'image';

    const newImg = document.createElement('img');
    newImg.id = obj.id;
    newImg.src = obj.poster;
    newImg.alt = obj.name;

    const newH1 = document.createElement('h1');
    newH1.innerText = obj.name;
    const newP = document.createElement('p');
    newP.innerHTML = "Dauer: " + obj.duration;

    const newArticle = document.createElement('article');
    newArticle.insertAdjacentElement('afterbegin', newP);
    newArticle.insertAdjacentElement('afterbegin', newH1);

    newButton.insertAdjacentElement('afterbegin', newImg);
    newDiv.insertAdjacentElement('afterbegin', newArticle);
    newDiv.insertAdjacentElement('afterbegin', newButton);
    document.getElementById('start').insertAdjacentElement('afterbegin', newDiv);
}

//Button zurück zur Startseite bzw Neu-Laden
document.getElementById('buttonHead').onclick = function()
{
    var url = "cmn2_webentwicklung.html";
    window.location.replace(url);
} 

//http-Request
window.onload = () => 
{
    var xmlhttp = new XMLHttpRequest();
    var url = "https://mr22l5g2lf.execute-api.eu-central-1.amazonaws.com/prod/movies/";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            GETmovie = JSON.parse(this.responseText);
            
            for(var i = 0; i < GETmovie.length; i++)
            {
                createImgElement(GETmovie[i]);
            }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onload = function() {}
}

