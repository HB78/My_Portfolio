"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { styles } from "../styles";
import { HeroMobileEffect } from "./HeroMobileEffect";
import TextType from "./TextType";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <HeroMobileEffect
        backgroundColor="transparent"
        rangeY={200}
        baseHue={120}
        particleCount={25}
        className="flex items-center flex-col justify-center w-full h-full"
      >
        <div
          className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full pb-10 gap-6 lg:gap-10`}
        >
          {/* Colonne gauche — Texte */}
          <div className="flex flex-col items-start justify-center lg:flex-1">
            <motion.p
              {...fadeIn(0)}
              className="w-full text-[#915eff] text-sm sm:text-base text-center font-medium tracking-widest uppercase mb-4 lg:text-left"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              {...fadeIn(0.2)}
              className={`${styles.heroHeadText} text-white`}
            >
              Hi, I&apos;m{" "}
              <span className="text-[#915eff]">
                <TextType
                  texts={["Hicham", "a fullstack web developer"]}
                  typingSpeed={80}
                  deletingSpeed={50}
                  pauseDuration={1500}
                />
              </span>
            </motion.h1>

            <motion.p
              {...fadeIn(0.4)}
              className={`${styles.heroSubText} mt-4 text-[#dfd9ff]`}
            >
              I develop{" "}
              <span className="blue-text-gradient font-semibold">
                3D visuals
              </span>
              , user{" "}
              <span className="pink-text-gradient font-semibold">
                interfaces
              </span>{" "}
              and{" "}
              <span className="green-text-gradient font-semibold">
                web applications
              </span>
              .
            </motion.p>

            <motion.div {...fadeIn(0.6)} className="flex flex-wrap gap-4 mt-8 mx-auto lg:mx-0">
              <Link
                href="#works"
                className="bg-[#915eff] hover:bg-[#7a4de0] text-white font-medium py-3 px-6 sm:px-9 rounded-xl transition-colors duration-300 whitespace-nowrap"
              >
                See my work
              </Link>
              <Link
                href="#contact"
                className="border-2 border-[#915eff] text-[#915eff] hover:bg-[#915eff]/10 font-medium py-3 px-6 sm:px-9 rounded-xl transition-colors duration-300 whitespace-nowrap"
              >
                Contact me
              </Link>
            </motion.div>
          </div>

          {/* Colonne droite — Photo/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center lg:flex-1"
          >
            <div className="relative">
              {/* Cercle décoratif en arrière-plan */}
              <div className="absolute -inset-4 rounded-full bg-[#915eff]/20 blur-3xl" />

              {/* Container de l'image */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-[#915eff] shadow-lg shadow-[#915eff]/20 overflow-hidden bg-tertiary">
                <Image
                  src="/images/portfolio.jpg"
                  alt="Hicham — Fullstack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </HeroMobileEffect>
    </section>
  );
};

export default Hero;
