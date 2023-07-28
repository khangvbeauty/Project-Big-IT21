let timer = null;
let x = 0;
let y = 0;
let incx = 5;
let incy = 5;
function startAnimation() {
  let b = document.getElementById("ball");
  let a = document.getElementById("container");

  timer = setInterval(function () {
    if (y < 0 || y + b.offsetHeight >= a.offsetHeight) {
      incy = -incy;
    }
    if (x < 0 || x + b.offsetWidth >= a.offsetWidth) {
      incx = -incx;
    }
    x += incx;
    y += incy;
    b.style.left = `${x}px`;
    b.style.top = `${y}px`;
  }, 15);
}
function stopAnimation() {
  if (timer != null) {
    clearInterval(timer);
  }
}
