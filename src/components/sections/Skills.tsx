import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { SKILL_GROUPS } from "@/lib/data";

const SkillCard = ({ name, icon, level }: { name: string; icon: string; level: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), obs.disconnect()),
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass-card group p-5">
      <div className="flex items-center gap-3">
        <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-2xl text-primary">
          <i className={icon} aria-hidden />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <span className="font-display font-semibold">{name}</span>
            <span className="text-xs text-muted-foreground">{level}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-[width] duration-1000 ease-out"
              style={{ width: visible ? `${level}%` : "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => (
  <section id="skills" className="section-pad relative bg-muted/20">
    <div className="container-px mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit forged for production"
        subtitle="Curated technologies I use day-in, day-out to ship reliable, performant software."
      />
      <Reveal>
        <Tabs defaultValue={SKILL_GROUPS[0].label} className="w-full">
          <TabsList className="mx-auto mb-8 flex h-auto w-fit max-w-full flex-wrap justify-center gap-1 rounded-full bg-card/60 p-1 backdrop-blur">
            {SKILL_GROUPS.map((g) => (
              <TabsTrigger
                key={g.label}
                value={g.label}
                className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow"
              >
                {g.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {SKILL_GROUPS.map((g) => (
            <TabsContent key={g.label} value={g.label} className="mt-0">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.skills.map((s) => (
                  <SkillCard key={s.name} {...s} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </div>
  </section>
);
