"use client";

import { useEffect, useRef } from "react";

export function OscDivider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    const height = 44;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      ctx.clearRect(0, 0, w, height);
      const t = Date.now() / 450;
      ctx.strokeStyle = "rgba(200, 170, 100, 0.45)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const y =
          22 +
          Math.sin(x * 0.038 + t) * 7 +
          Math.sin(x * 0.082 + t * 1.4) * 3.5 +
          Math.sin(x * 0.018 + t * 0.6) * 5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full block"
      style={{ height: 44 }}
      aria-hidden
    />
  );
}
