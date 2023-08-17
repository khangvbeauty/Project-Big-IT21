// Reload lên đầu trang
$("#ab").click(function () {
  location.reload();
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
    // //Callback function được gọi khi click xảy ra.
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
});
