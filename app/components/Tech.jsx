"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { techCategories } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ComputersCanvas = dynamic(() => import("./canvas/Computers"), {
  ssr: false,
});

const BubbleParticle = ({ angle, distance, delay }) => (
  <motion.div
    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
    animate={{
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      scale: 0,
      opacity: 0,
    }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="absolute w-2 h-2 rounded-full bg-[#915eff]"
  />
);

const TechBubble = ({ name, icon, style }) => {
  const [isPopped, setIsPopped] = useState(false);

  const handlePop = useCallback(() => {
    if (isPopped) return;
    setIsPopped(true);
    setTimeout(() => setIsPopped(false), 1500);
  }, [isPopped]);

  return (
    <div
      style={style}
      className="absolute flex flex-col items-center gap-1 animate-counter-spin-slow"
    >
      <AnimatePresence mode="wait">
        {!isPopped ? (
          <motion.div
            key="bubble"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 1.8,
              opacity: 0,
              filter: "blur(8px)",
              transition: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            onClick={handlePop}
            className="relative cursor-pointer group"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#915eff]/50 to-[#d1b9ff]/30 opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />
              <div className="absolute inset-0 rounded-full border border-[#915eff]/30 group-hover:border-[#915eff]/60 transition duration-300" />
              <div className="relative w-full h-full rounded-full backdrop-blur-xl bg-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                {icon ? (
                  <Image
                    src={icon}
                    alt={name}
                    width={36}
                    height={36}
                    className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-[#915eff] text-lg font-bold relative z-10">
                    {name.charAt(0)}
                  </span>
                )}
              </div>
            </div>
            <p className="text-white/70 group-hover:text-white text-[9px] sm:text-[10px] font-medium text-center transition duration-300 whitespace-nowrap">
              {name}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="particles"
            className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <BubbleParticle
                key={i}
                angle={(i / 10) * Math.PI * 2}
                distance={50 + Math.random() * 30}
                delay={Math.random() * 0.1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OrbitRing = ({ category, catIndex }) => {
  const count = category.technologies.length;
  const radius = count <= 6 ? 130 : 160;

  return (
    <motion.div
      variants={fadeIn("up", "spring", catIndex * 0.15, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <h3 className="text-white text-[20px] sm:text-[22px] font-bold mb-4 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-[#915eff]" />
        {category.title}
      </h3>

      <div
        className="relative group/orbit"
        style={{
          width: (radius + 50) * 2,
          height: (radius + 50) * 2,
        }}
      >
        {/* Orbit path */}
        <div
          className="absolute rounded-full border border-[#915eff]/10 group-hover/orbit:border-[#915eff]/40 transition-colors duration-500"
          style={{
            width: radius * 2,
            height: radius * 2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Spinning container */}
        <div className="absolute inset-0 animate-spin-slow">
          {category.technologies.map((tech, index) => {
            const angle = (index / count) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <TechBubble
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                style={{
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(50% + ${y}px - 45px)`,
                }}
              />
            );
          })}
        </div>

        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#915eff]/10 group-hover/orbit:bg-[#915eff]/20 border border-[#915eff]/30 group-hover/orbit:border-[#915eff]/60 flex items-center justify-center transition-colors duration-700 cursor-pointer">
          <span className="text-[#915eff] group-hover/orbit:text-[#c4a0ff] text-[10px] font-bold text-center leading-tight transition-colors duration-500">
            {category.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      {/* 3D Computer - hidden on mobile */}
      <div
        className="hidden lg:block h-[600px]"
        style={{ marginTop: "-150px", marginBottom: "150px" }}
      >
        <ComputersCanvas />
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {techCategories.map((category, catIndex) => (
          <OrbitRing
            key={category.title}
            category={category}
            catIndex={catIndex}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
