import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import labTerminal from "@/assets/lab-terminal.jpg";
import labContainers from "@/assets/lab-containers.jpg";
import labSecurity from "@/assets/lab-security.jpg";
import labNetwork from "@/assets/lab-network.jpg";

type Evidence = {
  title: string;
  description: string;
  image: string;
};

const evidences: Evidence[] = [
  { title: "Instalación de RHEL 9", description: "Despliegue de Red Hat Enterprise Linux 9 desde cero: particionamiento, registro de suscripción y configuración inicial de red.", image: labTerminal },
  { title: "Gestión con dnf y systemd", description: "Administración de paquetes, repositorios y servicios: unidades personalizadas, timers y control del arranque.", image: labTerminal },
  { title: "LVM en producción", description: "Creación de volume groups, extensión en caliente de volúmenes lógicos y snapshots antes de actualizaciones críticas.", image: labContainers },
  { title: "Firewalld y zonas", description: "Definición de zonas, servicios permitidos, rich rules y port forwarding para exponer solo lo necesario.", image: labSecurity },
  { title: "Podman rootless", description: "Construcción y ejecución de contenedores sin privilegios, volúmenes persistentes y servicios generados con systemd.", image: labContainers },
  { title: "Diagnóstico de incidentes", description: "Análisis de fallas con journalctl, systemctl status, dmesg y revisión del arranque para restaurar servicios caídos.", image: labTerminal },
  { title: "DNS y resolución", description: "Configuración de registros, pruebas con dig y nslookup, y troubleshooting de resolución en clientes RHEL.", image: labNetwork },
  { title: "Servidor web Apache/Nginx", description: "Virtual hosts, TLS, contextos SELinux correctos y publicación de sitios sobre RHEL.", image: labNetwork },
  { title: "Reverse proxy", description: "Proxy inverso hacia aplicaciones internas con cabeceras, caché y terminación TLS.", image: labNetwork },
  { title: "Cloudflare y protección", description: "DNS gestionado, proxy activado, certificados origen y reglas de caché frente al servidor RHEL.", image: labNetwork },
  { title: "Hardening de SSH", description: "Autenticación por llave, root login deshabilitado, cambio de puerto, límites de intentos y auditoría de accesos.", image: labSecurity },
  { title: "Proyecto final: sitio protegido", description: "Servidor RHEL endurecido sirviendo una aplicación tras reverse proxy y Cloudflare, con firewalld, LVM y contenedores Podman.", image: labSecurity },
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
            Laboratorios sobre Red Hat Enterprise Linux realizados por <span className="font-semibold text-primary">Nombre Persona Demo</span> durante el curso. Haz clic en cualquier tarjeta para ver detalles.
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
                alt={`Laboratorio: ${ev.title}`}
                width={1024}
                height={1024}
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
                  alt={`Laboratorio: ${selected.title}`}
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
