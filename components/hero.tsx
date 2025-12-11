import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-secondary to-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance animate-fade-in-down">
            Metallbau & Edelstahl nach Maß
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-fade-in-up [animation-delay:0.2s]">
            Geländer, Balkone, Tore, Zäune, Glasvordächer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
              <a href="#contact">Jetzt anfragen</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 px-8 py-3 text-lg bg-transparent"
            >
              <a href="#projects">Projekte ansehen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
