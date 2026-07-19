"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SiteMotion() {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const context = gsap.context(() => {
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
        });
      }

      const header = document.querySelector<HTMLElement>(".site-header");
      if (header) {
        ScrollTrigger.create({
          start: 40,
          end: "max",
          onUpdate: (self) => header.classList.toggle("is-shrunk", self.scroll() > 40),
        });
      }

      // bar fills (dashboard) run regardless of reduced motion, but instant if reduced
      gsap.utils.toArray<HTMLElement>(".bar-fill").forEach((el) => {
        const target = el.dataset.w || "0%";
        if (reduceMotion) {
          el.style.width = target;
          return;
        }
        gsap.fromTo(
          el,
          { width: "0%" },
          {
            width: target,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          }
        );
      });

      if (reduceMotion) return;

      gsap.from('[data-animate="hero-item"]', {
        autoAlpha: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.08,
      });

      gsap.from('[data-animate="hero-media"]', {
        autoAlpha: 0,
        y: 40,
        scale: 0.95,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.28,
      });

      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 40,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-animate="card"]').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 28,
          scale: 0.98,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-animate="footer-item"]').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 92%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-animate="product-phone"]').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 60,
          scale: 0.94,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 80%", once: true },
        });
      });

      if (finePointer) {
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((item) => {
          const moveX = gsap.quickTo(item, "x", { duration: 0.45, ease: "power3" });
          const moveY = gsap.quickTo(item, "y", { duration: 0.45, ease: "power3" });
          const onMove = (event: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            moveX((event.clientX - rect.left - rect.width / 2) * 0.15);
            moveY((event.clientY - rect.top - rect.height / 2) * 0.15);
          };
          const onLeave = () => {
            moveX(0);
            moveY(0);
          };
          item.addEventListener("mousemove", onMove);
          item.addEventListener("mouseleave", onLeave);
        });
      }
    });

    return () => context.revert();
  }, []);

  return <div ref={progressRef} className="site-progress" aria-hidden="true" />;
}
