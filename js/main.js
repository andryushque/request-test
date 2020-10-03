$(document).ready(function () {
  /*=== Header ===*/
  const buttonEmail = $(".nav__link--email");
  const buttonCopy = $(".nav__link-button");
  buttonEmail.on("click", function (event) {
    event.preventDefault();
    buttonEmail.toggleClass("active");
    buttonCopy.toggleClass("active");
  });

  const buttonPhone = $(".nav__link--phone");
  const buttonClose = $(".submenu__close");
  const submenu = $(".nav__submenu");
  const overlay = $(".nav-wrapper__overlay");
  buttonPhone.on("click", function (event) {
    event.preventDefault();
    submenu.addClass("active");
    buttonPhone.addClass("active");
    overlay.addClass("active");
  });
  buttonClose.on("click", function (event) {
    event.preventDefault();
    submenu.removeClass("active");
    buttonPhone.removeClass("active");
    overlay.removeClass("active");
  });

  /*=== Intro slider ===*/
  var introSlider = new Swiper(".swiper-container", {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
});
