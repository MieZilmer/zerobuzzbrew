const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

var burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    var burgerDivs = document.querySelectorAll('.burger div');

    burgerDivs.forEach(function(div) {
        div.style.transition = 'all 0.6s ease';
    });

    setTimeout(function() {
        burgerDivs.forEach(function(div) {
            div.style.transition = '';
        });
    }, 600);
});