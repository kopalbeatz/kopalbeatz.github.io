
function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

   
    var r = getParameterByName('a');

  
    var iframeURLs = {
        '1':{v: 'aHR0cHM6Ly9jZG4tcnRtcC0yLWlubGl2ZS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvdmlkZW8vbGl2ZS9obHMtMTA4MHAvWVJxTkhtMXZmMC10bmsyM210azNfODU4LWFwcC5pbi5saXZlLm0zdTg=',},
        '2':{v: '#',},
        '3':{v: '#',},
        '4':{v: '#',},
        '5':{v: '#',},
        '6':{v: '#',},
        '7':{v: '#',},
        '8':{v: '#',},
        '9':{v: '#',},
        '10':{v: '#',},
        '11':{v: '#',},
        '12':{v: '#',},
        '13':{v: '#',},
        '14':{v: '#',},
        '15':{v: '#',},
        '16':{v: '#',},
        '17':{v: '#',},
        '18':{v: '#',},
        '19':{v: '#',},
        '20':{v: '#',},  
        };

    
        var embedURL = iframeURLs[r];
        if (embedURL) {
            document['write']('<iframe class="embed-responsive-item" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen src="https://mexitv.webcindario.com/v/mls.php?get=' + embedURL['v'] + '" scrolling="no" frameBorder="0" width="100%" height="513" allowfullscreen></iframe>')
        }