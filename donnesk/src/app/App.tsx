import React from "react";
import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Services } from "./components/Services";
import { ExternalLink, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-900/30 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Prêt à lancer <br />votre projet ?
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            Discutons-en directement sur Discord. Je réponds rapidement à toutes les demandes sérieuses.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href="https://discord.gg/ZsVnvv6Mm2"
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              Rejoindre mon Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} DONNESK. Tous droits réservés.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Privacy</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <Hero />
      <Expertise />
      <Services />
      <ContactSection />
      <Footer />
      
      {/* Global Grain Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] contrast-150 brightness-100 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
