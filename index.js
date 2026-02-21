// gsap.from(".nav-part2 ul li a", {
//   y: -50,
//   duration: 0.5,
//   opaciy:0,
//   delay:0.4,
//    stagger:1

// });

gsap.from("nav", {
  y: -50,
  duration: 0.5,
  opacity: 0,
  delay: 0.4,
  stagger: 0.2
});

gsap.from(".left, .right", {
  y: -50,
  duration: 0.5,
  opacity: 0,
  delay: 0.4,
  stagger: 0.2
});


gsap.from('.page2 .elem',{
    y:100,
    // delay:1,
    // duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".page2 .elem",
        scroller:"body",
        // markers:true,
        scrub:1,
        start:"top 99%",
        
end: "bottom 80%",
         end:" top 30%"
    }
})

gsap.from('#about', {
    y: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",  
        start: "top 90%",  
        end: "top 50%",    
        scrub: 1,
        // markers: true
    }
});


gsap.from('footer', {
    y: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "footer",  
        start: "top 90%",  
        end: "top 50%",    
        scrub: 1,
        markers: true
    }
});