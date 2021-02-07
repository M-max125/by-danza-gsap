
  //Parallax

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);


gsap.from(".text h1", { y: -700, duration: 1, ease: "back" });

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
  trigger: ".intro",
  start: "top 80%",
  end: "bottom 20%",
 toggleClass: "intro-bg"
  
  
});

ScrollTrigger.create({
  trigger: ".intro",
  start: "top 80%",
  end: "bottom 20%",
  toggleClass: {targets: ".intro h1", className: "white"}
  
  
});

ScrollTrigger.create({
  trigger: ".intro",
  start: "top 80%",
  end: "bottom 20%",
  toggleClass: {targets: ".intro p", className: "white"}
  
  
});






gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top 100%",
    end: "bottom 90%",
    scrub: true,
    toggleActions: "play pause resume reset"
    

  }
}).to(".hero .small-img:nth-child(1)", { x: 60, y: 230, rotation: 360 })
  .to(".hero .small-img:nth-child(2)", { x: -260, y: -150, rotation: 360 })
  .to(".hero .small-img:nth-child(3)", { x: 90, y: 295, rotation: 360 })
  .to(".hero .small-img:nth-child(4)", { x: 440, y: -228, rotation: 360 })
  .to(".hero .small-img:nth-child(5)", { x: 100, y: -128, rotation: 360 })
  .to(".hero .small-img:nth-child(6)", { x: -191, y: 294, rotation: 360 })
  .to(".hero .small-img:nth-child(7)", { x: 0, y: -265, rotation: 360 })
  .to(".hero .small-img:nth-child(8)", { x: -242, y: -106, rotation: 360 })
  .to(".hero .small-img:nth-child(9)", { x: 98, y: 164, rotation: 360 });



gsap.timeline({
  scrollTrigger: {
    trigger: ".random",
    start: "top 90%",
    end: "bottom 90%",
    toggleActions: "play none resume reset"
  }
}).from(".line span", 1.2, {
  y: 200,
  ease: "power4.out", delay: 1,
  skewY: 10,
  stagger: {
    amount: 0.4
  }
});


function animateFrom(elem, direction) {
  direction = direction | 1;
  
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); 
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } 
    });
  });
});





let sections = gsap.utils.toArray(".container .panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".side-scrolling-wrapper",
    pin: true,
    start: "top +=15px",
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: {min: 0.2, max: 0.3},
      delay: 0
    },
    // Base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + (document.querySelector(".container").offsetWidth / 5)
  }
});



gsap.utils.toArray(".panel-gallery").forEach((slide, i) => {
  ScrollTrigger.create({
    trigger: slide,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});


// ScrollTrigger.create({
//   snap: 1 / 10
// });













  































