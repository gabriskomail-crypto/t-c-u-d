import React from "react";
import { motion } from "motion/react";
import { Github, MessageSquare, Code2, Globe, Cpu } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      <div className="text-xl font-bold tracking-tighter text-white">
        DONNESK<span className="text-indigo-500">.</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {["Expertise", "Services", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
        <a 
          href="https://discord.gg/ZsVnvv6Mm2" 
          target="_blank" 
          className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-full font-semibold hover:bg-indigo-500 transition-all active:scale-95"
        >
          Discord
        </a>
      </div>
    </motion.nav>
  );
};
