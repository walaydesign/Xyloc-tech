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
  //     end: "+=100",
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

  // 進場
  gsap.to(".selected-item", {
    scrollTrigger: {
      trigger: ".selected",
      start: "top 90%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    y: 0,
    duration: 2,
  });

  // 離場
  gsap.to(".selected-item", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 90%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    scale: 0.5,
    opacity: 0,
    duration: 2,
  });

  // 很多案例

  // 進場
  gsap.to(".works-device--top", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 90%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    x: 0,
    duration: 2,
  });

  gsap.to(".works-text__slogan", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 40%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    y: 0,
    duration: 2,
  });

  gsap.to(".works-text__more", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 40%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    y: 0,
    duration: 2,
  });

  gsap.to(".works-device--bottom", {
    scrollTrigger: {
      trigger: ".works",
      start: "top 40%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    x: 0,
    duration: 2,
  });

  // 離場
  gsap.to(".works-device--top", {
    scrollTrigger: {
      trigger: ".other-works",
      start: "top bottom",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    xPercent: 110,
    duration: 2,
  });

  gsap.to(".works-text__slogan", {
    scrollTrigger: {
      trigger: ".other-works",
      start: "top bottom",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    yPercent: 110,
    duration: 2,
  });

  gsap.to(".works-text__more", {
    scrollTrigger: {
      trigger: ".other-works",
      start: "top bottom",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    yPercent: -110,
    duration: 2,
  });

  gsap.to(".works-device--bottom", {
    scrollTrigger: {
      trigger: ".other-works",
      start: "top bottom",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    xPercent: -110,
    duration: 2,
  });

  // 其他案例
  // 進場
  gsap.to(".other-works-item__text", {
    scrollTrigger: {
      trigger: ".other-works",
      start: "top 50%",
      end: "40% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    y: 0,
    duration: 2,
  });

  gsap.to(".other-works-pic", {
    scrollTrigger: {
      trigger: ".other-works",
      start: "top 40%",
      end: "50% 60%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    y: 0,
    duration: 2,
  });

  // 離場
  gsap.to(".other-works-item__text", {
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top bottom",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    yPercent: -100,
    duration: 2,
  });

  gsap.to(".other-works-pic", {
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top bottom",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    scale: 0.5,
    opacity: 0,
    duration: 2,
  });

  // 客戶反饋
  // 進場
  gsap.to(".title-testimonial", {
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top 60%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    y: 0,
    duration: 2,
  });

  gsap.to(".testimonial-wrapper", {
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top 60%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    scale: 1,
    opacity: 1,
    duration: 2,
  });

  // 離場
  // gsap.to(".title-testimonial", {
  //   scrollTrigger: {
  //     trigger: ".service",
  //     start: "top bottom",
  //     end: "30% 40%",
  //     scrub: 1,
  //     // markers: true,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   yPercent: 110,
  //   duration: 2,
  // });

  // gsap.to(".testimonial-wrapper", {
  //   scrollTrigger: {
  //     trigger: ".service",
  //     start: "top 90%",
  //     end: "30% 40%",
  //     scrub: 1,
  //     toggleActions: "restart pause reverse pause",
  //   },
  //   scale: 0.5,
  //   opacity: 0,
  //   duration: 2,
  // });


  // 服務項目
    gsap.to(".title-service", {
      scrollTrigger: {
        trigger: ".service",
        start: "top 60%",
        end: "30% 40%",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },
      y: 0,
      duration: 2,
    });

    gsap.to(".service-swiper", {
      scrollTrigger: {
        trigger: ".service",
        start: "top 60%",
        end: "30% 40%",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },
      y: 0,
      duration: 2,
    });
  
  gsap.to(".title-service", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    yPercent: 100,
    duration: 2,
  });

  gsap.to(".service-swiper", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      end: "30% 40%",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
    },
    xPercent: -100,
    duration: 2,
  });

});
