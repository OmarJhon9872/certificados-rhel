import { motion } from "framer-motion";
import { Award, BookOpen, Users, Zap, Monitor, HeartHandshake } from "lucide-react";
import companyLogo from "@/assets/sellingone-logo.png";

const benefits = [
  { icon: BookOpen, title: "Programa actualizado", desc: "Currícula alineada con las demandas reales del mercado SysAdmin y Cloud." },
  { icon: Users, title: "Instructores certificados", desc: "Profesionales activos en infraestructura y operaciones en la nube." },
  { icon: Zap, title: "Aprendizaje práctico", desc: "Más del 80% del programa basado en laboratorios y casos reales." },
  { icon: Monitor, title: "Entornos profesionales", desc: "Acceso a infraestructura cloud y herramientas enterprise." },
  { icon: Award, title: "Certificación avalada", desc: "Reconocida por empresas del sector TI y telecomunicaciones." },
  { icon: HeartHandshake, title: "Bolsa de trabajo", desc: "Vinculación directa con empresas aliadas y red de egresados." },
];

const CompanySection = () => {
  return (
    <section id="empresa" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white border border-border/60 shadow-md flex items-center justify-center p-3 flex-shrink-0">
                <img
                  src={companyLogo}
                  alt="Logo Selling One"
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <span className="badge-accent mb-4 inline-block">La Empresa Capacitadora</span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Selling One
                </h2>
                <p className="text-primary font-mono text-sm mt-2 uppercase tracking-wider">
                  Tech Training & Certifications
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed w-[90%] md:w-[90%] mx-auto md:mx-0 text-center md:text-left">
              <span className="font-semibold text-foreground">Selling One</span> es una empresa líder en
              capacitación tecnológica especializada en infraestructura, administración de sistemas Linux
              y servicios en la nube. Con un enfoque 100% práctico y alianzas con empresas del sector TI,
              forma a los nuevos profesionales que demanda la industria.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
              {["Capacitación TI", "Linux & Cloud", "Aliados Enterprise", "Bolsa de Trabajo"].map((tag) => (
                <span key={tag} className="badge-outline">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Beneficios del programa</h3>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{b.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
