"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-center text-xl font-bold tracking-wider">
          Bienvenue sur mon portfolio
        </h1>
      </motion.div>

      <div className="relative flex justify-center items-center">
        {/* Outer Ring */}
        <motion.div
          className="w-24 h-24 border-4 border-t-[#915eff] border-r-transparent border-b-[#915eff] border-l-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Inner Ring */}
        <motion.div
          className="absolute w-16 h-16 border-4 border-t-transparent border-r-white border-b-transparent border-l-white rounded-full opacity-50"
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-secondary text-sm tracking-widest mt-4"
      >
        CHARGEMENT...
      </motion.p>
    </div>
  );
};

export default Loading;
