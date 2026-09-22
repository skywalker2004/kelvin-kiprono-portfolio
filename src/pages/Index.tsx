import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { SITE } from "@/lib/site";

const LazyTestimonials = lazy(() => import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials })));
const LazyTimeline = lazy(() => import("@/components/sections/Timeline").then((m) => ({ default: m.Timeline })));
const LazyContact = lazy(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));

const SectionFallback = () => (
  <div className="section-pad">
    <div className="container-px mx-auto max-w-6xl">
      <div className="h-56 animate-pulse rounded-3xl border border-border/70 bg-muted/40" />
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kelvin Kiprono — Full-Stack Developer & DevOps Enthusiast</title>
        <meta
          name="description"
          content="Kelvin Kiprono — Full-Stack Developer in Nairobi, Kenya specialising in React, Node.js & DevOps. Available remote and on-site worldwide."
        />
        <link rel="canonical" href="https://kelvin-kiprono-portfolio.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: SITE.name,
          jobTitle: "Full-Stack Developer",
          email: `mailto:${SITE.email}`,
          url: typeof window !== "undefined" ? window.location.origin : "",
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          sameAs: [SITE.github],
        })}</script>
      </Helmet>

      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Suspense fallback={<SectionFallback />}>
          <LazyTestimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <LazyTimeline />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <LazyContact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
