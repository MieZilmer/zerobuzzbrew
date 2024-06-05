const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const burgerDivs = document.querySelectorAll('.burger div');

    burger.addEventListener('click', () => {
        // Toggle navigationsbaren
        nav.classList.toggle('nav-active');

        // Burger animation
        burger.classList.toggle('toggle');

        // Angiv transition til hvert div inde i burgeren
        burgerDivs.forEach((div) => {
            div.style.transition = 'all 0.6s ease';
        });
    });
}

navSlide(); // Husk at kalde funktionen


// Funktion til at vise nav links og deaktivere body og html scroll
function showNavLinks() {
  navLinks.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden'; // Add this line
}

// Fukytion til at skjule nav links og aktivere body og html scroll
function hideNavLinks() {
  navLinks.style.transform = 'translateX(100%)';
  document.body.style.overflow = '';
  document.documentElement.style.overflow = ''; 
}

var burgerMenu = document.querySelector('.burger');
var burgerImage = document.querySelector('#burger-menu-image');

burgerMenu.addEventListener('click', function() {
    burgerImage.classList.toggle('hidden');
});


