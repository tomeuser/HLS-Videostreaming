// Funktion hls-Player
function hlsPlayer(element, src)
{
    var video = document.getElementById(element);
        
        var hls = new Hls({
          debug: true,
          
        }); 
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.xhrSetup 
        
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            
            video.muted = true;
            video.autoplay = false;
    
         video.play();
        }); 
}

//Funktion zur Auswertung übergebener Daten über die URL
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

//Button zurück auf die Startseite 
document.getElementById('buttonHead').onclick = function()
{
    var url = "cmn2_webentwicklung.html";
    window.location.replace(url);
}

console.log(GetURLParameter('url'));
console.log(GetURLParameter('name'));

var videoTitel = GetURLParameter('name');
var title = '';
for (var i = 0; i < videoTitel.length; i++) 
{
    if((videoTitel[i] != '%') & (videoTitel[i] != '2') & (videoTitel[i] != '0'))
    {
        title += videoTitel[i];
    }
    else if(videoTitel[i] == '%')
    {
        title += ' ';

    }
}
document.getElementById('Titel').innerHTML = title;

hlsPlayer('player', GetURLParameter('url'));

