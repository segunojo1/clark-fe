"use client";

import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default function AnimatedContent() {
  const contentBlocks = [
    {
      text: "We’ve always been known as the \"PDFers\" - The ones who barely show up to class, skim through lecture slides, and still pass with flying colors.",
      image1: { src: "/assets/file.svg", position: "top-[-18px] left-[53%] w-30 h-30" },
      highlight: "colors.",
      initialColor: "#F24E06",
    },
    {
      text: "Not because we hate learning, but because we’ve figured out how to learn smarter.",
      image1: { src: "/assets/spark.svg", position: "top-[35px] left-[18%] w-30 h-30" },
    },
    {
      text: "Then we got to college. And suddenly, it was clear—traditional classes just don’t cut it. Real understanding comes from deep reading, late-night cramming, and group study sessions that actually make sense.",
      image1: { src: "/assets/mdi_sleep.svg", position: "top-[75px] left-[7%] animate-pulse w-30 h-30" },
    },
    {
      text: "That’s why we built",
      image1: { src: "/assets/clark_icon.svg", position: "top-[-35px] w-[90px] h-[79px] right-[-76px]" },
    },
    {
      text: "A study sidekick that helps you learn faster and smarter. Upload PDFs, chat with AI, collaborate on an infinite whiteboard, and track your progress--al in one place.",
      image1: { src: "/assets/upload-01.svg", position: "top-[0px] right-0 w-[24px] h-[24px]" },
      image2: { src: "/assets/pointers.svg", position: "top-[37px] right-[30%] w-[123px] h-[52px]" },
    },
    {
      text: "Because learning isnt about sitting in a class. Its about understanding, mastering and owning knowledge. And clark makes it effortless",
      image1: { src: "/assets/clark_icon2.svg", position: "bottom-[0] right-[38%] w-[64px] h-[56px]" },
    },
    {
      text: "Built by students, for students.",
      image1: { src: "/assets/clark_icon3.svg", position: "bottom-[0px] right-[10px]" },
      extratext: " — Sheriff, Seyi & Segun from Clark 💙"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      let newActiveIndex = activeIndex;

      refs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const distanceFromBottom = windowHeight - rect.top;

          if (distanceFromBottom >= windowHeight / 2) {
            newActiveIndex = index;
          } else if (distanceFromBottom < windowHeight / 2 && activeIndex === index) {
            newActiveIndex = index - 1;
          }
        }
      });

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-start gap-12 font-anec max-w-[827px] mt-[45px] relative">
      {contentBlocks.map((block, index) => {
        const highlightWords = block.highlight || "";
        const restOfText = block.text.replace(highlightWords, "");
        const extraText = block.extratext;

        return (
          <motion.div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className="relative text-[27.5px] font-medium transition-all"
          >
            <motion.span
              initial={{ color: block.initialColor || "#00000074" }}
              animate={index <= activeIndex ? { color: "#000000" } : { color: block.initialColor || "#00000074" }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <div>
              <span style={{ color: index <= activeIndex ? "#000000" : "#00000074" }}>
                {restOfText}
              </span>
              <br />
                <p>{extraText}</p>
              </div>
              {highlightWords && <span style={{ color: "#F24E06" }}>{highlightWords}</span>}
            </motion.span>

            {[block.image1, block.image2].map((image, i) =>
              image ? (
                <motion.img
                  key={i}
                  src={image.src}
                  alt="Animated Image"
                  className={`absolute z-[99999]  ${image.position} object-cover`}
                  initial={{ opacity: 0.4, scale: 0.8 }}
                  animate={index <= activeIndex ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
              ) : null
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
