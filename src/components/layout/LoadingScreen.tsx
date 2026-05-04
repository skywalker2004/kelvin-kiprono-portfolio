import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";

export const LoadingScreen = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="relative grid size-24 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow font-display text-3xl font-bold text-primary-foreground shadow-glow"
          >
            {SITE.initials}
            <span className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
