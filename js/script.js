$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".scrollToTop").fadeIn(100);
    } else {
      $(".scrollToTop").fadeOut(100);
    }
  });

  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });
});

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const colorCh = document.querySelectorAll(".colorCh");
const cancelBtn = document.querySelector(".cancel-btn");
const smooth = document.querySelectorAll(".smooth-goto");
const scrollblog = document.querySelectorAll(".scrblog-etc");


menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
smooth.forEach(element => {
  element.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  };
});
scrollblog.forEach(element => {
  element.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  };
});
window.onscroll = () => {
  if (this.scrollY >= 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

$(".smooth-goto").on("click", function () {
  $("html, body").animate({ scrollTop: $(this.hash).offset().top - 250 }, 100);
  return false;
});

$(".scrblog-etc").on("click", function () {
  $("html, body").animate({ scrollTop: $(this.hash).offset().top - 110 }, 100);
  return false;
});
