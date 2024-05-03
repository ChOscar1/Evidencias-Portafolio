window.addEventListener('scroll', () => {
    const cursosSection = document.getElementById('formacion');
    const cursosSectionPosition = cursosSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (cursosSectionPosition < screenPosition) {
      const letters = document.querySelectorAll('.dance-animation');
      letters.forEach(letter => {
        letter.classList.add('dance-animation');
      });
    }
  });

  window.addEventListener('scroll', () => {
    const seccion = document.getElementById('show');
    const seccionPosition = seccion.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (seccionPosition < screenPosition) {
        seccion.classList.add('aparecer');
    }
});