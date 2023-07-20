
function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

   
    var r = getParameterByName('v');

  
    var iframeURLs = {
        '1': {
            v: 'aHR0cHM6Ly9tZXhpdHYud2ViY2luZGFyaW8uY29tL3YvdngyLnBocD9pZD1NWDIzNjU4MTY=',
        },
      
        '2': {
            v: '#',
        },
      
        '3': {
            v: '#',
        },
        
        '4': {
            v: '#',
        },
      
        '5': {
            v: '#',
        },
      
        '6': {
            v: '#',
        },
        
        '7': {
            v: '#',
        },
      
        '8': {
            v: '#',
        },
      
        '9': {
            v: '#',
        },
        
        '10': {
            v: '#',
        },
      
        '11': {
            v: '#',
        },
      
        '12': {
            v: '#',
        },
        
        
      
        
    };

    
    var embedURL = iframeURLs[r];

    
    if (embedURL) {
        document.write('<iframe class="embed-responsive-item" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen src="https://mexi-tv.blogspot.com/p/e.html?r=' + embedURL.v + '" scrolling="no" frameBorder="0" width="100%" height="513" allowfullscreen></iframe>');

    };