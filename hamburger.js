function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const body = document.querySelector('body');

  navMenu.classList.toggle("active");
  body.classList.toggle('active');
}

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('active') && event.target.tagName === 'BODY') {
    toggleMenu();
  }
});