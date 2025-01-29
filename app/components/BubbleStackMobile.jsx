import Image from "next/image";
import { technologies } from "../constants";

const BubbleStackMobile = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-8 cursor-pointer">
      {technologies.map((technology, index) => (
        <div
          key={technology.name}
          className={`relative animate-float`}
          style={{
            animationDelay: `${index * 0.25}s`, // Applique un délai dynamique pour chaque bulle
          }}
        >
          {/* Bulle avec image */}
          <div className="w-[120px] h-[120px] rounded-full bg-white/80 animate-float flex items-center justify-center overflow-hidden backdrop-blur-sm hover:bg-[#edb1f1] transition-all duration-300 relative">
            {/* Ombre interne pour un effet plus profond */}
            <div className="absolute inset-[15px] rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/30"></div>

            {/* Ombre externe */}
            <div className="absolute -inset-4 rounded-full bg-white/5 blur-xl z-[-1]"></div>

            {/* Image */}
            <Image
              src={technology.icon}
              alt={technology.name}
              className="w-[60%] h-[60%] object-contain rounded-full"
              width={110}
              height={110}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BubbleStackMobile;
