import { motion } from "framer-motion";

const tools = [
  "RHEL 9", "systemd", "dnf", "SELinux", "LVM", "XFS",
  "firewalld", "Podman", "Buildah", "SSH", "OpenSSL", "Bash",
  "Apache httpd", "Nginx", "BIND / DNS", "Cloudflare", "journalctl", "fail2ban",
];

const ToolsSlider = () => {
  return (
    <section className="py-16 bg-secondary/40 overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 mb-8">
        <motion.p
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Stack Técnico · Herramientas del Ecosistema Red Hat
        </motion.p>
      </div>
      <div className="relative">
        <div className="flex animate-slide-left w-max">
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={`${tool}-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-xl bg-card font-mono text-sm text-foreground border border-border/50 hover:border-primary/40 hover:text-primary hover:shadow-md transition-all cursor-default"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSlider;
