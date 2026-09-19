import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, MapPin, CheckCircle2, Send, BadgeCheck, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/shared/icons";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(3, "Subject is too short").max(120),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});
type FormData = z.infer<typeof schema>;
type ContactChannel = "email" | "whatsapp";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const buildWhatsAppUrl = (name: string, message: string): string => {
  const text = `Hi Kelvin, my name is ${name || "there"}. ${message || "I'd like to discuss a project with you."}`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
};

const InfoCard = ({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string; }) => {
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

  if (!href) return Inner;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={`${label}: ${value}`}
      className="block"
    >
      {Inner}
    </a>
  );
};

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [channel, setChannel] = useState<ContactChannel>("email");
  const [whatsappName, setWhatsappName] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("idle");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Something went wrong");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send. Please try again.";
      setErrorMsg(message);
      setStatus("error");
    }
  };

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl(whatsappName, whatsappMessage);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-pad relative bg-muted/20">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's build something great" subtitle="Have a project, role or idea in mind? I'd love to hear from you. I reply within 24 hours." />
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <Reveal><InfoCard icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} /></Reveal>
            <Reveal delay={0.05}><InfoCard icon={Github} label="GitHub" value="@skywalker2004" href={SITE.github} /></Reveal>
            <Reveal delay={0.1}><InfoCard icon={MapPin} label="Location" value={SITE.location} /></Reveal>
            <Reveal delay={0.15}><InfoCard icon={WhatsAppIcon} label="WhatsApp" value="+254 732 049 230" href={`https://wa.me/${SITE.whatsapp}`} /></Reveal>
            <Reveal delay={0.2}>
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
            <div className="glass-card relative p-4 md:p-6">
              <div className="mb-6 flex w-full max-w-md items-center gap-1 rounded-full bg-card/60 p-1 backdrop-blur">
                {(["email", "whatsapp"] as const).map((option) => {
                  const isActive = channel === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-label={`Switch to ${option === "email" ? "Email" : "WhatsApp"} contact`}
                      onClick={() => setChannel(option)}
                      className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {option === "email" ? "Email" : "WhatsApp"}
                    </button>
                  );
                })}
              </div>

              {channel === "email" ? (
                <form onSubmit={handleSubmit(onSubmit)} className="relative">
                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-card/95 backdrop-blur">
                        <div className="text-center px-6">
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 280, damping: 18 }} className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500 text-white shadow-glow">
                            <CheckCircle2 className="size-8" />
                          </motion.div>
                          <h3 className="mt-4 font-display text-lg font-bold">Message sent! ?</h3>
                          <p className="mt-1 text-sm text-muted-foreground">Saved to database and emailed. I will reply within 24 hours.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-4 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                        <AlertCircle className="size-5 shrink-0 text-destructive mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-destructive">Could not send message</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{errorMsg}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">Full name</label>
                      <Input id="name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} aria-label="Your full name" />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
                      <Input id="email" type="email" placeholder="Your email" {...register("email")} aria-invalid={!!errors.email} aria-label="Your email address" />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted-foreground">Subject</label>
                    <Input id="subject" placeholder="Project enquiry" {...register("subject")} aria-invalid={!!errors.subject} aria-label="Email subject" />
                    {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
                  </div>
                  <div className="mt-4">
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
                    <Textarea id="message" rows={6} placeholder="Tell me a little about your project, timeline, and goals." {...register("message")} aria-invalid={!!errors.message} aria-label="Your email message" />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
                  </div>
                  <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
                    <a href={`mailto:${SITE.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email Kelvin directly" className="text-xs text-muted-foreground hover:text-primary">Or email me directly ?</a>
                    <Button type="submit" disabled={isSubmitting} size="lg" className="group rounded-full bg-primary shadow-glow hover:bg-primary/90" aria-label="Send your message by email">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="whatsapp-name" className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</label>
                    <Input
                      id="whatsapp-name"
                      value={whatsappName}
                      onChange={(event) => setWhatsappName(event.target.value)}
                      placeholder="Your name"
                      aria-label="Your name for WhatsApp message"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp-message" className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
                    <Textarea
                      id="whatsapp-message"
                      rows={6}
                      value={whatsappMessage}
                      onChange={(event) => setWhatsappMessage(event.target.value)}
                      placeholder="Tell me about your project or idea"
                      aria-label="Your message for WhatsApp chat"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      size="lg"
                      onClick={handleWhatsAppClick}
                      className="group rounded-full bg-emerald-500 text-white shadow-glow hover:bg-emerald-500/90"
                      aria-label="Open a WhatsApp chat with Kelvin"
                    >
                      <WhatsAppIcon className="mr-2 size-4" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
