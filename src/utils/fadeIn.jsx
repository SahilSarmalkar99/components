import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function textFadeIn(ref){
    useEffect(()=>{
        gsap.fromTo(ref.current , {
            y:80,
            opacity:0,
        } , {
            y:0,
            opacity : 1,
            scrollTrigger: {
                trigger : ref.current,
                start : "top 80%",
                scrub : 2
            }
        })
    })
}