let search = document.querySelector('.search-box');
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle search box
document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
};

// Toggle mobile menu
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
