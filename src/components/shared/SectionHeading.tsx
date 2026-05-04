import { Reveal } from "./Reveal";

type Props = { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" };

export const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
    {eyebrow && (
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.05}>
      <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={0.1}>
        <p className="mt-4 text-base md:text-lg text-muted-foreground text-balance">{subtitle}</p>
      </Reveal>
    )}
  </div>
);
