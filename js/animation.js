console.log("animation");



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
  ScrollTrigger.create({
    trigger: section,
    start: "top 50%",
    onEnter: () => {
      gsap.to(section, { scale: 1, duration: .8 });
    },
    onLeaveBack: () => {
      gsap.to(section, { scale: 0.5, duration: .8});
    },
  });

 
});






const navAnimation = gsap.timeline({})
    .from(navItems, {
        y: -30, 
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back",
    });

document.querySelectorAll("#a").forEach((item) => {
    navAnimation.from(item, {
        y: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back",
    }, "-=0.3");
});

document.querySelectorAll(".nav_lists > *").forEach((item) => {
    item.addEventListener("click", () => {
        navAnimation.reverse();
    });
});

navToggle.addEventListener("click", () => {
    if (checkbox.checked) {
        navAnimation.play();
    } else {
        navAnimation.reverse();
    } 
});

