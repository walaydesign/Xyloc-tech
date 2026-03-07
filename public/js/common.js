AOS.init({ startEvent: "load" });
window.addEventListener("load", AOS.refresh);

// 平順滑動的設定
const lenis = new Lenis({
  autoRaf: true,
});

lenis.on("scroll", (e) => {
//   console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




// menu
$(".header__menu").click(function () {
  $(this).toggleClass("active");
  $(".header__nav").toggleClass("active");
});

resize();
$(window).on("resize scroll", function () {
  resize();
});

function resize() {
  // header
  if ($(window).scrollTop() > 0) {
    $(".header").addClass("scrolldown");
  } else {
    $(".header").removeClass("scrolldown");
  }
}
