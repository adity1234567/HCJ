var t1=gsap.timeline()

function loader()
{
    t1.from(".loader h3",{
        x:40,
        opacity:0,
        duration:1,
        stagger:0.2/**this the main reason for the beauty */
    })
   
    t1.to(".loader h3",{
        opacity:0,
        x:-40,
        duration:1,
        stagger:0.2
    })

    t1.to(".loader",{
        opacity:0,
        display:"none"
    })
}

loader()