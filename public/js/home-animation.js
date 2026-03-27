window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
  let mm = gsap.matchMedia();

  //   hero區 標題動畫
  let split = SplitText.create(".home-title-line", {
    type: "chars, words, lines",
  });

  gsap.from(split.chars, {
    y: 100,
    autoAlpha: 0,
    stagger: 0.05,
  });

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
  // 桌機版
  mm.add("(min-width: 768px)", () => {
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
    });
  });

  // 手機版
  mm.add("(max-width: 767px)", () => {
    // 進場
    gsap.to(".selected-item", {
      scrollTrigger: {
        trigger: ".selected",
        start: "top 50%",
        end: "30% 40%",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },
      x: 0,
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
    });
  });

  // 很多案例
  mm.add("(min-width: 768px)", () => {
    // 進場
    let tlWorks = gsap.timeline({
      scrollTrigger: {
        trigger: ".works",
        start: "top 90%",
        end: "30% 40%",
        scrub: 1,
      },
    });

    tlWorks
      .to(".works-device--top", { x: 0 })
      .to(".works-text__slogan", { y: 0 }, "<")
      .to(".works-text__more", { y: 0 }, "<")
      .to(".works-device--bottom", { x: 0 }, "<");

    // 離場
    let tlWorksOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".other-works",
        start: "top bottom",
        end: "30% 40%",
        scrub: 1,
      },
    });

    tlWorksOut
      .to(".works-device--top", { xPercent: 110 })
      .to(".works-text__slogan", { yPercent: 110 }, "<")
      .to(".works-text__more", { yPercent: -110 }, "<")
      .to(".works-device--bottom", { xPercent: -110 }, "<");
  });

  mm.add("(max-width: 767px)", () => {
    // 進場
    let tlWorks = gsap.timeline({
      scrollTrigger: {
        trigger: ".works",
        start: "top 90%",
        end: "30% 40%",
        scrub: 1,
      },
    });

    tlWorks
      .to(".works-device--top", { x: 0 })
      .to(".works-text__slogan", { y: 0 }, "<")
      .to(".works-text__more", { y: 0 }, "<")
      .to(".works-device--bottom", { x: 0 }, "<");

    // 離場
    let tlWorksOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".other-works",
        start: "top 70%",
        end: "30% 40%",
        scrub: 1,
      },
    });

    tlWorksOut
      .to(".works-device--top", { xPercent: 110 })
      .to(".works-text__slogan", { yPercent: 110 }, "<")
      .to(".works-text__more", { yPercent: -110 }, "<")
      .to(".works-device--bottom", { xPercent: -110 }, "<");
  });

  // 其他案例
  // 進場
  mm.add("(min-width: 768px)", () => {
    let tlOtherWorks = gsap.timeline({
      scrollTrigger: {
        trigger: ".other-works",
        start: "top 50%",
        end: "50% 60%",
        scrub: 1,
      },
    });

    tlOtherWorks
      .to(".other-works-item__text", { y: 0 })
      .to(".other-works-pic", { y: 0 }, "<");

    // 離場
    let tlOtherWorksOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial",
        start: "top bottom",
        end: "30% 40%",
        scrub: 1,
      },
    });

    tlOtherWorksOut
      .to(".other-works-item__text", { yPercent: -100 })
      .to(".other-works-pic", { scale: 0.5, opacity: 0 }, "<");
  });

  mm.add("(max-width: 767px)", () => {
    let tlOtherWorks = gsap.timeline({
      scrollTrigger: {
        trigger: ".other-works",
        start: "top 30%",
        end: "50% 50%",
        markers: true,
        scrub: 1,
      },
    });

    tlOtherWorks
      .to(".other-works-item__text", { y: 0 })
      .to(".other-works-pic", { y: 0 }, "<");

    // 離場
    let tlOtherWorksOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial",
        start: "top bottom",
        end: "30% 40%",
        scrub: 1,
      },
    });

    tlOtherWorksOut
      .to(".other-works-item__text", { yPercent: -100 })
      .to(".other-works-pic", { scale: 0.5, opacity: 0 }, "<");
  });

  // 客戶反饋
  // 進場

  let tlTestimonial = gsap.timeline({
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top 60%",
      end: "30% 40%",
      scrub: 1,
    },
  });

  tlTestimonial
    .to(".title-testimonial", { y: 0 })
    .to(".testimonial-wrapper", { scale: 1, opacity: 1 }, "<");

  // 服務項目
  let tlService = gsap.timeline({
    scrollTrigger: {
      trigger: ".service",
      start: "top 70%",
      end: "30% 40%",
      scrub: 1,
    },
  });

  tlService.to(".title-service", { y: 0 }).to(".service-swiper", { y: 0 }, "<");

  let tlServiceOut = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      end: "30% 40%",
      scrub: 1,
    },
  });

  tlServiceOut
    .to(".title-service", { yPercent: 100 })
    .to(".service-swiper", { xPercent: -100 }, "<");
});
