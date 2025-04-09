
const cards = document.querySelectorAll('.modalidade-card');

  function animarScroll() {
    cards.forEach(card => {
      const topo = card.getBoundingClientRect().top;
      const altura = window.innerHeight;
      if (topo < altura - 100) {
        card.classList.add('ativo');
      }
    });
  }



window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);
