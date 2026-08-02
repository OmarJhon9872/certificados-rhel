import { useState, useEffect } from "react";
import { Menu, Terminal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Perfil", href: "#perfil" },
  { label: "Temas", href: "#temas" },
  { label: "Evidencia", href: "#evidencia" },
  { label: "Instructor", href: "#instructor" },
  { label: "Empresa", href: "#empresa" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
            scrolled ? "bg-primary text-primary-foreground" : "bg-white/10 backdrop-blur text-white border border-white/20"
          }`}>
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-sm transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              Nombre Persona Demo
            </span>
            <span className={`text-[10px] font-mono uppercase tracking-wider transition-colors ${
              scrolled ? "text-muted-foreground" : "text-white/60"
            }`}>
              SysAdmin · Linux · Cloud
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="badge-accent hover-scale font-semibold text-sm hidden md:inline-flex"
          >
            Certificado ✓
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menú de navegación"
                className="lg:hidden flex items-center p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Menu className={`w-5 h-5 transition-colors ${scrolled ? "text-primary" : "text-white"}`} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex items-center gap-3 mb-8 mt-2">
                <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Nombre Persona Demo</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">SysAdmin Linux Cloud JR</div>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2.5 border-b border-border/50"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  className="badge-accent hover-scale font-semibold text-sm mt-4 justify-center"
                >
                  Certificado ✓
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
