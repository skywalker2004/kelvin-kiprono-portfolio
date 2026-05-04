import { Download } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCounter } from "@/components/shared/StatCounter";
import { Button } from "@/components/ui/button";
import { SITE, } from "@/lib/site";
import { STATS } from "@/lib/data";

export const About = () => (
  <section id="about" className="section-pad relative">
    <div className="container-px mx-auto max-w-6xl">
      <SectionHeading eyebrow="About Me" title="Bridging elegant frontends with robust backends" />

      <div className="grid gap-12 md:grid-cols-[auto,1fr] md:gap-16 items-center">
        <Reveal>
          <div className="relative mx-auto size-56 sm:size-64 md:size-72">
            {/* Animated conic ring */}
            <div
              className="absolute -inset-2 rounded-full opacity-80 animate-ring-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(var(--primary)), transparent 30%, hsl(var(--primary-glow)) 55%, transparent 80%, hsl(var(--primary)))",
                filter: "blur(2px)",
              }}
            />
            <div className="absolute inset-0 rounded-full bg-background" />
            <img
              src={SITE.avatar}
              alt={`${SITE.name} portrait`}
              width={512}
              height={512}
              loading="lazy"
              className="absolute inset-1 rounded-full object-cover shadow-elevated"
            />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
              Open to Work
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              I'm a passionate full-stack developer with a strong eye for detail and a love for clean, maintainable code.
              I bridge the gap between elegant frontends and robust backends — from responsive React UIs to scalable
              Node.js APIs and DevOps pipelines.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              Based in Nairobi, I work globally and thrive on building digital products that actually matter.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <Button asChild size="lg" className="group rounded-full bg-primary shadow-glow hover:bg-primary/90">
                <a href={SITE.cv} download>
                  Download CV
                  <Download className="ml-2 size-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
