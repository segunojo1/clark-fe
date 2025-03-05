"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GravityScrollEffect() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          {
            y: -20, // Start inside the hole
            opacity: 1,
          },
          {
            y: 40 + index * 10, // Falls out of the hole as you scroll
            rotate: (index) => Math.random() * 20 - 10, // Random tilt
            opacity: 0.8, // Fades slightly for a smoother effect
            ease: "expo.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center", // Start animating when the hole reaches the center of the viewport
              end: "bottom center",
              scrub: 3, // Smooth effect based on scroll position
            },
          }
        );
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center min-h-[200px] ">
      {/* Circular Hole Container */}
      <div  className="relative w-[280px] h-[104px] bg-gray-800 rounded-[200px] overflow-hidden flex items-center justify-center">
        {["Overwhelming", "Boring", "Scattered", "Endless", "Messy", "Guesswork"].map((text, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="absolute  flex items-center justify-center bg-white text-[23px]/[120%] p-[15px] text-black rounded-[40px] shadow-lg"
            style={{
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              top: `${index * 10}px`, // Initially positioned inside the hole
              left: `${index % 2 === 0 ? "15%" : "65%"}`, // Zigzag effect
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
