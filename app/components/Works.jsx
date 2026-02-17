"use client";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import github from "./../assets/github.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="group"
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.02}
        transitionSpeed={1500}
        className="relative w-[280px] sm:w-[360px] p-[1px] rounded-[32px]"
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#915eff] via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-[#0d1117] rounded-[31px] p-6 overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#915eff] opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />

          {/* Image */}
          <div className="relative w-full h-[210px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              width={370}
              height={210}
              quality={70}
              priority
            />

            {/* Overlay with GitHub button */}
            <div className="absolute inset-0 flex justify-end items-start p-4 bg-gradient-to-b from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-black/80 hover:bg-[#915eff] p-2.5 rounded-full backdrop-blur-md border border-white/20 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Image
                  src={github}
                  alt="source code"
                  className="w-5 h-5 object-contain"
                  priority
                  quality={70}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="relative mt-6">
            <h3 className="text-white font-bold text-[18px] lg:text-[24px] group-hover:text-[#915eff] transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[13px] lg:text-[15px] leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`px-3 py-1 text-[12px] font-medium rounded-full bg-white/5 border border-white/10 hover:bg-[#915eff]/20 hover:text-white transition-all cursor-default ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
