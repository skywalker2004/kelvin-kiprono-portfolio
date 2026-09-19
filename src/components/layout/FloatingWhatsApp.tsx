import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/shared/icons";
import { SITE } from "@/lib/site";

export const FloatingWhatsApp = () => {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-label="Chat with Kelvin on WhatsApp"
      onClick={() => window.open(`https://wa.me/${SITE.whatsapp}`, "_blank", "noopener,noreferrer")}
      className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-glow transition-transform hover:scale-105"
      initial={reduce ? false : { scale: 1 }}
      animate={reduce ? { scale: 1 } : { scale: [1, 1.04, 1], boxShadow: ["0 0 0 rgba(16, 185, 129, 0.35)", "0 0 18px rgba(16, 185, 129, 0.45)", "0 0 0 rgba(16, 185, 129, 0.35)"] }}
      transition={reduce ? { duration: 0.2 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <WhatsAppIcon className="size-6" />
    </motion.button>
  );
};
