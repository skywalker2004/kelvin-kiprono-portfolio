import { Github, Mail, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-background/50">
    <div className="container-px mx-auto max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Crafted with care in Nairobi.
      </p>
      <div className="flex items-center gap-3">
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="grid size-10 place-items-center rounded-full border border-border bg-card/50 hover:border-primary/50 hover:text-primary transition-colors"
        >
          <Github className="size-4" />
        </a>
        <a
          href={SITE.linkedin}
          aria-label="LinkedIn"
          className="grid size-10 place-items-center rounded-full border border-border bg-card/50 hover:border-primary/50 hover:text-primary transition-colors"
        >
          <Linkedin className="size-4" />
        </a>
        <a
          href={`mailto:${SITE.email}`}
          aria-label="Email"
          className="grid size-10 place-items-center rounded-full border border-border bg-card/50 hover:border-primary/50 hover:text-primary transition-colors"
        >
          <Mail className="size-4" />
        </a>
      </div>
    </div>
  </footer>
);
