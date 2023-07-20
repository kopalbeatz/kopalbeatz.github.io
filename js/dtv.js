
function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

   
    var r = getParameterByName('d');

  
    var iframeURLs = {
        '1':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk4eE1EVTNMWFp2Y3k1a2RIWnZkSFF1WTI5dEwwUkJVMGd2YldGdWFXWmxjM1F1YlhCayZrMT1ZbUl3WldOaFlUWmhaVFl5TXpNMk1UazNZelkwWkRReE1qbGpObUV3T1dRPSZrMj1ZMkl3WW1KaE5EVXlNbVptWTJRNU1HRTRZalV4TlRReFlUQm1ZMlpoWlRBPSZhdXQ9dHJ1ZSZsYW5nPTA=',},
        '2':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk4eE1EWXhMWFp2Y3k1a2RIWnZkSFF1WTI5dEwwUkJVMGd2YldGdWFXWmxjM1F1YlhCayZrMT1OV1ppTmpSa01URXpOVFV6TXpoaU0ySmtaamhpTVRneVpESTRaV0poTVdZPSZrMj1ZbVpqTkdVNVpqTmxNelUxWWpneVpURXhabU0xWkdSbVpETXhNMk16WmpJPSZhdXQ9dHJ1ZSZsYW5nPTA=',},
        '3':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk5a2RIWnZkSFF0WTJKakxtRnJZVzFoYVhwbFpDNXVaWFF2WkdGemFGOXNhWFpsWHpFd056QXZiV0Z1YVdabGMzUXViWEJrJmsxPVpXVmtOalJsTUdJeE0ySmpOV0UyTldJM09EazVPVGRsWXpJeVlUSXpaREE9JmsyPU1UQmtNV1U0TjJZMlpUYzFZek0yTXpObVptTTNZamRrTW1WalkyUTFabUU9JmF1dD10cnVlJmxhbmc9MA==',},
        '4':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk5a2RIWnZkSFF0WVdKakxtRnJZVzFoYVhwbFpDNXVaWFF2WkdGemFGOXNhWFpsWHpFeU5Ua3ZiV0Z1YVdabGMzUXViWEJrJmsxPU16WmlNbU0yWWpjM016WmhOVGt3TVdKbU5EQTRPVEUyWVRRMU5HRmlaams9JmsyPVpqQmtNakkxTkdZNE5XSTNNemN4TjJZMFl6SmpaRGd4WW1SaE56RTRPRGs9JmF1dD10cnVlJmxhbmc9MA==',},
        '5':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk5a2RIWnZkSFF0WTJKakxtRnJZVzFoYVhwbFpDNXVaWFF2WkdGemFGOXNhWFpsWHpFd05qa3ZiV0Z1YVdabGMzUXViWEJrJmsxPVlUaGpaalV5WW1Vd1pXSXpOVGhqT1dFNFltWmpaREZtWXprMFpEZGpZalU9JmsyPU9ETTBZemN3T0RKa01qaGtPRFZtTldSaE16aGtaR1U1TkRsaU5qWmpPV0U9JmF1dD10cnVlJmxhbmc9MA==',},
        '6':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk4eE1UQTVMWFp2Y3k1a2RIWnZkSFF1WTI5dEwwUkJVMGd2YldGdWFXWmxjM1F1YlhCayZrMT1OVE0wWkRRNE9EZzFNbUl6TXpNd01qZzBNekEzWkRGaE0yTmhNR1prTTJJPSZrMj1NbVF4WkRKaE1USTBOVFJpTmpneVpHWXhPVGRtWmpJMlptWTFNalV6WVRVPSZhdXQ9dHJ1ZSZsYW5nPTA=',},
        '7':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk4eE1EWXpMWFp2Y3k1a2RIWnZkSFF1WTI5dEwwUkJVMGd2YldGdWFXWmxjM1F1YlhCayZrMT1ZV0l3TWpCaE1UY3hNR1EyTXpBeE5qaGtaVEl4TmprNE16YzFZVFF6T1dNPSZrMj1Nak0xT0RrNFkyUmlNVEJpTUdOa1ltRXpOV1ZoTW1ObE9UUm1ZbUl4Wm1JPSZhdXQ9dHJ1ZSZsYW5nPTA=',},
        '8':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk5a2RIWnZkSFF0WVdKakxtRnJZVzFoYVhwbFpDNXVaWFF2WkdGemFGOXNhWFpsWHpFd05qUXZiV0Z1YVdabGMzUXViWEJrJmsxPU1tSTBPREpsWVdSbE4yVTJOVEU1WTJGbU5ETTBPV0ZtTlRZMk9ETm1ObUU9JmsyPU9EbGxObVU0TTJNd05tTmxNMkpqTldZMk56TTRaakkyTm1aaVpqZzRaak09JmF1dD10cnVlJmxhbmc9MA==',},
        '9':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk4eE1EWTFMV0ZpWXk1a2RIWnZkSFF1WTI5dEwyUmhjMmhmYkdsMlpWOHhNRFkxTDIxaGJtbG1aWE4wTG0xd1pBPT0mazE9WkRZM04yRXhPV1JpTTJFd05XRXdNVGxrT0RZNE0ySTVNalV3WTJKak1HWT0mazI9WlRJM05UWmxPVFprTjJRNVpEWXpOekk1WWpZME5XRTJNVE01WTJJMU1UTT0mYXV0PXRydWUmbGFuZz0w',},
        '10':{v: 'aHR0cHM6Ly9kdW1wZXItdHJ1ZS5jb20vZGFzaGR1bXBlci5waHA/dXJsPWFIUjBjSE02THk5a2RIWnZkSFF0WVdKakxtRnJZVzFoYVhwbFpDNXVaWFF2WkdGemFGOXNhWFpsWHpFd056RXZiV0Z1YVdabGMzUXViWEJrJmsxPVpqRTVZek5oT0dNMk16aGtOVEpqTW1GaU56ZGlPVFUyTm1KallqSTVPVFk9JmsyPVpUUm1ZV0ptTXpsa01qTmpaRFkxTlRkbVlUY3hZalpsTnpVMFpXWXhaVGM9JmF1dD10cnVlJmxhbmc9MA==',},
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
            document.write('<iframe class="embed-responsive-item" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen src="https://mexi-tv.blogspot.com/p/e.html?r=' + embedURL.v + '" scrolling="no" frameBorder="0" width="100%" height="513" allowfullscreen></iframe>');
    
        };