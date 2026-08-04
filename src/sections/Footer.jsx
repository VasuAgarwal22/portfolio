import { FaXTwitter,FaLinkedin,FaGithub,FaHeart } from "react-icons/fa6";
import {motion} from "framer-motion";
const socials = [
  {Icon : FaXTwitter,label:"X",href:"https://x.com/VasuAgarwal991"},
  {Icon : FaLinkedin,label:"LinkedIn",href:"https://www.linkedin.com/in/vasu-agarwal-27a18a339/"},
  {Icon:FaGithub,label:"GitHub",href:"https://github.com/VasuAgarwal22"}
]

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, dampling: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};


export default function footer(){
  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgb(13_88_202_/_0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgb(16_185_129_/_0.25),transparent_70%)]" />
      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        <h1
          className="font-semibold leading-none text-white text-center select-none"
          style={{
            fontSize: "clamp(3rem,5vw,14rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            padding: "0 3vw",
            whiteSpace: "nowrap",
            textShadow: "0 2px 18px rgba(0,0,0,0.45)",
          }}
        >
          Vasu Agarwal
        </h1>
        <div className="h-[3px] w-24 md:w-42 mx-auto rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />
        <div className="flex justify-center gap-6 text-3xl mt-6">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 hover:text-white"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-400 text-sm md:text-base flex items-center justify-center gap-2">
          <span>Created</span>
          <span>by Vasu Agarwal</span>
        </div>
      </motion.div>
    </footer>
  );
}
