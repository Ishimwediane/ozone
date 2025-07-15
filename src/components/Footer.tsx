"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const images = [
  "/fash.jpg",
  "/fash1.jpg",
  "/photo.jpg",
  "/photo5.jpg",
  "/photo1.jpg",
  "/ocean.jpg",
];

export default function Footer() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || slider.children.length === 0) return;

    const imageWidth = slider.children[0].clientWidth + 16; // 16 = gap-x (gap-4)
    const totalWidth = images.length * imageWidth;

    let scrollAmount = 0;
    let start: number | null = null;
    let animationFrame: number;

    function animate(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;

      scrollAmount = (elapsed * 0.05) % totalWidth;
      if (slider) {
        slider.scrollLeft = scrollAmount;
      }

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <footer className={`${theme === 'dark' ? 'bg-black' : 'bg-gray-900'} pt-8 sm:pt-12 pb-0 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6 text-center font-serif">
            Follow us on Instagram
          </h2>

          <div className="relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-3 sm:gap-4 py-4 px-4 sm:px-8 hide-scrollbar"
              style={{ scrollSnapType: "none" }}
            >
              {images.concat(images).map((src, idx) => (
                <a
                  key={idx}
                  href="https://www.instagram.com/naf_model_empire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[140px] sm:min-w-[180px] h-[140px] sm:h-[180px] rounded-lg sm:rounded-xl overflow-hidden border-2 border-yellow-400 flex-shrink-0 shadow-lg"
                >
                  <Image
                    src={src}
                    alt={src.split("/").pop()?.split(".")[0] || "Instagram image"}
                    width={180}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`text-center py-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-300'}`}>
          © {new Date().getFullYear()} Ozone entertainment. All rights reserved.
        </div>
      </footer>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
