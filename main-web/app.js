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
    items: 2,
    dots: false,
    loop: true,
    autoplay: false,
    autoPlayHoverPause: true,
    responsive: {
      500: {
        items: 3,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });
  $(".movie-slide").owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    navText: navText,
    margin: 15,
    responsive: {
      500: {
        items: 2,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });
});
$(window).scroll(function () {
  if ($("#go").scrollTop() >= 100)
    $("#go").css({
      position: "fixed",
      bottom: 0,
      right: 0,
    });
  $("#go").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      3000
    );
  });
});
