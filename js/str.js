
function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

   
    var r = getParameterByName('s');

  
    var iframeURLs = {
        '1':{v: 'https://live-ftc-sa-west-1.media.starott.com/clt2/va01/starplus/event/2023/07/18/Estudiantes_de_La_Plata_A_20230718_1689717629022/ctr-all-complete.m3u8&amp;img=https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/6643BD8AE5FAE987755361F6873FD53B93B01E29AF725206A638EA78478EB6BC/scale?width=1920&amp;aspectRatio=1.78&amp;format=jpeg&amp;key=7274dbec88b14099819ce81212d40a89&amp;key2=1d6cd3a969818bf3a7eaf9000b2626a6',},
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
            document.write('<iframe class="embed-responsive-item" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen src="https://mexitv.webcindario.com/pley/splus.php?update&amp;get=' + embedURL.v + '" scrolling="no" frameBorder="0" width="100%" height="513" allowfullscreen></iframe>');
    
        };