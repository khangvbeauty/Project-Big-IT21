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
});

// Điều khiển video trực tiếp
const videoPlayer = document.querySelector("video");

// Đối với các chức năng phát sóng và danh sách kênh, bạn có thể sử dụng JavaScript để tạo nội dung động dựa vào dữ liệu từ cơ sở dữ liệu hoặc tệp JSON.

// Ví dụ tạo danh sách chương trình và thời gian phát sóng
const scheduleSection = document.querySelector(".schedule");
const scheduleData = [
  { name: "Chương trình A", time: "08:00 AM" },
  { name: "Chương trình B", time: "10:30 AM" },
  { name: "Chương trình C", time: "12:00 PM" },
  { name: "Chương trình D", time: "2:30 PM" },
  { name: "Chương trình E", time: "4:00 PM" },
  { name: "Chương trình F", time: "6:30 PM" },
  { name: "Chương trình G", time: "8:00 PM" },
  { name: "Chương trình H", time: "10:30 PM" },
  { name: "Chương trình I", time: "12:00 AM" },
  { name: "Chương trình J", time: "2:30 AM" },
  { name: "Chương trình K", time: "4:00 AM" },
  { name: "Chương trình L", time: "6:30 AM" },
  // Thêm các chương trình khác ở đây
];

scheduleData.forEach((program) => {
  const programElement = document.createElement("p");
  programElement.textContent = `${program.time}: ${program.name}`;
  scheduleSection.appendChild(programElement);
});

//Ví dạo danh sách kênh cơ bản

// Ví dụ tạo danh sách kênh truyền hình
const channelsSection = document.querySelector(".channels");
const channelData = [
  { name: "Kênh 1", url: "channel1_url" },
  { name: "Kênh 2", url: "channel2_url" },
  // Thêm các kênh khác ở đây
];

channelData.forEach((channel) => {
  const channelElement = document.createElement("a");
  channelElement.textContent = channel.name;
  channelElement.href = channel.url;
  channelsSection.appendChild(channelElement);
});
