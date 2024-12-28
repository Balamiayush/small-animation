const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero1",
      start: "0% 50%",
      end: "100% 50%",
      scrub: 1,
    },
  });
  tl.to(".img1", { x: -500, rotate: -30, ease: "power3.inOut" }, "a")
    .to(".img2", { x: -500, rotate: -30, ease: "power3.inOut" }, "a")
    .to(".img3", { x: 500, rotate: 30, ease: "power3.inOut" }, "a")
    .to(".img4", { x: 500, rotate: 30, ease: "power3.inOut" }, "a")
    .to(".hero1 h1", { opacity: 1, y: -100, duration: 1, ease: "power3.inOut" }, "a");
});

mm.add("(min-width: 800px) and (max-width: 1199px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero1",
      start: "0% 50%",
      end: "100% 50%",
      scrub: 1,
    },
  });
  tl.to(".img1", { x: -300, rotate: -20, ease: "power3.inOut" }, "a")
    .to(".img2", { x: -300, rotate: -20, ease: "power3.inOut" }, "a")
    .to(".img3", { x: 300, rotate: 20, ease: "power3.inOut" }, "a")
    .to(".img4", { x: 300, rotate: 20, ease: "power3.inOut" }, "a")
    .to(".hero1 h1", { opacity: 1, y: -80, duration: 1, ease: "power3.inOut" }, "a");
});

mm.add("(max-width: 799px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero1",
      start: "0% 50%",
      end: "100% 50%",
      scrub: 1,
    },
  });
  tl.to(".img1", { x: -100, rotate: -10, ease: "power3.inOut" }, "a")
    .to(".img2", { x: -100, rotate: -10, ease: "power3.inOut" }, "a")
    .to(".img3", { x: 100, rotate: 10, ease: "power3.inOut" }, "a")
    .to(".img4", { x: 100, rotate: 10, ease: "power3.inOut" }, "a")
    .to(".hero1 h1", { opacity: 1, y: -50, duration: 1, ease: "power3.inOut" }, "a");
});
