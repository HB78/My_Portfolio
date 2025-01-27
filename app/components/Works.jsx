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
  console.log(image);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="lg:w-[360px] bg-tertiary p-5 rounded-2xl"
      >
        {/* //la div qui contient la photo du projet et l'image de github, on met relative sur l'image du projet pour la lier avec le logo github */}
        <div className="relative w-full">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-[155px] object-cover rounded-2xl"
            width={370} // Largeur maximale de l'image
            height={155} // Hauteur maximale de l'image
            quality={80}
          />

          {/* //div qui contient l'image github et la div sur laquelle on click pour aller sur github */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
                priority
                quality={70}
                width={40} // Largeur maximale de l'image
                height={40} // Hauteur maximale de l'image
              />
            </div>
          </div>
        </div>

        {/* //div qui contient le nom du projet et la description */}
        <div className="w-full h-full mt-5">
          <h3 className="text-white font-bold text-[18px] lg:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[12px] lg:text-[14px] line-clamp-2">
            {description}
          </p>
        </div>

        {/* //div qui contient les tags en dessous des cards */}
        <div className="mt-4 flex flex-wrap gap-2 sm:w-full">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
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
