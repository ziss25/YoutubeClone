const hamb = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
hamb.addEventListener('click', function () {
  sidebar.classList.toggle('toggle');
});
