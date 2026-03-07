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
    
    
    // 精選作品
    gsap.set(".selected-item", {
      y: 100,
      opacity: 0,
    });

    gsap.to(".selected-item", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".selected",
        start: "top 70%",
        end: "+=300",
        scrub: true,
      },
    });

    // 很多作品
  const worksTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".works",
      start: "top 70%",
      end: "+=500",
      scrub: true,
    },
  });

  worksTl
    .from(".works-device--top", {
      x: "-150%",
    })
    .from(
      ".works-text__slogan",
      {
        y: "-110%",
      },
      "<",
    )
    .from(
      ".works-text__more",
      {
        y: "110%",
      },
      "<",
    )
    .from(
      ".works-device--bottom",
      {
        x: "150%",
      },
      "<",
    );

  const worksOut = gsap.timeline({
    scrollTrigger: {
      trigger: ".other-works",
      start: "top 70%",
      end: "+=500",
      scrub: true,
    },
  });

  worksOut
    .to(".works-device--top", {
      x: "150%",
    })
    .to(
      ".works-text__slogan",
      {
        y: "-110%",
      },
      "<",
    )
    .to(
      ".works-text__more",
      {
        y: "110%",
      },
      "<",
    )
    .to(
      ".works-device--bottom",
      {
        x: "-150%",
      },
      "<",
    );
});
