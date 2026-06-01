import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function arc( leftArcRef , rightArcRef ){

    useEffect(() => {
      [leftArcRef.current, rightArcRef.current].forEach((path) => {
        const length = path.getTotalLength();
    
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: leftArcRef.current,
          start: "top 80%",
          end : "bottom 20%",
          toggleActions: "play none none none",
          scrub : true
        },
      });
    
      tl.to(
      [leftArcRef.current, rightArcRef.current],
      {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
    }, []);

}
