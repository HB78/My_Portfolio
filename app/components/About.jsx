"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="group relative"
  >
    {/* Glow Effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#915eff] to-[#d1b9ff] rounded-2xl opacity-20 group-hover:opacity-50 blur transition duration-500" />

    <div className="relative glass-card h-full p-8 rounded-2xl flex flex-col items-center gap-6 overflow-hidden">
      {/* Animated Background Shape */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#915eff]/10 rounded-full blur-2xl group-hover:bg-[#915eff]/20 transition-all duration-500" />

      <div className="w-16 h-16 rounded-2xl bg-[#915eff]/10 flex items-center justify-center border border-[#915eff]/20 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={icon}
          alt={title}
          className="w-8 h-8 object-contain"
          width={32}
          height={32}
          priority
          quality={70}
        />
      </div>

      <h3 className="text-white text-xl font-bold text-center group-hover:text-[#d1b9ff] transition-colors">
        {title}
      </h3>

      {/* Bottom Line Decor */}
      <div className="w-12 h-1 bg-[#915eff] rounded-full mt-auto opacity-40 group-hover:w-full transition-all duration-500" />
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mt-4 text-gray-400 text-[18px] leading-[32px] max-w-3xl"
        >
          I&#39;m a skilled software developer with experience in{" "}
          <span className="text-[#915eff] font-medium">TypeScript</span> and{" "}
          <span className="text-[#915eff] font-medium">JavaScript</span>, and
          expertise in frameworks like{" "}
          <span className="text-[#915eff] font-medium">React</span>,{" "}
          <span className="text-[#915eff] font-medium">Node.js</span>, and{" "}
          <span className="text-[#915eff] font-medium">Three.js</span>. I am a
          quick learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Lets work together to bring your ideas to life!
        </motion.p>

        <motion.div
          variants={fadeIn("left", "", 0.3, 1)}
          className="relative h-[250px] rounded-3xl overflow-hidden glass-card flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#915eff]/10 to-transparent" />
          <div className="z-10 text-center px-10">
            <p className="text-white text-2xl font-bold mb-4 italic">
              &ldquo;Simplicity is the ultimate sophistication.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-8 bg-[#915eff]" />
              <span className="text-[#915eff] text-sm font-bold tracking-widest uppercase">
                My Philosophy
              </span>
              <div className="h-[1px] w-8 bg-[#915eff]" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
