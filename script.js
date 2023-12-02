// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation()

function navbarAnimation(){
  gsap.to("#svg-container svg", {
    transform: "translateY(-100%)",
    
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity:0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  
  
}

navbarAnimation()
function videoconanimation(){
    let videocon = document.querySelector("#video-container")
    let playbtn = document.querySelector("#play")

    videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            opacity: 1,
            scale: 1
        })
    })
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            opacity: 0,
            scale: 0
        })
    })
    videocon.addEventListener("mousemove",function(dets){
        gsap.to("#play",{
            left : dets.x - 80,
            top : dets.y - 80
            
        })
    })
}

videoconanimation()

function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5
    })   
    gsap.from("#page2 .elem", {

      scale:0.9,
      opacity:0,
      delay:0,
      duration:0.5,
      // stagger:0.3,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
      },
    });
    gsap.from(".text-page", {
      scale:0.9,
      opacity:0,
      delay:0.1,
      duration:0.5,
      scrollTrigger: {
        trigger: ".text-page",
        scroller: "#main",
      },
    });
    gsap.from(".page4 h1", {
      y:100,
          opacity:0,
          delay:0.1,
          duration:0.9,
          stagger:0.2,
      scrollTrigger: {
        trigger: ".page4",
        scroller: "#main",
      },
    });
    gsap.from("#page3", {
      y:100,
          opacity:0,
          delay:0.1,
          duration:0.9,
          stagger:0.2,
        scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
      },
    });
    
}

loadinganimation()

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
    // })
  
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();


function darkm(){
  const container = document.querySelector(".bdy");
  let isDarkMode = false;
  
  container.addEventListener('dblclick', () => {
      if (isDarkMode) {
          document.body.classList.remove('dark-mode');
          isDarkMode = false;
      } else {
          document.body.classList.add('dark-mode');
          isDarkMode = true;
      }
  });
}

darkm();
  
