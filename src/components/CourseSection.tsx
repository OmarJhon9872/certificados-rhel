import { motion } from "framer-motion";
import { Boxes, Clock, Flame, ShieldCheck, Server, Globe } from "lucide-react";
import labTerminal from "@/assets/lab-terminal.jpg";

const highlights = [
  {
    icon: Server,
    title: "Bases sólidas de RHEL",
    desc: "Instalación, systemd, dnf, SELinux y administración diaria de Red Hat Enterprise Linux 9.",
  },
  {
    icon: Boxes,
    title: "LVM y Podman",
    desc: "Volúmenes lógicos, snapshots y contenedores rootless con Podman en entornos enterprise.",
  },
  {
    icon: Globe,
    title: "Web, DNS y reverse proxy",
    desc: "Apache/Nginx, resolución DNS, reverse proxy y publicación segura detrás de Cloudflare.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y hardening",
    desc: "firewalld, hardening de SSH, políticas de acceso y diagnóstico de incidentes.",
  },
];

const CourseSection = () => {
  return (
    <section id="curso" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="badge-accent mb-4 inline-block">El curso</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Red Hat Enterprise Linux JR
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            El programa donde <span className="font-semibold text-foreground">Nombre Persona Demo Analista</span> aprendió
            a operar el sistema operativo que sostiene bancos, telecos y nubes públicas: RHEL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            className="relative overflow-hidden rounded-3xl min-h-[320px] bg-foreground"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={labTerminal}
              alt="Terminal de Red Hat Enterprise Linux durante un laboratorio del curso"
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-foreground/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8">
              <Flame className="w-8 h-8 text-white mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                No es un curso de teoría: es una guardia de producción simulada
              </h3>
              <p className="text-white/80 mt-3 leading-relaxed">
                Cada módulo arranca con un servidor RHEL roto, un log confuso o un servicio caído.
                La única forma de aprobar es diagnosticar, corregir y documentar — igual que en un
                turno real de operaciones.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["RHEL 9", "LVM", "firewalld", "Podman", "DNS", "Cloudflare", "SSH hardening"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="card-surface p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-bold text-foreground">{h.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
            <motion.div
              className="card-surface p-6 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Enfoque 80/20 invertido:</span> 80% laboratorio
                sobre máquinas RHEL reales y 20% teoría. El resultado es un perfil junior que ya sabe
                dónde mirar cuando algo falla a las 3 de la mañana.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
