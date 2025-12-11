export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-4">Stahl-Niro</h3>
            <p className="text-primary-foreground/80">Metallbau & Edelstahl nach Maß</p>
          </div>

          <div>
            <h3 className="text-primary-foreground font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-foreground transition-colors">
                  Projekte
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary-foreground font-bold mb-4">Service</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary-foreground font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="mailto:info@stahl-niro.at" className="hover:text-primary-foreground transition-colors">
                  info@stahl-niro.at
                </a>
              </li>
              <li>
                <a href="tel:+43" className="hover:text-primary-foreground transition-colors">
                  +43 (0) ...
                </a>
              </li>
              <li>Wels, Österreich</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {currentYear} Stahl-Niro System e.U. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
