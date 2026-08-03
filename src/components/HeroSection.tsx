import { motion } from "framer-motion";
import { MapPin, Mail, Download } from "lucide-react";
import heroBanner from "@/assets/hero-rhel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-foreground/70 to-foreground/90" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Disponible para entrevistas
          </span>
        </motion.div>

        <motion.p
          className="text-primary-foreground/70 mt-8 font-mono text-sm uppercase tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Portafolio profesional · CV digital
        </motion.p>

        <motion.h1
          className="text-display text-white mt-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Nombre Persona <br className="hidden md:block" />
          <span className="text-white/80">Demo Analista</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mt-6 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="font-semibold">Red Hat Enterprise Linux JR</span> · Certificado por{" "}
          <span className="text-white font-semibold">Selling One</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-8 font-mono text-sm text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> México</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>RHEL 9 · Podman · LVM</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>100% Completado</span>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover-scale shadow-lg"
          >
            <Mail className="w-4 h-4" /> Contactar
          </a>
          <a
            href="#evidencia"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
          >
            <Download className="w-4 h-4" /> Ver evidencia
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
