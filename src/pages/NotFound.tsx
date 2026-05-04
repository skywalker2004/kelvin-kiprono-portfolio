import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <>
    <Helmet>
      <title>404 — Page Not Found · Kelvin Kiprono</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="absolute -z-10 size-[28rem] rounded-full bg-primary/20 blur-3xl animate-blob" />

      <div className="container-px text-center">
        <div className="mx-auto mb-6 grid size-24 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-3xl font-bold text-primary-foreground shadow-glow animate-float-slow">
          404
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Lost in space</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you're looking for has drifted off into the void. Let's get you back home.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full bg-primary shadow-glow hover:bg-primary/90">
          <Link to="/">
            <Home className="mr-2 size-4" /> Go Home
          </Link>
        </Button>
      </div>
    </main>
  </>
);

export default NotFound;
