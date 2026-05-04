import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { TypedRotator } from "@/components/shared/TypedRotator";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const reduce = useReducedMotion();
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 size-[28rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 size-[26rem] rounded-full bg-purple-500/20 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 size-[22rem] rounded-full bg-cyan-400/15 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      <div className="container-px mx-auto max-w-6xl text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
        >
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to Work · {`${"Nairobi, Kenya"}`}
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          Building <span className="gradient-text">Scalable</span>,<br className="hidden sm:block" />
          User-Centric Digital Solutions
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground text-balance"
        >
          Full-Stack Developer specialising in React, Node.js & DevOps — crafting clean, performant apps that solve real-world problems.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex items-center justify-center text-base sm:text-lg font-medium"
        >
          <span className="text-muted-foreground mr-2">I'm a</span>
          <TypedRotator words={["React Developer", "Node.js Engineer", "DevOps Enthusiast", "Problem Solver"]} />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="group rounded-full bg-primary px-6 shadow-glow hover:bg-primary/90">
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group rounded-full border-border bg-card/50 px-6 backdrop-blur hover:border-primary/50 hover:text-primary">
            <a href="#contact">
              Contact Me
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </motion.div>

        <div className="mt-14 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <MapPin className="size-3.5" /> Nairobi, Kenya · Available worldwide
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 grid size-10 place-items-center rounded-full border border-border bg-card/50 backdrop-blur"
      >
        <ArrowDown className="size-4 animate-bounce-arrow text-primary" />
      </a>
    </section>
  );
};
