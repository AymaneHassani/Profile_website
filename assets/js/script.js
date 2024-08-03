// JavaScript for Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menuToggle');
    var menu = document.querySelector('#menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});
