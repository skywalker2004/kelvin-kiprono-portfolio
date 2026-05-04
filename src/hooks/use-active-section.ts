import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => visible.set(id, e.intersectionRatio));
          let best = ids[0];
          let bestRatio = 0;
          visible.forEach((r, k) => {
            if (r > bestRatio) {
              bestRatio = r;
              best = k;
            }
          });
          if (bestRatio > 0) setActive(best);
        },
        { threshold: [0.2, 0.5, 0.8], rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}
