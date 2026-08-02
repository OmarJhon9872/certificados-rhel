import { motion } from "framer-motion";
import { Terminal, Server, Cloud, Shield, Network, HardDrive, GitBranch, Container, Database, Activity, Lock, Workflow } from "lucide-react";

const topics = [
  { icon: Terminal, title: "Fundamentos de Linux", desc: "Shell, jerarquía del sistema de archivos, permisos y administración de usuarios." },
  { icon: Server, title: "Administración de Servidores", desc: "Configuración de servicios, systemd, cron y gestión de procesos." },
  { icon: Network, title: "Redes y Conectividad", desc: "TCP/IP, DNS, firewall (iptables/ufw), SSH y túneles seguros." },
  { icon: HardDrive, title: "Almacenamiento y Particiones", desc: "LVM, RAID, sistemas de archivos y respaldo de datos críticos." },
  { icon: Shield, title: "Seguridad en Linux", desc: "Hardening, SELinux/AppArmor, gestión de vulnerabilidades y parches." },
  { icon: Cloud, title: "Cloud Computing", desc: "Fundamentos de AWS / Azure / GCP, IaaS, PaaS y modelos de despliegue." },
  { icon: Container, title: "Docker y Contenedores", desc: "Construcción de imágenes, redes y orquestación con Docker Compose." },
  { icon: Workflow, title: "Automatización con Bash", desc: "Scripting, cron jobs y automatización de tareas administrativas." },
  { icon: GitBranch, title: "Git y Control de Versiones", desc: "Workflows colaborativos, branching y gestión de configuración." },
  { icon: Activity, title: "Monitoreo y Logs", desc: "Prometheus, Grafana, journalctl y análisis de logs en producción." },
  { icon: Database, title: "Bases de Datos en Linux", desc: "Instalación y administración de PostgreSQL y MySQL en servidores." },
  { icon: Lock, title: "Backup y Recuperación", desc: "Estrategias 3-2-1, snapshots y planes de continuidad operativa." },
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
            Contenidos técnicos dominados durante la certificación <span className="font-semibold text-primary">SysAdmin Linux Cloud JR</span> impartida por Selling One.
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
