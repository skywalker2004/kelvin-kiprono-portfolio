import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PROJECTS, type Project } from "@/lib/data";

const Card = ({ p, i }: { p: Project; i: number }) => (
  <Reveal delay={(i % 3) * 0.08}>
    <article className="glass-card group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.title} cover`}
          width={1280}
          height={800}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
          {p.tagline}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold">{p.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span key={t} className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] text-foreground/80">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-2 pt-4">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-card-soft hover:bg-primary/90 transition-colors"
          >
            Live Demo <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
          >
            <Github className="size-3.5" /> GitHub
          </a>
        </div>
      </div>
    </article>
  </Reveal>
);

export const Projects = () => (
  <section id="projects" className="section-pad relative">
    <div className="container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects I'm proud of"
        subtitle="A mix of client work and personal builds — each shipped to production with real users in mind."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Card key={p.title} p={p} i={i} />
        ))}
      </div>
    </div>
  </section>
);
