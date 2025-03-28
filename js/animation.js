const navItems = gsap.utils.toArray(".nav_lists > *");
const navToggle = document.querySelector(".nav_toggle");
const checkbox = document.querySelector("#checkbox");

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  ScrollToPlugin,
  EaselPlugin,
  TextPlugin
);

document.querySelectorAll("section").forEach((section) => {
  section.style.transformOrigin = "top center";
  section.style.scale = 0.5;
  section.style.opacity = 0;
  ScrollTrigger.create({
    trigger: section,
    start: "top 70%",
    onEnter: () => {
      gsap.to(section, { scale: 1, opacity: 1, duration: 0.8 });
    },
    onLeaveBack: () => {
      gsap.to(section, { scale: 0.5, opacity: 0, duration: 0.8 });
    },
  });
});

const mm = gsap.matchMedia();
mm.add("(min-width: 1024px)", () => {
  const navAnimation = gsap.timeline({}).from(navItems, {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "back",
  });

  document.querySelectorAll("#a").forEach((item) => {
    navAnimation.from(
      item,
      {
        y: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back",
      },
      "-=0.3"
    );
  });
});
mm.add("(max-width: 600px)", () => {
  const navAnimation = gsap.timeline({}).from(navItems, {
    xPercent: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "back",
  });

  document.querySelectorAll("#a").forEach((item) => {
    navAnimation.from(
      item,
      {
        xPercent: 0,

        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back",
      },
      "-=0.3"
    );
  });
});
