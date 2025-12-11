"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="#" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            Stahl-Niro
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-foreground hover:text-accent transition-colors">
              Über uns
            </Link>
            <Link href="#services" className="text-foreground hover:text-accent transition-colors">
              Leistungen
            </Link>
            <Link href="#projects" className="text-foreground hover:text-accent transition-colors">
              Projekte
            </Link>
            <Link href="#contact" className="text-foreground hover:text-accent transition-colors">
              Kontakt
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#about" className="text-foreground hover:text-accent transition-colors">
              Über uns
            </Link>
            <Link href="#services" className="text-foreground hover:text-accent transition-colors">
              Leistungen
            </Link>
            <Link href="#projects" className="text-foreground hover:text-accent transition-colors">
              Projekte
            </Link>
            <Link href="#contact" className="text-foreground hover:text-accent transition-colors">
              Kontakt
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
