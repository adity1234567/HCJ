var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h3", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "90%"
}, "anim")

/**
  scroll korle eksathe h1,h3 and video
  jeno chole tar jonno--
  ekta t1 dia common chng banai nisi..thn
  proti k anim dia rename kore
  oder kaj specify kore disi
 */