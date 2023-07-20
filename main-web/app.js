document.querySelector("#ab").addEventListener("click", (event) => {
  event.preventDefault();
  location.reload();
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const navMenu = document.querySelector("#nav-menu");
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  //setting owl carousel

  const navText = [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ];

  $("#hero-carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoPlayHoverPause: true,
  });

  $("#top-movies-slide").owlCarousel({
    items: 6,
    dots: false,
    loop: true,
    autoplay: false,
    autoPlayHoverPause: true,
  });
});
