import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Globe, Server, Palette, HelpCircle } from "lucide-react";

const services = [
  {
    title: "Bots Discord",
    desc: "Développement de bots complexes et automatisés avec Python et JS.",
    icon: MessageSquare,
  },
  {
    title: "Sites Web",
    desc: "Création de sites vitrines ou applications complexes, avec ou sans hébergement.",
    icon: Globe,
  },
  {
    title: "Thèmes SellAuth",
    desc: "Conception de designs UI/UX ultra-stylés et personnalisés pour votre boutique SellAuth.",
    icon: Palette,
  },
  {
    title: "Serveurs Discord",
    desc: "Configuration complète, rôles, permissions et sécurisation de votre communauté.",
    icon: Server,
  },
  {
    title: "Sur Mesure",
    desc: "Toute demande spécifique liée à mon stack technique sera examinée avec soin.",
    icon: HelpCircle,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Mes Services</h2>
            <p className="text-zinc-500 max-w-md">
              Des solutions robustes et personnalisées pour vos besoins digitaux.
            </p>
          </div>
          <div className="h-px flex-1 bg-white/5 mx-8 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] transition-all hover:from-indigo-500/20"
            >
              <div className="h-full p-10 bg-zinc-950 rounded-[1.8rem] flex flex-col items-start gap-6">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <service.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
