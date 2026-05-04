import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { SITE } from "@/lib/site";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kelvin Kiprono — Full-Stack Developer & DevOps Enthusiast</title>
        <meta
          name="description"
          content="Kelvin Kiprono — Full-Stack Developer in Nairobi, Kenya specialising in React, Node.js & DevOps. Available remote and on-site worldwide."
        />
        <link rel="canonical" href="/" />
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
        <Testimonials />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Index;
