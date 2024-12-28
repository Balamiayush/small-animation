const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero1",
    start: "0% 50%",
    end: "100% 50%",
    scrub: 1,
    // markers: true
  },
});
tl.to(".img1",{
    x:-500,
    rotate:-30,
    ease: "power3.inOut"
},'a')
tl.to(".img2",{
    x:-500,
    rotate:-30,
    ease: "power3.inOut"
},'a')
tl.to(".img3",{
    x:500,
    rotate:30,
    ease: "power3.inOut"
},'a')
tl.to(".img4",{
    x:500,
    rotate:30,
    ease: "power3.inOut"
},'a')
tl.to(".hero1 h1",{
    opacity: 1,
    duration: 1,
    ease: "power3.inOut"
},'a')