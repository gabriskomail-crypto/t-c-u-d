import React from "react";
import { motion } from "motion/react";
import { Terminal, Database, Layout, Smartphone } from "lucide-react";

const skills = [
  { name: "Python", level: "Expert", icon: Terminal, color: "text-yellow-400" },
  { name: "Java", level: "Expert", icon: Database, color: "text-orange-500" },
  { name: "JavaScript", level: "Avancé", icon: Layout, color: "text-blue-400" },
  { name: "Web (HTML/CSS)", level: "Avancé", icon: Smartphone, color: "text-cyan-400" },
];

export const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Expertise Technique</h2>
          <div className="h-1 w-20 bg-indigo-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-indigo-500/50 transition-colors group"
            >
              <skill.icon className={`w-10 h-10 ${skill.color} mb-6 transition-transform group-hover:scale-110`} />
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-zinc-500 text-sm">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
