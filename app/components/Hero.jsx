"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { HeroMobileEffect } from "./HeroMobileEffect";

const ComputersCanvas = dynamic(
  () => import("./canvas").then((mod) => mod.ComputersCanvas),
  {
    ssr: false,
  }
);

const Hero = () => {
  // Fonction de temporisation
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  // Avant, j'avais mis un tableau simple, le useMemo permet de ne pas recréer le tableau à chaque fois que le hook change
  const phrases = ["Hicham", "a fullstack web developer"];

  const [element, setElement] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  // Le temps de sommeil entre chaque mot
  let sleepTime = 100;

  // Fonction asynchrone pour gérer l'écriture
  const writeLoop = useCallback(async () => {
    let curPhraseIndex = 0;

    while (isTyping) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        setElement(curWord.substring(0, i + 1));
        // Correspond au temps d'attente au début de l'écriture de chaque mot
        await sleep(sleepTime);
      }

      // Correspond au temps d'attente après l'écriture de chaque mot
      await sleep(sleepTime * 10);

      // Le reverse pour passer au mot suivant
      for (let i = curWord.length; i > 0; i--) {
        setElement(curWord.substring(0, i - 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      // Ici, la condition permet de passer au mot suivant et de recommencer si on arrive à la fin du tableau
      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  }, [isTyping]);

  useEffect(() => {
    writeLoop();
    return () => setIsTyping(false);
  }, []);

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 768); // Si la largeur est supérieure ou égale à 768px
    };

    checkSize(); // Vérification initiale
    window.addEventListener("resize", checkSize); // Mise à jour lors du redimensionnement

    return () => window.removeEventListener("resize", checkSize); // Cleanup
  }, []);

  return isDesktop ? (
    <section className="relative w-full h-screen mx:auto">
      {/* La div qui va contenir le bureau et tout le contenu qui va avec */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* La div qui contient le point rouge et le trait violet */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Le point rond en haut à gauche du canvas */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* Le trait en dessous du point violet */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Le texte de présentation à côté du trait violet */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white xs:text-md`}>
            Hi, I&#39;m
            <span className="text-[#915eff] ml-2">{element}</span>
            <span id="cursor">|</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 sm:text-2xl`}
          >
            I develop 3D visuals, user{" "}
            <br className="sm:block hidden md:block" /> interfaces and web
            applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* La petite animation arrondie qui mène à la section suivante */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link
          href="#about"
          aria-label="Un lien qui mène vers la section suivante"
          title="Un lien qui mène vers la section about"
        >
          <div className="flex justify-center items-start w-[35px] h-[64px] rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  ) : (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <HeroMobileEffect
        backgroundColor="transparent"
        rangeY={200}
        particleCount={100}
        // baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
      >
        <section className="relative w-full h-screen mx:auto">
          {/* La div qui va contenir le bureau et tout le contenu qui va avec */}
          <div
            className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
          >
            {/* La div qui contient le point rouge et le trait violet */}
            <div className="flex flex-col justify-center items-center mt-5">
              {/* Le point rond en haut à gauche du canvas */}
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              {/* Le trait en dessous du point violet */}
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            {/* Le texte de présentation à côté du trait violet */}
            <div>
              <h1 className={`${styles.heroHeadText} text-white xs:text-md`}>
                Hi, I&#39;m
                <span className="text-[#915eff] ml-2">{element}</span>
                <span id="cursor">|</span>
              </h1>
              <p
                className={`${styles.heroSubText} mt-2 text-white-100 sm:text-2xl`}
              >
                I develop 3D visuals, user{" "}
                <br className="sm:block hidden md:block" /> interfaces and web
                applications.
              </p>
            </div>
          </div>

          {/* La petite animation arrondie qui mène à la section suivante */}
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <Link
              href="#about"
              aria-label="Un lien qui mène vers la section suivante"
              title="Un lien qui mène vers la section about"
            >
              <div className="flex justify-center items-start w-[35px] h-[64px] rounded-3xl border-4 border-secondary p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </Link>
          </div>
        </section>
      </HeroMobileEffect>
    </div>
  );
};

export default Hero;
