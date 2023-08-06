function loadPricing() {
  let h = "";
  fetch("./data/pricing-list.json")
    .then((res) => res.json())
    .then((data) => {
      for (let p of data) {
        h += `<div class="col-4 col-md-12 col-sm-12">
                <div class="pricing-box hightlight">
                  <div class="pricing-box-header">
                    <div class="pricing-name">${p.name}</div>
                    <div class="pricing-price">${p.price}</div>
                  </div>
                  <div class="pricing-box-content">
                    <p>${p.device}</p>
                    <p>${p.channel}</p>
                    <p>${p.banner}</p>
                    <p>${p.endow}</p>
                  </div>
                  <div class="pricing-box-action">
                    <a href="#" class="btn btn-hover">
                      <span>Đăng ký ngay</span>
                    </a>
                  </div>
                </div>
              </div>`;
      }
      let e = document.getElementsByClassName("row");
      e.innerHTML += h;
    });
}
window.onload = function () {
  loadPricing();
};
