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


window.addEventListener('load', function() {
    document.querySelector('.forside-billede').classList.add('loaded');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (window.innerWidth <= 768) { // Check if the window's width is less than or equal to 768px
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("nav").style.top = "0";
    } else {
      document.querySelector("nav").style.top = "-8vh";
    }
    prevScrollpos = currentScrollPos;
  }
}


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
