console.log("Saffron Kettle script.js loaded");

fetch('data/featured-food.json')
  .then(response => response.json())
  .then(data => {
      window.featuredFoodData = data;
      console.log('Featured food JSON loaded:', data);
  })
  .catch(error => {
    console.error('Featured food JSON failed to load:', error);
  });

// =========================================================
// FEATURED FOOD — CARD 1 / BENGALI FAVOURITES
// =========================================================

const bengaliCard = document.querySelector(
  '[data-carousel="bengali"]'
);

if (bengaliCard) {

  const image =
    bengaliCard.querySelector('.featured-image img');

  const dishName =
    bengaliCard.querySelector('.featured-dish-name');

  const dots =
    bengaliCard.querySelectorAll('.featured-dot');

  const bengaliDishes = [
    {
      image: 'images/food-bengali-01.svg',
      name: 'Shorshe Ilish'
    },
    {
      image: 'images/food-bengali-02.svg',
      name: 'Chingri Malai Curry'
    },
    {
      image: 'images/food-bengali-03.svg',
      name: 'Kosha Mangsho'
    },
    {
      image: 'images/food-bengali-04.svg',
      name: 'Dhokar Dalna'
    },
    {
      image: 'images/food-bengali-05.svg',
      name: 'Mishti Doi'
    }
  ];

  let currentIndex = 0;
  let timer;


    function showBengaliDish(index) {

    currentIndex = index;

    image.style.opacity = '0';
    dishName.style.opacity = '0';

    setTimeout(() => {

        image.src =
        bengaliDishes[index].image;

        image.alt =
        bengaliDishes[index].name;

        dishName.textContent =
        bengaliDishes[index].name;

        image.style.opacity = '1';
        dishName.style.opacity = '1';

    }, 350);

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


  function startBengaliTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

      const nextIndex =
        (currentIndex + 1) %
        bengaliDishes.length;

      showBengaliDish(nextIndex);

    }, 5000);

  }


  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      showBengaliDish(index);

      startBengaliTimer();

    });

  });


  showBengaliDish(0);

  startBengaliTimer();

}

// =========================================================
// FEATURED FOOD — CARD 2 / INDIAN CLASSICS
// =========================================================

const classicCard = document.querySelector(
  '[data-carousel="classic"]'
);

if (classicCard) {

  const image =
    classicCard.querySelector('.featured-image img');

  const dishName =
    classicCard.querySelector('.featured-dish-name');

  const dots =
    classicCard.querySelectorAll('.featured-dot');

  const classicDishes = [
    {
      image: 'images/food-classic-01.svg',
      name: 'Butter Chicken'
    },
    {
      image: 'images/food-classic-02.svg',
      name: 'Chicken Tikka'
    },
    {
      image: 'images/food-classic-03.svg',
      name: 'Biryani'
    },
    {
      image: 'images/food-classic-04.svg',
      name: 'Paneer Tikka'
    },
    {
      image: 'images/food-classic-05.svg',
      name: 'Dal Makhani'
    }
  ];

  let currentIndex = 0;
  let timer;


  function showClassicDish(index) {

    currentIndex = index;

    image.style.opacity = '0';
    dishName.style.opacity = '0';

    setTimeout(() => {

      image.src =
        classicDishes[index].image;

      image.alt =
        classicDishes[index].name;

      dishName.textContent =
        classicDishes[index].name;

      image.style.opacity = '1';
      dishName.style.opacity = '1';

    }, 350);


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


  function startClassicTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

      const nextIndex =
        (currentIndex + 1) %
        classicDishes.length;

      showClassicDish(nextIndex);

    }, 5000);

  }


  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      showClassicDish(index);

      startClassicTimer();

    });

  });


  showClassicDish(0);

  startClassicTimer();

}

// =========================================================
// FEATURED FOOD — CARD 3 / BEYOND THE FAMILIAR
// =========================================================

const discoveryCard = document.querySelector(
  '[data-carousel="discovery"]'
);

if (discoveryCard) {

  const image =
    discoveryCard.querySelector('.featured-image img');

  const dishName =
    discoveryCard.querySelector('.featured-dish-name');

  const dots =
    discoveryCard.querySelectorAll('.featured-dot');

  const discoveryDishes = [
    {
      image: 'images/food-discovery-01.svg',
      name: 'Macher Jhol'
    },
    {
      image: 'images/food-discovery-02.svg',
      name: 'Laal Maas'
    },
    {
      image: 'images/food-discovery-03.svg',
      name: 'Kashmiri Rogan Josh'
    },
    {
      image: 'images/food-discovery-04.svg',
      name: 'Chettinad Chicken'
    },
    {
      image: 'images/food-discovery-05.svg',
      name: 'Malabar Parotta'
    }
  ];

  let currentIndex = 0;
  let timer;


  function showDiscoveryDish(index) {

    currentIndex = index;

    image.style.opacity = '0';
    dishName.style.opacity = '0';

    setTimeout(() => {

      image.src =
        discoveryDishes[index].image;

      image.alt =
        discoveryDishes[index].name;

      dishName.textContent =
        discoveryDishes[index].name;

      image.style.opacity = '1';
      dishName.style.opacity = '1';

    }, 350);


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


  function startDiscoveryTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

      const nextIndex =
        (currentIndex + 1) %
        discoveryDishes.length;

      showDiscoveryDish(nextIndex);

    }, 5000);

  }


  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      showDiscoveryDish(index);

      startDiscoveryTimer();

    });

  });


  showDiscoveryDish(0);

  startDiscoveryTimer();

}