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

      if (reduceMotion) return;

      gsap.from('[data-animate="hero-item"]', {
        autoAlpha: 0,
        y: 36,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.13,
        delay: 0.1,
      });

      gsap.from('[data-animate="hero-media"]', {
        autoAlpha: 0,
        y: 42,
        scale: 0.94,
        duration: 1.15,
        ease: "power3.out",
        delay: 0.32,
      });

      gsap.to(".orbit-one", {
        rotation: 360,
        duration: 72,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to(".orbit-two", {
        rotation: -360,
        duration: 96,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to(".stage-chip", {
        y: -14,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.28,
      });

      gsap.to(".brand-stage", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: '[data-animate="hero"]',
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 42,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 82%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-animate="card"]').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 30,
          scale: 0.98,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.from('[data-animate="product-phone"]', {
        autoAlpha: 0,
        y: 64,
        rotateX: -8,
        scale: 0.94,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: '[data-animate="product-phone"]', start: "top 78%", once: true },
      });

      if (finePointer) {
        const magneticItems = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
        magneticItems.forEach((item) => {
          const moveX = gsap.quickTo(item, "x", { duration: 0.45, ease: "power3" });
          const moveY = gsap.quickTo(item, "y", { duration: 0.45, ease: "power3" });

          const onMove = (event: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            moveX((event.clientX - rect.left - rect.width / 2) * 0.18);
            moveY((event.clientY - rect.top - rect.height / 2) * 0.18);
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
