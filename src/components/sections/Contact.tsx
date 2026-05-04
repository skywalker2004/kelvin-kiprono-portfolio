import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, MapPin, CheckCircle2, Send, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(3, "Subject is too short").max(120),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});
type FormData = z.infer<typeof schema>;

const InfoCard = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) => {
  const Inner = (
    <div className="glass-card flex items-center gap-4 p-5">
      <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate font-display font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {Inner}
    </a>
  ) : (
    Inner
  );
};

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (d: FormData) => {
    const body =
      `Hi Kelvin,\n\n${d.message}\n\n— ${d.name}\n${d.email}`;
    const url = `mailto:${SITE.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.location.href = url;
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 6000);
    } catch {
      window.open(`mailto:${SITE.email}`, "_blank");
    }
  };

  return (
    <section id="contact" className="section-pad relative bg-muted/20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project, role or idea in mind? I'd love to hear from you. I reply within 24 hours."
        />

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <Reveal><InfoCard icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} /></Reveal>
            <Reveal delay={0.05}><InfoCard icon={Github} label="GitHub" value="@skywalker2004" href={SITE.github} /></Reveal>
            <Reveal delay={0.1}><InfoCard icon={MapPin} label="Location" value={SITE.location} /></Reveal>
            <Reveal delay={0.15}>
              <div className="glass-card flex items-center gap-3 p-5">
                <span className="grid size-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-500">
                  <BadgeCheck className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Status</div>
                  <div className="font-display font-semibold text-emerald-500">Open to Work</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="md:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card relative p-6 md:p-8">
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-card/95 backdrop-blur"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 280, damping: 18 }}
                        className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500 text-white shadow-glow"
                      >
                        <CheckCircle2 className="size-8" />
                      </motion.div>
                      <h3 className="mt-4 font-display text-lg font-bold">Message ready to send!</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Your email client just opened. I'll reply within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Full name
                  </label>
                  <Input id="name" placeholder="Kelvin Kiprono" {...register("name")} aria-invalid={!!errors.name} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="kelvinkipron0659@gmail.com" {...register("email")} aria-invalid={!!errors.email} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Subject
                </label>
                <Input id="subject" placeholder="Project enquiry" {...register("subject")} aria-invalid={!!errors.subject} />
                {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me a little about your project, timeline, and goals…"
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
              </div>

              <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
                <a href={`mailto:${SITE.email}`} className="text-xs text-muted-foreground hover:text-primary">
                  Or email me directly →
                </a>
                <Button type="submit" disabled={isSubmitting} size="lg" className="group rounded-full bg-primary shadow-glow hover:bg-primary/90">
                  Send Message
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
