"use client";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
// import BallCanvas from "./canvas/Ball";
import dynamic from "next/dynamic";
const BallCanvas = dynamic(() => import("./canvas/Ball"), { ssr: false });

// const BallCanvas = dynamic(
//   () => import("./canvas").then((mod) => mod.BallCanvas),
//   {
//     ssr: false,
//   }
// );

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={index}>
          <BallCanvas icon={technology.icon.src} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
