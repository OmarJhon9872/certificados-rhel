import { motion } from "framer-motion";
import { GraduationCap, Award, Quote } from "lucide-react";

const InstructorSection = () => {
  return (
    <section id="instructor" className="section-padding bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="badge-accent mb-4 inline-block">Instructor</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Formado por expertos
          </h2>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-elegant"
          style={{ boxShadow: "var(--shadow-elegant)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/30 to-white/5 backdrop-blur border-4 border-white/20 flex items-center justify-center text-5xl font-black">
                JO
              </div>
              <div className="mt-5">
                <div className="text-xs font-mono uppercase tracking-widest text-white/60">Instructor titular</div>
                <h3 className="text-2xl font-bold mt-1">Ing. TIC's Jonathan Omar</h3>
                <div className="text-white/70 text-sm mt-1">Especialista en RHEL & Seguridad</div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  <Award className="w-3 h-3" /> Certificado
                </span>
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  <GraduationCap className="w-3 h-3" /> Selling One
                </span>
              </div>
            </div>

            <div className="md:col-span-2">
              <Quote className="w-10 h-10 text-white/30 mb-4" />
              <p className="text-lg md:text-xl leading-relaxed text-white/90 italic">
                "El curso Red Hat Enterprise Linux JR está diseñado para que un perfil junior pueda
                sostener servidores RHEL en producción desde el primer día: LVM, firewalld, Podman,
                DNS, reverse proxy y hardening de SSH aplicados sobre fallas reales.
                <span className="not-italic font-semibold text-white"> Nombre Persona Demo</span> ha
                demostrado dedicación, criterio técnico y verdadera pasión por la administración de
                sistemas a lo largo de toda la certificación."
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black font-mono">10+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Años exp.</div>
                </div>
                <div>
                  <div className="text-2xl font-black font-mono">500+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Alumnos</div>
                </div>
                <div>
                  <div className="text-2xl font-black font-mono">TIC's</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Ingeniería</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
