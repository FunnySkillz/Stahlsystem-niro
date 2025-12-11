"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Services() {
  const services = [
    {
      title: "Edelstahlgeländer",
      description: "Elegante und sichere Geländer für innen und außen aus hochwertigem Edelstahl.",
    },
    {
      title: "Balkone & Terrassenkonstruktionen",
      description: "Robuste und moderne Konstruktionen für Balkone und Terrassen nach Ihren Wünschen.",
    },
    {
      title: "Tore & Zäune",
      description: "Individuelle Tore und Zäune aus Edelstahl oder Schmiedeeisen für jeden Zweck.",
    },
    {
      title: "Glasgeländer & Glasvordächer",
      description: "Moderne Glaskonstruktionen für elegante und licht­durchflutete Räume.",
    },
    {
      title: "Individuelle Metallkonstruktionen",
      description: "Maßgefertigte Lösungen für spezielle Anforderungen und kreative Ideen.",
    },
  ]

  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unsere Leistungen</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wir bieten ein breites Spektrum an hochwertigen Metallbau- und Edelstahlkonstruktionen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${
                isVisible
                  ? `animate-fade-in-up opacity-100 animate-stagger-${(index % 5) + 1}`
                  : "opacity-0 translate-y-[30px]"
              }`}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-accent rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
