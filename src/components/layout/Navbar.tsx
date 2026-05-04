import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "./ThemeToggle";
import { SITE } from "@/lib/site";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const active = useActiveSection(["hero", ...NAV.map((n) => n.id)]);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-px mx-auto mt-3 max-w-7xl">
        <nav className="glass flex items-center justify-between rounded-full px-4 py-2.5 shadow-card-soft">
          <a href="#hero" className="flex items-center gap-2 pl-1 font-display font-bold">
            <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-sm text-primary-foreground shadow-glow">
              {SITE.initials}
            </span>
            <span className="hidden sm:inline text-sm">Kelvin</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {NAV.map((n) => {
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/50"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 glass rounded-2xl p-2"
            >
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-2.5 text-sm ${
                    active === n.id ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {n.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
