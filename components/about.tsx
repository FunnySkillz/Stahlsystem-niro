"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-[-60px]"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Über uns</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Stahl-Niro System e.U. ist Ihr zuverlässiger Partner für hochwertige Metallbau- und
              Edelstahlkonstruktionen. Mit jahrelanger Erfahrung und Leidenschaft für Qualität fertigen und montieren
              wir individuelle Lösungen, die anspruchsvolle Standards erfüllen.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Unser Fokus liegt auf Qualität, Präzision und Maßanfertigung. Wir arbeiten in ganz Oberösterreich,
              Niederösterreich, der Steiermark und Wien.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Hochwertige Handwerkskunst</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Individuelle Maßanfertigungen</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Langjährige Erfahrung</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Zuverlässiger Service</span>
              </div>
            </div>
          </div>
          <div
            className={`bg-card rounded-lg aspect-square flex items-center justify-center border border-border transition-all duration-700 ${isVisible ? "animate-scale-in opacity-100" : "opacity-0 scale-95"}`}
          >
            <img
              src="/modern-steel-metalwork-construction.jpg"
              alt="Edelstahlkonstruktion"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
