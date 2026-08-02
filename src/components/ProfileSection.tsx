import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Languages, MapPin, Sparkles, Target } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="perfil" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-accent mb-4 inline-block">Sobre mí</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Nombre Persona Demo Analista
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Profesional formado en <span className="font-semibold text-primary">SysAdmin Linux Cloud JR</span> por Selling One,
            con vocación por la infraestructura, la automatización y la operación en la nube.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            className="card-surface p-8 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-6 h-6 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Perfil profesional</h3>
            <p className="text-muted-foreground leading-relaxed">
              Soy una persona apasionada por la tecnología, con sólidos fundamentos en administración de
              sistemas Linux y servicios cloud adquiridos durante mi formación en <span className="font-semibold text-foreground">Selling One</span>.
              Disfruto resolver problemas, automatizar tareas repetitivas y garantizar la disponibilidad
              y seguridad de la infraestructura. Busco una primera oportunidad como
              <span className="font-semibold text-primary"> SysAdmin Junior</span> donde pueda aportar valor,
              seguir aprendiendo y crecer profesionalmente dentro del área de operaciones e infraestructura TI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/50">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Objetivo</div>
                  <div className="text-sm text-muted-foreground">Integrarme a un equipo de operaciones cloud / DevOps junior.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Disponibilidad</div>
                  <div className="text-sm text-muted-foreground">Tiempo completo · Remoto o presencial.</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="card-surface p-6">
              <GraduationCap className="w-5 h-5 text-primary mb-3" />
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Formación</div>
              <div className="font-bold text-foreground mt-1">SysAdmin Linux Cloud JR</div>
              <div className="text-sm text-muted-foreground">Selling One · 2026</div>
            </div>
            <div className="card-surface p-6">
              <Languages className="w-5 h-5 text-primary mb-3" />
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Idiomas</div>
              <div className="font-bold text-foreground mt-1">Español nativo</div>
              <div className="text-sm text-muted-foreground">Inglés técnico intermedio</div>
            </div>
            <div className="card-surface p-6">
              <MapPin className="w-5 h-5 text-primary mb-3" />
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Ubicación</div>
              <div className="font-bold text-foreground mt-1">México</div>
              <div className="text-sm text-muted-foreground">Abierto a reubicación</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
