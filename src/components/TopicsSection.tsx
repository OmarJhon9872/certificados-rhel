import { motion } from "framer-motion";
import { Terminal, Server, HardDrive, Flame, Container, Stethoscope, Globe, Network, Cloud, Lock, ShieldCheck, FileSearch } from "lucide-react";

const topics = [
  { icon: Terminal, title: "Bases para sistemas RHEL", desc: "Instalación de Red Hat Enterprise Linux, jerarquía de archivos, permisos, usuarios y dnf." },
  { icon: Server, title: "Administración con systemd", desc: "Unidades, targets, servicios, timers y gestión del ciclo de vida del sistema." },
  { icon: HardDrive, title: "LVM y almacenamiento", desc: "Volume groups, logical volumes, extensión en caliente, snapshots y XFS." },
  { icon: Flame, title: "Firewall con firewalld", desc: "Zonas, servicios, rich rules, port forwarding y políticas de perímetro en RHEL." },
  { icon: Container, title: "Contenedores con Podman", desc: "Contenedores rootless, imágenes, volúmenes y servicios containerizados con systemd." },
  { icon: Stethoscope, title: "Diagnóstico de fallas", desc: "journalctl, systemctl, dmesg, análisis de arranque y resolución de incidentes." },
  { icon: Network, title: "DNS y resolución de nombres", desc: "Registros A, CNAME, MX y TXT, resolvers, dig/nslookup y troubleshooting DNS." },
  { icon: Globe, title: "Servidores web", desc: "Apache httpd y Nginx: virtual hosts, TLS, permisos SELinux y despliegue de sitios." },
  { icon: FileSearch, title: "Reverse proxy", desc: "Proxy inverso, balanceo básico, cabeceras, caché y publicación de aplicaciones internas." },
  { icon: Cloud, title: "Cloudflare", desc: "DNS gestionado, proxy naranja, certificados, reglas de caché y protección DDoS." },
  { icon: ShieldCheck, title: "Seguridad y SELinux", desc: "Contextos, booleanos, gestión de vulnerabilidades y actualizaciones de seguridad." },
  { icon: Lock, title: "Hardening de SSH", desc: "Llaves, desactivación de root login, puertos, fail2ban y buenas prácticas de acceso remoto." },
];

const TopicsSection = () => {
  return (
    <section id="temas" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-accent mb-4 inline-block">Syllabus</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Temas Cursados
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Contenidos técnicos dominados durante la certificación <span className="font-semibold text-primary">Red Hat Enterprise Linux JR</span> impartida por Selling One.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              className="card-surface p-8 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="text-mono text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <topic.icon className="w-6 h-6 text-primary mt-3 mb-4" />
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {topic.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
