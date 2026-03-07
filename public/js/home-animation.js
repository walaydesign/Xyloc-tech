window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  //   hero區 標題動畫
  let split = SplitText.create(".home-title-line", {
    type: "chars, words, lines",
  });

  gsap.from(split.chars, {
    y: 100,
    autoAlpha: 0,
    stagger: 0.05,
  });

  // gsap.to(split.chars, {
  //   y: -120,
  //   opacity: 0,
  //   stagger: 0.05,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".hero",
  //     start: "top top",
  //     end: "+=200",
  //     scrub: true,
  //   },
  // });

  gsap.from(".hero__text", {
    opacity: 1,
    y: 0,
  });

  gsap.to(".hero__text", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=300",
      scrub: 1,
    },
  });

  //   精選案例動畫
  gsap.to(".selected-item", {
    scrollTrigger: {
      trigger: ".selected",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: 0,
  });

  // gsap.from(".selected-item", {
  //   scrollTrigger: {
  //     trigger: ".works",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 2,
  //   y: 0,
  // });

  // 很多案例
  gsap.to(".works-device--top", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    x: 0,
  });

  gsap.to(".works-text__slogan", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: 0,
  });

  gsap.to(".works-text__more", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: 0,
  });

  gsap.to(".works-device--bottom", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    x: 0,
  });

  // gsap.from(".works-device--top", {
  //   scrollTrigger: {
  //     trigger: ".other-works",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 2,
  //   x: 0,
  // });

  // gsap.from(".works-text__slogan", {
  //   scrollTrigger: {
  //     trigger: ".other-works",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 0.5,
  //   y: 0,
  // });

  // gsap.from(".works-text__more", {
  //   scrollTrigger: {
  //     trigger: ".other-works",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 0.5,
  //   y: 0,
  // });

  // gsap.from(".works-device--bottom", {
  //   scrollTrigger: {
  //     trigger: ".other-works",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: true,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 3,
  //   x: 0,
  // });

  // 其他案例
  gsap.to(".other-works-item__text", {
    scrollTrigger: {
      trigger: ".other-works",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: 0,
  });

  gsap.to(".other-works-pic", {
    scrollTrigger: {
      trigger: ".other-works",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: 0,
  });

  // gsap.from(".other-works-item__text", {
  //   scrollTrigger: {
  //     trigger: ".testimonial",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 2,
  //   y: 0,
  // });

  // gsap.from(".other-works-pic", {
  //   scrollTrigger: {
  //     trigger: ".testimonial",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 2,
  //   y: 0,
  // });

  // 客戶反饋
  gsap.to(".title-testimonial", {
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: 0,
  });

  gsap.to(".testimonial-wrapper", {
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    scale: 1,
    opacity: 1,
  });

  // gsap.from(".title-testimonial", {
  //   scrollTrigger: {
  //     trigger: ".service",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 2,
  //   y: 0,
  // });

  // gsap.from(".testimonial-wrapper", {
  //   scrollTrigger: {
  //     trigger: ".service",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 2,
  //   scale: 1,
  //   opacity: 1,
  // });

  // 服務項目
  gsap.to(".title-service", {
    scrollTrigger: {
      trigger: ".service",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: 0,
  });

  gsap.to(".service-swiper", {
    scrollTrigger: {
      trigger: ".service",
      start: "top 70%",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: 0,
  });

  // gsap.from(".title-service", {
  //   scrollTrigger: {
  //     trigger: ".contact",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 2,
  //   y: 0,
  // });

  // gsap.from(".service-swiper", {
  //   scrollTrigger: {
  //     trigger: ".contact",
  //     start: "top 70%",
  //     end: "+=300",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   duration: 2,
  //   y: 0,
  // });
});

