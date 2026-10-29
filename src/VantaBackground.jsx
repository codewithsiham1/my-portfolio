import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

// Animated Vanta.js network background, using the colours of the logo.
export default function VantaBackground() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const effect = NET({
      el: ref.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0xc9a2ff,
      backgroundColor: 0x14003a,
      points: 10,
      maxDistance: 22,
      spacing: 18,
      showDots: true,
    });
    return () => effect.destroy();
  }, []);

  return <div ref={ref} className="vanta" aria-hidden="true" />;
}
