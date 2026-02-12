import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            Développeur Fullstack
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            DONNESK
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed mb-10">
            3 ans d'expertise dans la création d'écosystèmes numériques performants. 
            Maîtrise de <span className="text-indigo-400">Python</span>, <span className="text-indigo-400">Java</span> et du <span className="text-indigo-400">Web</span>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://discord.gg/ZsVnvv6Mm2" 
            target="_blank"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Me contacter sur Discord
          </a>
          <a 
            href="#expertise"
            className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl border border-white/5 hover:bg-zinc-800 transition-all active:scale-95"
          >
            Découvrir mes projets
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-indigo-500 rounded-full" />
      </motion.div>
    </section>
  );
};
