import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Evidence = {
  title: string;
  description: string;
  image: string;
};

const evidences: Evidence[] = [
  { title: "Instalación de Linux", description: "Despliegue de Ubuntu Server desde cero, particionamiento manual y configuración inicial de red.", image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80" },
  { title: "Shell & Bash Scripting", description: "Automatización de tareas administrativas con scripts robustos en Bash, manejo de variables y bucles.", image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80" },
  { title: "Gestión de Usuarios", description: "Administración de usuarios, grupos, permisos POSIX y sudoers para entornos multiusuario.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" },
  { title: "SSH Seguro", description: "Configuración de acceso remoto con autenticación por llave, hardening de sshd_config y túneles.", image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80" },
  { title: "Firewall & iptables", description: "Reglas de filtrado, NAT y políticas de seguridad perimetral con iptables/ufw.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
  { title: "Servidor Web Nginx", description: "Despliegue de sitios estáticos y reverse proxy con Nginx, certificados SSL con Let's Encrypt.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { title: "Docker & Contenedores", description: "Construcción de imágenes personalizadas, redes y volúmenes con Docker y Docker Compose.", image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80" },
  { title: "AWS EC2", description: "Provisión de instancias EC2, grupos de seguridad y almacenamiento EBS en la nube de AWS.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
  { title: "Monitoreo con Grafana", description: "Dashboards de monitoreo de recursos con Prometheus y Grafana sobre servidores Linux.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { title: "LVM & Almacenamiento", description: "Configuración de volúmenes lógicos, extensión de particiones y snapshots con LVM.", image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80" },
  { title: "Backups Automatizados", description: "Estrategia 3-2-1 con rsync, cron y almacenamiento remoto cifrado.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" },
  { title: "Proyecto Final Cloud", description: "Despliegue end-to-end de aplicación con CI/CD, contenedores y monitoreo en la nube.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" },
];

const EvidenceSection = () => {
  const [selected, setSelected] = useState<Evidence | null>(null);

  return (
    <section id="evidencia" className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-accent mb-4 inline-block">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Evidencia de Prácticas
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Capturas y entregables reales de los laboratorios realizados por <span className="font-semibold text-primary">Nombre Persona Demo</span> durante el curso. Haz clic en cualquier tarjeta para ver detalles.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {evidences.map((ev, i) => (
            <motion.button
              key={ev.title}
              type="button"
              onClick={() => setSelected(ev)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              <img
                src={ev.image}
                alt={ev.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-2 md:p-3 text-left">
                <h3 className="text-white text-xs md:text-sm font-bold leading-tight drop-shadow-lg">
                  {ev.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <div className="overflow-hidden rounded-lg -mt-2">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed pt-2">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EvidenceSection;
