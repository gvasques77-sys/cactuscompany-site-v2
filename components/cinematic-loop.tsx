"use client";

import { useEffect, useRef } from "react";

export function CinematicLoop() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;

    const configurePlayback = () => {
      observer?.disconnect();

      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        },
        { threshold: 0.18 }
      );

      observer.observe(video);
    };

    configurePlayback();
    reducedMotion.addEventListener("change", configurePlayback);

    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", configurePlayback);
    };
  }, []);

  return (
    <div className="cinematic-loop">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/raio-x/student-record.png"
        aria-label="Demonstração do Raio-X ENAMED navegando pela ficha e pelo diagnóstico de um aluno"
      >
        <source src="/videos/diagnostico-raio-x.mp4" type="video/mp4" />
      </video>
      <div className="cinematic-status" aria-hidden="true">
        <span><i /> Diagnóstico em execução</span>
        <span>10.6 s / loop</span>
      </div>
    </div>
  );
}
