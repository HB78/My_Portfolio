"use client";

import { useEffect, useState } from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import BubbleStackMobile from "./../components/BubbleStackMobile";
// import BallCanvas from "./canvas/Ball";
import dynamic from "next/dynamic";
const BallCanvas = dynamic(() => import("./canvas/Ball"), { ssr: false });

const Tech = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 768); // Si la largeur est supérieure ou égale à 768px
    };

    checkSize(); // Vérification initiale
    window.addEventListener("resize", checkSize); // Mise à jour lors du redimensionnement

    return () => window.removeEventListener("resize", checkSize); // Cleanup
  }, []);

  return (
    <>
      {isDesktop ? (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => (
            <div className="w-28 h-28" key={index}>
              <BallCanvas icon={technology.icon.src} />
            </div>
          ))}
        </div>
      ) : (
        <BubbleStackMobile />
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
