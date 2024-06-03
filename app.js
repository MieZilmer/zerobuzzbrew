const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const burgerDivs = document.querySelectorAll('.burger div');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Burger animation
        burger.classList.toggle('toggle');

        // Apply transition to each div inside the burger
        burgerDivs.forEach((div) => {
            div.style.transition = 'all 0.6s ease';
        });
    });
}

navSlide(); // Don't forget to call the function




// Function to show the nav links and disable body and html scroll
function showNavLinks() {
  navLinks.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden'; // Add this line
}

// Function to hide the nav links and enable body and html scroll
function hideNavLinks() {
  navLinks.style.transform = 'translateX(100%)';
  document.body.style.overflow = '';
  document.documentElement.style.overflow = ''; // Add this line
}

var burgerMenu = document.querySelector('.burger');
var burgerImage = document.querySelector('#burger-menu-image');

burgerMenu.addEventListener('click', function() {
    burgerImage.classList.toggle('hidden');
});


