window.onload = function () {
    function updateSliderHeights() {
        // Sélectionnez tous les conteneurs principaux du slider
        var sliders = document.querySelectorAll(".detail .slider");

        // Parcourez chaque conteneur principal du slider
        sliders.forEach(function (slider) {
            // Sélectionnez toutes les images dans le conteneur du slider actuel
            var images = slider.querySelectorAll(".slider-container img");

            // Initialisez une variable pour stocker la taille maximale du conteneur actuel
            var maxSize = 0;
            var loadedImages = 0;

            // Fonction pour mettre à jour la taille maximale
            function updateMaxSize() {
                loadedImages++;

                // Vérifiez si toutes les images sont chargées
                if (loadedImages === images.length) {
                    // Parcourez toutes les images du conteneur actuel pour trouver la plus grande taille
                    images.forEach(function (img) {
                        var imgWidth = img.width;
                        var imgHeight = img.height;

                        // Calculez la taille totale de l'image actuelle
                        var imgSize = imgHeight;

                        // Mettez à jour la taille maximale du conteneur actuel si l'image actuelle est plus grande
                        if (imgSize > maxSize) {
                            maxSize = imgSize;
                        }
                    });

                    // Appliquez la taille maximale comme hauteur du conteneur actuel
                    slider.style.height = maxSize + "px";
                }
            }

            // Attachez l'événement load à chaque image, mais vérifiez d'abord si l'image est déjà chargée
            images.forEach(function (img) {
                if (img.complete) {
                    // L'image est déjà chargée, mettez à jour directement
                    updateMaxSize();
                } else {
                    img.addEventListener("load", updateMaxSize);
                }
            });
        });
    }

    // Attachez l'événement de redimensionnement de la fenêtre avec une fonction fléchée
    window.addEventListener("resize", (event) => {
        // Mettez à jour la hauteur lors de l'événement de redimensionnement
        updateSliderHeights();
    });

    // Mettez à jour la hauteur initiale
    updateSliderHeights();

    setTimeout(function() {
        window.scrollTo({
            top: -120,
            behavior: 'smooth'
          });
    }, 1000);
};

  document.addEventListener('DOMContentLoaded', function () {
    var burgerBtn = document.getElementById('burgerBtn');
    var navList = document.querySelector('nav ul');

    burgerBtn.addEventListener('click', function () {
      // Ajoute ou supprime la classe 'active' sur le bouton burger et la liste de navigation
      burgerBtn.classList.toggle('active');
      navList.classList.toggle('active');
    });
  });

