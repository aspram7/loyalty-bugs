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
smooth.forEach((element) => {
    element.onclick = () => {
        body.classList.remove("disabled");
        navbar.classList.remove("show");
        menuBtn.classList.remove("hide");
    };
});
scrollblog.forEach((element) => {
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

// background image

var backgroundImage = ["home.jpg", "home_1.jpg", "home_2.jpg", "home_3.jpg", "home_4.jpg", "home_5.jpg"];
$(".section-a").css({ "background-image": "url(images/" + backgroundImage[Math.floor(Math.random() * backgroundImage.length)] + ")" });

// statistics

function number_to(className, from, to, duration) {
    let element = $("." + className);
    let start = new Date().getTime();
    setTimeout(function () {
        let now = new Date().getTime() - start;
        let progress = now / duration;
        let result = Math.floor((to - from) * progress + from);
        element.html(progress < 1 ? result + "+" : to + "+");
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
}

window.addEventListener("scroll", function f() {
    if ($(".statistic").offset().top - $(window).scrollTop() - $(window).height() + 200 <= 0) {
        number_to("counter1", 1, 300, 1500);
        number_to("counter2", 1, 27, 1500);
        number_to("counter3", 1, 54, 1500);
        number_to("counter4", 1, 350, 1500);
        window.removeEventListener("scroll", f);
    }
});

// coupons

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("get-time")[0].innerHTML = days;
    document.getElementsByClassName("get-time")[1].innerHTML = hours;
    document.getElementsByClassName("get-time")[2].innerHTML = minutes;
    document.getElementsByClassName("get-time")[3].innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("get-time").innerHTML = "EXPIRED";
    }
}, 0);

var countDownDate1 = new Date("Jan 15, 2021 15:37:25").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate1 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("get-time1")[0].innerHTML = days;
    document.getElementsByClassName("get-time1")[1].innerHTML = hours;
    document.getElementsByClassName("get-time1")[2].innerHTML = minutes;
    document.getElementsByClassName("get-time1")[3].innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("get-time1").innerHTML = "EXPIRED";
    }
}, 0);

var countDownDate2 = new Date("Feb 8, 2021 15:37:25").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("get-time2")[0].innerHTML = days;
    document.getElementsByClassName("get-time2")[1].innerHTML = hours;
    document.getElementsByClassName("get-time2")[2].innerHTML = minutes;
    document.getElementsByClassName("get-time2")[3].innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("get-time2").innerHTML = "EXPIRED";
    }
}, 0);
