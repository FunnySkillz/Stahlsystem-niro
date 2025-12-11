"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { ref, isVisible } = useScrollReveal()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier könnte eine API-Call oder Email-Versand implementiert werden
    console.log("Formular eingereicht:", formData)
    alert("Vielen Dank für Ihre Anfrage! Wir werden Sie bald kontaktieren.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-[-60px]"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Kontaktieren Sie uns</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-foreground font-bold mb-2">Adresse</h3>
                <p className="text-muted-foreground">Wels, Österreich</p>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-2">Telefon</h3>
                <a href="tel:+43" className="text-accent hover:text-accent/80 transition-colors">
                  +43 (0) ...
                </a>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-2">Email</h3>
                <a href="mailto:info@stahl-niro.at" className="text-accent hover:text-accent/80 transition-colors">
                  info@stahl-niro.at
                </a>
              </div>
            </div>
          </div>

          <div
            className={`bg-card border border-border rounded-lg p-8 transition-all duration-700 ${isVisible ? "animate-scale-in opacity-100" : "opacity-0 scale-95"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-border rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-border rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  placeholder="Ihre Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-secondary border border-border rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all duration-200"
                  placeholder="Ihre Nachricht..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-2 text-lg transition-all duration-200"
              >
                Senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
