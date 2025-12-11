"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Projects() {
  const projects = [
    {
      image: "/modern-stainless-steel-railing-residential.jpg",
      title: "Edelstahlgeländer Wohnhaus",
    },
    {
      image: "/commercial-metal-gate-industrial.jpg",
      title: "Industrietor Gewerbebau",
    },
    {
      image: "/glass-canopy-modern-architecture.jpg",
      title: "Glasvordach Eingang",
    },
    {
      image: "/steel-fence-property-residential.jpg",
      title: "Metallzaun Liegenschaft",
    },
    {
      image: "/balcony-construction-modern-apartment.jpg",
      title: "Balkonkonstruktion Wohnbau",
    },
    {
      image: "/wrought-iron-gate-entrance-elegant.jpg",
      title: "Schmiedeeisernes Tor",
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unsere Projekte</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Galerie unserer abgeschlossenen Arbeiten</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg aspect-square group cursor-pointer transition-all duration-500 ${
                isVisible
                  ? `animate-fade-in-up opacity-100 animate-stagger-${(index % 5) + 1}`
                  : "opacity-0 translate-y-[30px]"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
