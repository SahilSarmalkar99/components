import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initCounters = () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const originalText = counter.textContent;

    const match = originalText.match(
      /^([^0-9]*)([\d,.]+)(.*)$/
    );

    if (!match) return;

    const [, prefix, number, suffix] = match;

    const endValue = parseFloat(
      number.replace(/,/g, "")
    );

    const obj = { value: 0 };

    gsap.to(obj, {
      value: endValue,
      duration: 2,
      ease: "power2.out",

      scrollTrigger: {
        trigger: counter,
        start: "top 85%",
        once: true,
      },

      onUpdate: () => {
        counter.textContent =
          prefix +
          Math.floor(obj.value).toLocaleString() +
          suffix;
      },
    });
  });
};