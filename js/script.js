document.addEventListener('DOMContentLoaded', function () {
    var homeElement = document.getElementById('home');
    var aboutElement = document.getElementById('about');
    var projectsElement = document.getElementById('projects');
    var contactElement = document.getElementById('contact');
    var navLinks = document.querySelectorAll('nav a');

    var downloadCV = false; // Variable pour suivre le téléchargement du CV

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var targetId = link.getAttribute('href').substring(1);

            // Vérifiez si le lien cliqué est le lien de téléchargement du CV
            if (link.getAttribute('href') === 'cv/cv_louis-candide_richard.pdf') {
                downloadCV = true;
                // Déclenchez le téléchargement
                var downloadLink = document.createElement('a');
                downloadLink.href = link.getAttribute('href');
                downloadLink.download = 'cv_louis-candide_richard.pdf';
                downloadLink.click();
            } else {
                // Sinon, effectuez le défilement fluide
                if (targetId === homeElement.id) {
                    window.scrollTo(0, homeElement.offsetTop - 100);
                } else if (targetId === aboutElement.id) {
                    window.scrollTo(0, aboutElement.offsetTop);
                } else if (targetId === projectsElement.id) {
                    window.scrollTo(0, projectsElement.offsetTop);
                } else if (targetId === contactElement.id) {
                    window.scrollTo(0, contactElement.offsetTop);
                }

                // Réinitialisez la variable si le défilement fluide a été déclenché
                if (!downloadCV) {
                    downloadCV = false;
                }
            }
        });
    });
});


window.onload = function() {
    var hash = window.location.hash;

    if (hash) {
        var element = document.querySelector(hash);

        if (element) {
            var newScrollPosition = element.offsetTop;
        }

        window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
    }
    setTimeout(function() {
        var url = window.location.href;

        if (url.indexOf('#') !== -1) {
            var urlSansFragment = url.split('#')[0];

            window.history.replaceState({}, document.title, urlSansFragment);
        }
    }, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }

  setVw();
  window.addEventListener('resize', setVw);

  document.addEventListener('DOMContentLoaded', function () {
    var burgerBtn = document.getElementById('burgerBtn');
    var navList = document.querySelector('nav ul');
    var navLinks = document.querySelectorAll('nav ul li a');

    burgerBtn.addEventListener('click', function () {
      // Ajoute ou supprime la classe 'active' sur le bouton burger et la liste de navigation
      burgerBtn.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Ajoute un gestionnaire d'événements pour chaque lien de la liste
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Retire la classe 'active' du bouton burger et de la liste de navigation
        burgerBtn.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  });