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


// document.querySelectorAll('.dropdown-arrow').forEach(function(arrow) {
//     arrow.addEventListener('click', function() {
//         this.parentElement.classList.toggle('active');
//     });
// });
