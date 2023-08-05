const eventos = [
    {
      id: 'evento1',
      horaInicio: { horas: 13, minutos: 30, am: false },
      horaFin: { horas: 15, minutos: 35, am: false }
    },
    {
      id: 'evento2',
      horaInicio: { horas: 13, minutos: 30, am: false },
      horaFin: { horas: 15, minutos: 35, am: false }
    },
     {
      id: 'evento3',
      horaInicio: { horas: 16, minutos: 0, am: false },
      horaFin: { horas: 18, minutos: 5, am: false }
    },
    {
      id: 'evento4',
      horaInicio: { horas: 16, minutos: 0, am: false },
      horaFin: { horas: 18, minutos: 5, am: false }
    },
    {
      id: 'evento5',
      horaInicio: { horas: 16, minutos: 0, am: false },
      horaFin: { horas: 18, minutos: 5, am: false }
    },
    {
      id: 'evento6',
      horaInicio: { horas: 17, minutos: 30, am: false },
      horaFin: { horas: 19, minutos: 35, am: false }
    },
     {
      id: 'evento7',
      horaInicio: { horas: 18, minutos: 30, am: false },
      horaFin: { horas: 20, minutos: 35, am: false }
    },
    {
      id: 'evento8',
      horaInicio: { horas: 19, minutos: 6, am: false },
      horaFin: { horas: 21, minutos: 10, am: false }
    },
    {
      id: 'evento9',
      horaInicio: { horas: 21, minutos: 0, am: false },
      horaFin: { horas: 23, minutos: 5, am: false }
    },
    {
      id: 'evento10',
      horaInicio: { horas: 21, minutos: 10, am: false },
      horaFin: { horas: 23, minutos: 15, am: false }
    },
     {
      id: 'evento11',
      horaInicio: { horas: 20, minutos: 30, am: false },
      horaFin: { horas: 22, minutos: 35, am: false }
    },
    {
      id: 'evento12',
      horaInicio: { horas: 14, minutos: 0, am: false },
      horaFin: { horas: 16, minutos: 5, am: false }
    },
    {
      id: 'evento13',
      horaInicio: { horas: 14, minutos: 10, am: false },
      horaFin: { horas: 16, minutos: 15, am: false }
    },
    {
      id: 'evento14',
      horaInicio: { horas: 14, minutos: 30, am: false },
      horaFin: { horas: 16, minutos: 35, am: false }
    },
    {
      id: 'evento15',
      horaInicio: { horas: 14, minutos: 30, am: false },
      horaFin: { horas: 16, minutos: 35, am: false }
    },
    {
      id: 'evento16',
      horaInicio: { horas: 15, minutos: 30, am: false },
      horaFin: { horas: 17, minutos: 35, am: false }
    },
     {
      id: 'evento17',
      horaInicio: { horas: 15, minutos: 30, am: false },
      horaFin: { horas: 17, minutos: 35, am: false }
    },
    {
      id: 'evento18',
      horaInicio: { horas: 15, minutos: 45, am: false },
      horaFin: { horas: 17, minutos: 55, am: false }
    },
    {
      id: 'evento19',
      horaInicio: { horas: 16, minutos: 0, am: false },
      horaFin: { horas: 18, minutos: 5, am: false }
    },
    {
      id: 'evento20',
      horaInicio: { horas: 17, minutos: 0, am: false },
      horaFin: { horas: 19, minutos: 5, am: false }
    },
    {
      id: 'evento21',
      horaInicio: { horas: 17, minutos: 0, am: false },
      horaFin: { horas: 19, minutos: 5, am: false }
    },
    {
      id: 'evento22',
      horaInicio: { horas: 17, minutos: 0, am: false },
      horaFin: { horas: 19, minutos: 5, am: false }
    },
    {
      id: 'evento23',
      horaInicio: { horas: 18, minutos: 0, am: false },
      horaFin: { horas: 20, minutos: 5, am: false }
    },
    {
      id: 'evento24',
      horaInicio: { horas: 19, minutos: 0, am: false },
      horaFin: { horas: 21, minutos: 5, am: false }
    },
    {
      id: 'evento25',
      horaInicio: { horas: 19, minutos: 5, am: false },
      horaFin: { horas: 21, minutos: 10, am: false }
    },
    {
      id: 'evento26',
      horaInicio: { horas: 19, minutos: 10, am: false },
      horaFin: { horas: 21, minutos: 15, am: false }
    },
    {
      id: 'evento27',
      horaInicio: { horas: 20, minutos: 0, am: false },
      horaFin: { horas: 22, minutos: 5, am: false }
    },
    {
      id: 'evento28',
      horaInicio: { horas: 20, minutos: 0, am: false },
      horaFin: { horas: 22, minutos: 5, am: false }
    },
    {
      id: 'evento29',
      horaInicio: { horas: 20, minutos: 30, am: false },
      horaFin: { horas: 22, minutos: 35, am: false }
    },
    {
      id: 'evento30',
      horaInicio: { horas: 12, minutos: 0, am: false },
      horaFin: { horas: 14, minutos: 5, am: false }
    },
    {
      id: 'evento31',
      horaInicio: { horas: 17, minutos: 5, am: false },
      horaFin: { horas: 19, minutos: 10, am: false }
    },
    {
      id: 'evento32',
      horaInicio: { horas: 19, minutos: 5, am: false },
      horaFin: { horas: 21, minutos: 10, am: false }
    },
    {
      id: 'evento33',
      horaInicio: { horas: 21, minutos: 0, am: false },
      horaFin: { horas: 23, minutos: 5, am: false }
    },
    {
      id: 'evento34',
      horaInicio: { horas: 15, minutos: 0, am: false },
      horaFin: { horas: 17, minutos: 5, am: false }
    },
   
  ];
  
  function cambiarEstadoPartido(evento) {
    const eventoElement = document.getElementById(evento.id);
    const tElement = eventoElement.querySelector('.t');
    const infoElement = eventoElement.querySelector('.info');
  
    // Obtiene la hora actual en el huso horario de Argentina
    const currentLocalTime = new Date().toLocaleString('en-US', { timeZone: 'america/mexico_city' });
    const currentLocalHours = new Date(currentLocalTime).getHours();
    const currentLocalMinutes = new Date(currentLocalTime).getMinutes();
  
    // Convierte las horas PM a formato de 24 horas sumando 12 horas
    const horaInicio24 = evento.horaInicio.am ? evento.horaInicio.horas : evento.horaInicio.horas ;
    const horaFin24 = evento.horaFin.am ? evento.horaFin.horas : evento.horaFin.horas ;
  
    // Verifica si el evento está en curso
    const enCurso = (
      (currentLocalHours > horaInicio24 && currentLocalHours < horaFin24) ||
      (currentLocalHours === horaInicio24 && currentLocalMinutes >= evento.horaInicio.minutos) ||
      (currentLocalHours === horaFin24 && currentLocalMinutes <= evento.horaFin.minutos)
    );
  
    if (enCurso) {
      infoElement.innerText = '● LIVE';
      infoElement.style.color = '#fff';
      infoElement.style.backgroundColor = '#bf1c1c';
    } else if (
      (currentLocalHours > horaFin24) ||
      (currentLocalHours === horaFin24 && currentLocalMinutes > evento.horaFin.minutos)
    ) {
      infoElement.innerText = 'Finished';
      infoElement.style.color = '#fff';
      infoElement.style.backgroundColor = '#222222';
  
      // Establece un temporizador para cambiar el estado a Próximamente después de 23 horas
      const tiempoEspera = 23 * 60 * 60 * 1000; // 23 horas en milisegundos
      setTimeout(() => {
        infoElement.innerText = 'Próx.';
        infoElement.style.color = '#000';
        infoElement.style.backgroundColor = '#fff';
      }, tiempoEspera);
    } else {
      infoElement.innerText = 'Próx.';
      infoElement.style.color = '#000';
      infoElement.style.backgroundColor = '#fff';
    }
  }
  
  setInterval(function() {
    eventos.forEach(function(evento) {
      cambiarEstadoPartido(evento);
    });
  }, 1000);


  $(function() {
	
    var menu_ul = $('.menu > li > ul'),
    menu_a = $('.menu > li > a');
    
    menu_ul.hide();
   
    menu_a.click(function(e) {
    e.preventDefault();
    if(!$(this).hasClass('active')) {
    menu_a.removeClass('active');
    menu_ul.filter(':visible').slideUp('fast');
    $(this).addClass('active').next().stop(true,true).slideDown('fast');U
    } else {
    $(this).removeClass('active');
    $(this).next().stop(true,true).slideUp('fast');
    }
    });
   
   });