"use client";

import { useEffect, useRef, useState } from "react";

const DASHBOARD_WIDTH = 1280;
const DASHBOARD_HEIGHT = 840;

type RaioxDemoProps = {
  className?: string;
  interactive?: boolean;
};

export function RaioxDemo({ className = "", interactive = true }: RaioxDemoProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(0.5);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateScale = () => {
      const nextScale = Math.min(1, viewport.clientWidth / DASHBOARD_WIDTH);
      setScale(nextScale || 0.5);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={viewportRef}
      className={`raiox-viewport ${interactive ? "is-interactive" : "is-preview"} ${className}`}
      style={{ height: DASHBOARD_HEIGHT * scale }}
    >
      <div
        className="raiox-stage"
        style={{
          width: DASHBOARD_WIDTH,
          height: DASHBOARD_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        {!loaded && <div className="raiox-loading">Carregando diagnóstico institucional…</div>}
        <iframe
          src="/raio-x-enamed/index.html"
          title="Demonstração interativa do Raio-X ENAMED"
          width={DASHBOARD_WIDTH}
          height={DASHBOARD_HEIGHT}
          loading={interactive ? "lazy" : "eager"}
          onLoad={() => setLoaded(true)}
          sandbox="allow-scripts allow-same-origin allow-forms"
          tabIndex={interactive ? 0 : -1}
          aria-hidden={interactive ? undefined : true}
        />
      </div>
      {!interactive && (
        <a className="raiox-preview-link" href="#raio-x" aria-label="Ir para a demonstração interativa do Raio-X ENAMED" />
      )}
    </div>
  );
}
