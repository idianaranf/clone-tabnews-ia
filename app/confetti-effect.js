"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function ConfettiEffect() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    setIsVisible(true);

    const timeout = window.setTimeout(() => setIsVisible(false), 6000);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!isVisible || dimensions.width === 0 || dimensions.height === 0) {
    return null;
  }

  return (
    <Confetti
      aria-hidden="true"
      height={dimensions.height}
      numberOfPieces={240}
      recycle={false}
      width={dimensions.width}
    />
  );
}
