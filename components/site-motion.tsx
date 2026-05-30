"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Camada de motion do site (GSAP via npm).
 * - barra de progresso de rolagem (renderizada aqui)
 * - header que condensa ao rolar
 * - timeline de entrada do hero + cluster geométrico
 * - movimento ambiente (anéis girando, glow pulsando, tiles flutuando)
 * - parallax por ponteiro no cluster + parallax de fundo no scroll
 * - reveals por seção / grids / footer
 * - botões magnéticos
 *
 * Respeita prefers-reduced-motion: mantém só barra de progresso e header.
 */
export function SiteMotion() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      /* ---------- barra de progresso de rolagem ---------- */
      if (barRef.current) {
        gsap.to(barRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });
      }

      /* ---------- header condensa ao rolar ---------- */
      const header = document.querySelector<HTMLElement>(".site-header");
      if (header) {
        ScrollTrigger.create({
          start: 80,
          end: "max",
          onUpdate: (self) => header.classList.toggle("is-shrunk", self.scroll() > 80),
        });
      }

      if (prefersReducedMotion) {
        return;
      }

      /* ---------- timeline de entrada do hero ---------- */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from('[data-animate="hero-item"]', {
        autoAlpha: 0,
        y: 26,
        duration: 0.85,
        stagger: 0.12,
        delay: 0.1,
      });

      /* cluster geométrico monta em paralelo */
      gsap.from(".cluster .ring", {
        scale: 0.6,
        autoAlpha: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.25,
      });
      gsap.from(".cluster .glow", {
        scale: 0.4,
        autoAlpha: 0,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.35,
      });
      gsap.from(".cluster .bigtile", {
        y: 50,
        scale: 0.82,
        autoAlpha: 0,
        rotateX: -10,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.45,
      });
      gsap.from(".cluster .gtile", {
        scale: 0,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "back.out(1.7)",
        delay: 0.85,
      });

      /* ---------- movimento ambiente contínuo ---------- */
      gsap.to(".cluster .ring.r1", {
        rotation: 360,
        duration: 60,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
      gsap.to(".cluster .ring.r2", {
        rotation: -360,
        duration: 90,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
      gsap.to(".cluster .glow", {
        scale: 1.12,
        opacity: 0.85,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* flutuação ambiente dos tiles — no eixo Y (o ponteiro controla o X) */
      const tiles = gsap.utils.toArray<HTMLElement>(".cluster .gtile");
      tiles.forEach((tile, i) => {
        gsap.to(tile, {
          y: "-=14",
          duration: 2.6 + i * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.9 + i * 0.2,
        });
      });

      /* ---------- parallax por ponteiro no cluster ---------- */
      const cluster = document.querySelector<HTMLElement>(".cluster");
      const bigtile = document.querySelector<HTMLElement>(".cluster .bigtile");
      if (cluster && bigtile && finePointer) {
        gsap.set(bigtile, { transformPerspective: 800 });
        const rotY = gsap.quickTo(bigtile, "rotationY", { duration: 0.6, ease: "power3" });
        const rotX = gsap.quickTo(bigtile, "rotationX", { duration: 0.6, ease: "power3" });

        const onMove = (e: PointerEvent) => {
          const r = cluster.getBoundingClientRect();
          const dx = (e.clientX - r.left) / r.width - 0.5;
          const dy = (e.clientY - r.top) / r.height - 0.5;
          rotY(dx * 16);
          rotX(-dy * 16);
          tiles.forEach((tile, i) => {
            gsap.to(tile, { x: dx * (14 + i * 5), duration: 0.7, ease: "power3" });
          });
        };
        const onLeave = () => {
          rotY(0);
          rotX(0);
          tiles.forEach((tile) => gsap.to(tile, { x: 0, duration: 0.8, ease: "power3" }));
        };
        cluster.addEventListener("pointermove", onMove);
        cluster.addEventListener("pointerleave", onLeave);
      }

      /* ---------- parallax de fundo no scroll ---------- */
      const heroParallax = (selector: string, yPercent: number) => {
        if (!document.querySelector(selector)) return;
        gsap.to(selector, {
          yPercent,
          ease: "none",
          scrollTrigger: {
            trigger: '[data-animate="hero"]',
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      };
      heroParallax(".hero-dots", 18);
      heroParallax(".hero-horizon", -22);
      heroParallax(".cluster", -10);

      /* ---------- reveals ---------- */
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 36,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%", once: true },
        });
      });

      /* cards: reveal com leve escala, depois libera o transform p/ o hover CSS funcionar */
      gsap.utils.toArray<HTMLElement>('[data-animate="card"]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 30,
          scale: 0.97,
          duration: 0.65,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      /* logo do Instagram dá um "pop" */
      const iglogo = document.querySelector<HTMLElement>('[data-animate="iglogo"]');
      if (iglogo) {
        gsap.from(iglogo, {
          autoAlpha: 0,
          scale: 0.6,
          rotation: -12,
          duration: 0.9,
          ease: "back.out(1.6)",
          clearProps: "transform",
          scrollTrigger: { trigger: iglogo, start: "top 82%", once: true },
        });
      }

      /* footer sobe em cascata */
      gsap.utils.toArray<HTMLElement>('[data-animate="footer-item"]').forEach((el, i) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: "footer", start: "top 88%", once: true },
        });
      });

      /* ---------- botões magnéticos ---------- */
      if (finePointer) {
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((btn) => {
          const qx = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
          const qy = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
          const onMove = (e: PointerEvent) => {
            const r = btn.getBoundingClientRect();
            qx((e.clientX - (r.left + r.width / 2)) * 0.4);
            qy((e.clientY - (r.top + r.height / 2)) * 0.4);
          };
          const onLeave = () => {
            qx(0);
            qy(0);
          };
          btn.addEventListener("pointermove", onMove);
          btn.addEventListener("pointerleave", onLeave);
        });
      }

      /* recalcula após carregar fontes/imagens */
      ScrollTrigger.refresh();
    });

    return () => context.revert();
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
