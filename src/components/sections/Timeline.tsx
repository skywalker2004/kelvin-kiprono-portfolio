import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TIMELINE, type TimelineItem } from "@/lib/data";

const iconFor = (k: TimelineItem["kind"]) =>
  k === "work" ? Briefcase : k === "edu" ? GraduationCap : Award;

export const Timeline = () => (
  <section id="experience" className="section-pad relative">
    <div className="container-px mx-auto max-w-5xl">
      <SectionHeading
        eyebrow="Experience & Education"
        title="The path so far"
        subtitle="A timeline of roles, study and certifications that shape how I build."
      />

      <div className="relative">
        {/* center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-border to-transparent" />

        <ul className="space-y-10">
          {TIMELINE.map((item, i) => {
            const Icon = iconFor(item.kind);
            const left = i % 2 === 0;
            return (
              <li key={item.title} className="relative">
                <div className={`md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}>
                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left md:[direction:ltr]"}`}>
                    <Reveal>
                      <article className="glass-card p-6">
                        <div className={`flex items-center gap-2 ${left ? "md:justify-end" : ""}`}>
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.year}</span>
                        </div>
                        <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.org}</p>
                        <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{item.description}</p>
                      </article>
                    </Reveal>
                  </div>
                  <div className="hidden md:block" />
                </div>

                {/* dot */}
                <span className="absolute left-4 md:left-1/2 top-6 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-background ring-2 ring-primary/40">
                  <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-3" />
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);
