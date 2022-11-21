const hero = document.querySelector(".hero");

gsap.timeline({
  scrollTrigger: {
    trigger: hero,
    scrub: true,
    start: "top top",
    end: "+=200%", 
    toggleActions: "restart reverse none reverse",
  }
})
.fromTo(hero, {y: 0}, {y: -50})
.from(hero, {opacity: 1, duration: 0.5}, 0.8)
.to(hero, {opacity: 0, duration: 0.5}, 0.1)

const forwards = gsap.timeline({
  scrollTrigger: {
    start: "top bottom", 
    end: "bottom top",
    scrub: true,
  },
  ease: "none",
})

forwards.to(".projects .forwards", {trigger: ".projects .section-intro", x:"100%"});
forwards.to(".about .forwards", {trigger: ".grid", x:"100%"});

const backwards = gsap.timeline({
  scrollTrigger: {
    start: "top bottom", 
    end: "bottom top",
    scrub: true,
  },
  ease: "none",
})

backwards.to(".projects .backwards", {trigger: ".projects .section-intro", x:"-100%"});
backwards.to(".about .backwards", {trigger: ".grid", x:"-100%"});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    start: "20% bottom", 
    toggleActions: "restart none none reverse",
  }, 
  scale: 1
});
tl.from(".item", {y:300, opacity: 0, duration: 1,scale: 0.8})