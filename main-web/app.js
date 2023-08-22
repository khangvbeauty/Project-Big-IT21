// Reload lên đầu trang - Hàm này sẽ tải lại trang web hiện tại
$("#ab").click(function () {
  location.reload();
});
//di chuyển lên đầu trang
$(window).scroll(function () {
  $("#top-up").off("click");
  // Xử lý sự kiện nhấp chuột vào nút Scroll To Top
  $("#top-up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
  // Hiển thị nút Scroll To Top khi người dùng cuộn trang xuống
  if ($(this).scrollTop() > 800) {
    $("#top-up").fadeIn();
  } else {
    $("#top-up").fadeOut();
  }
});
// Đồng hồ:
setInterval(function timer() {
  let d = new Date();
  let c = (document.getElementById("block").innerHTML = `${d.getDate()}/0${
    d.getMonth() + 1
  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
}, 1000);
//Lắng nghe sự kiện hoàn thành load trang thì các sự kiện khác bên trong sẽ load:
//callback function:
document.addEventListener("DOMContentLoaded", () => {
  //Lấy thẻ HTML có id là "hamburger-menu" và "nav-menu"
  //và lưu vào biến `hamburgermenu` và `navmenu`
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const navMenu = document.querySelector("#nav-menu");
  //Gán một event listener cho nút "hamburger-menu" để xử lý sự kiện click.
  hamburgerMenu.addEventListener("click", () => {
    //Callback function được gọi khi click xảy ra.
    hamburgerMenu.classList.toggle("active");
    //Trong callback, class "active" được thêm hoặc xóa khỏi `hamburgermenu`
    navMenu.classList.toggle("active");
    //và `navmenu` bằng cách sử dụng `classList.toggle()`
  });

  //setting owl carousel //thêm icon thành hai nút điều hướng slide
  const navText = [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ];
  //Owl Carousel là một plugin giúp xây dựng các slide show được sử dụng hàng đầu
  //trong website bởi tính đa năng, tiện lợi của nó.
  $("#hero-carousel").owlCarousel({
    items: 1, //Số lượng mục hiển thị trên một trang
    dots: false, //tắt nút chuyển slide
    loop: true, //quay lại slide ban đầu
    nav: true, //bật thanh điều hướng slide
    navText: navText, //sử dụng nội dung trong `navtext` để làm nút điều hướng
    autoPlayHoverPause: true, //tự động dừng khi rê chuột vào slide
  });

  $("#top-movies-slide").owlCarousel({
    items: 2, //Số lượng mục hiển thị trên một trang
    dots: false, //tắt nút chuyển slide
    loop: true, //quay lại slide ban đầu
    autoplay: true, //tự động chuyển slide, có thể set time = autoplayTimeout:1000
    autoPlayHoverPause: true, //tự động dừng khi rê chuột vào slide
    responsive: {
      //Responsive slide
      500: {
        //trên 500px sẽ hiển thị 3 item trên 1 slide
        items: 3,
      },
      1280: {
        //trên 1280px sẽ hiển thị 4 item trên 1 slide
        items: 4,
      },
      1600: {
        //trên 1600px sẽ hiển thị 6 item trên 1 slide
        items: 6,
      },
    },
  });
  $(".movie-slide").owlCarousel({
    items: 2, //Số lượng mục hiển thị trên một trang
    dots: false, //tắt nút chuyển slide
    nav: true, //bật thanh điều hướng slide
    navText: navText, //sử dụng nội dung trong `navtext` để làm nút điều hướng
    margin: 15, //margin giữa các item là 15px
    responsive: {
      //Responsive slide
      500: {
        //trên 500px sẽ hiển thị 3 item trên 1 slide
        items: 2,
      },
      1280: {
        //trên 1280px sẽ hiển thị 4 item trên 1 slide
        items: 4,
      },
      1600: {
        //trên 1600px sẽ hiển thị 6 item trên 1 slide
        items: 6,
      },
    },
  });
});
