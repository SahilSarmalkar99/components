import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export function barFadeIn(barsRef){
    useEffect(() => {
  gsap.fromTo(
    barsRef.current,
    {
      x: 0,
      opacity: 0,
      scaleX: 0,
      transformOrigin: "left center",
    },
    {
      x: 0,
      opacity: 1,
      scaleX: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger : {
        trigger : barsRef.current,
        start : "top 70%",
        end : "bottom 20%",
        scrub : 2,
      }
    }
  );
}, []);
}