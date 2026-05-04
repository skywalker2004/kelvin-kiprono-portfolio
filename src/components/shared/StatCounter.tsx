import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

type Props = { value: number; suffix?: string; label: string };

export const StatCounter = ({ value, suffix = "", label }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const n = useCountUp(value, 1800, start);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass-card p-5 text-center">
      <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
};
