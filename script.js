console.log("Saffron Kettle script.js loaded");

// =========================================================
// FEATURED FOOD DATA
// =========================================================

fetch('data/featured-food.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(
        `Failed to load featured-food.json: ${response.status}`
      );
    }

    return response.json();
  })

  .then(data => {

    window.featuredFoodData = data;

    console.log(
      'Featured food JSON loaded:',
      data
    );

    // =======================================================
    // FEATURED FOOD — REUSABLE CAROUSEL
    // =======================================================

    function createFeaturedCarousel(card, dishes) {

      // Stop if this card does not exist
      if (!card) {
        return;
      }

      const image =
        card.querySelector('.featured-image img');

      const dishName =
        card.querySelector('.featured-dish-name');

      const dots =
        card.querySelectorAll('.featured-dot');

      // Safety check
      if (!image || !dishName) {
        console.warn(
          'Featured carousel elements missing:',
          card
        );

        return;
      }

      // Each carousel gets its OWN state
      let currentIndex = 0;
      let timer;


      // =====================================================
      // SHOW DISH
      // =====================================================

      function showDish(index) {

        // Safety protection
        if (
          !dishes ||
          dishes.length === 0 ||
          index < 0 ||
          index >= dishes.length
        ) {
          return;
        }

        currentIndex = index;

        image.style.opacity = '0';
        dishName.style.opacity = '0';


        setTimeout(() => {

          image.src =
            dishes[index].image;

          image.alt =
            dishes[index].name;

          dishName.textContent =
            dishes[index].name;

          image.style.opacity = '1';
          dishName.style.opacity = '1';

        }, 350);


        // ===================================================
        // UPDATE DOTS
        // ===================================================

        dots.forEach((dot, i) => {

          dot.classList.toggle(
            'active',
            i === index
          );


          if (i === index) {

            dot.setAttribute(
              'aria-current',
              'true'
            );

          } else {

            dot.removeAttribute(
              'aria-current'
            );

          }

        });

      }


      // =====================================================
      // START TIMER
      // =====================================================

      function startTimer() {

        clearInterval(timer);

        timer = setInterval(() => {

          const nextIndex =
            (currentIndex + 1) %
            dishes.length;

          showDish(nextIndex);

        }, 5000);

      }


      // =====================================================
      // DOT CLICK HANDLERS
      // =====================================================

      dots.forEach((dot, index) => {

        dot.addEventListener('click', () => {

          showDish(index);

          // Restart this carousel's timer only
          startTimer();

        });

      });


      // =====================================================
      // INITIAL DISPLAY
      // =====================================================

      showDish(0);

      startTimer();

    }


    // =======================================================
    // INITIALISE THE THREE FEATURED FOOD CAROUSELS
    // =======================================================

    createFeaturedCarousel(
      document.querySelector(
        '[data-carousel="bengali"]'
      ),
      data.bengali
    );


    createFeaturedCarousel(
      document.querySelector(
        '[data-carousel="classic"]'
      ),
      data.classic
    );


    createFeaturedCarousel(
      document.querySelector(
        '[data-carousel="discovery"]'
      ),
      data.discovery
    );

  })


  // =========================================================
  // JSON LOAD ERROR
  // =========================================================

  .catch(error => {

    console.error(
      'Featured food JSON failed to load:',
      error
    );

  });