$("#ab").click(function () {
  location.reload();
});
setInterval(function timer() {
  let d = new Date();
  let c = (document.getElementById("block").innerHTML = `${d.getDate()}/0${
    d.getMonth() + 1
  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
}, 1000);

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
    autoplay: true,
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
  $(".hi").owlCarousel({
    items: 2,
    dots: false,
    autoWidth: true,
    loop: true,
    autoplay: true,
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
});

// Function to create and append HTML elements
function createAndAppend(parent, elementType, className) {
  const element = document.createElement(elementType);
  element.className = className;
  parent.appendChild(element);
  return element;
}

// Fetch JSON data and display in HTML
fetch("movies.json")
  .then((response) => response.json())
  .then((data) => {
    const moviesContainer = document.getElementById("movi");

    let moviesHTML = "";

    data.forEach((movie) => {
      moviesHTML += `
        <div class="movie-item" style="padding-top: 150%;">
          <img src="${movie.image}" alt="${movie.title}" />
          <div class="movie-item-content">
            <div class="movie-item-title">${movie.title}</div>
            <div class="movie-infos">
              <div class="move-info">
                <i class="bx bxs-star" style="color: red"></i>
                <span>${movie.rating}</span>
              </div>
              <div class="move-info">
                <i class="bx bxs-time" style="margin-left: 5px; color: red"></i>
                <span>${movie.episodes} tập</span>
              </div>
              <div class="move-info">
                <span style="margin-left: 5px">${movie.quality}</span>
              </div>
              <div class="move-info">
                <span style="margin-left: 5px">${movie.age_rating}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    moviesContainer.innerHTML = moviesHTML;
  })
  .catch((error) => console.error("Error fetching JSON:", error));
