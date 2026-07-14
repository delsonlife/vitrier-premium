// components/layout/Footer.tsx
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-premium-900 text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-2xl font-display font-bold">
              Cristal<span className="text-accent-light">Vitrier</span>
            </span>
            <p className="mt-4 text-premium-300">
              L’excellence du verre au service de votre projet.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-premium-300">
              <li>Baies vitrées</li>
              <li>Fenêtres</li>
              <li>Vérandas</li>
              <li>Dépannage</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-premium-300">
              <li>01 23 45 67 89</li>
              <li>contact@cristalvitrier.fr</li>
              <li>Paris, France</li>
              <li>Lun-Ven 8h-19h</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Suivez-nous</h3>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-premium-300 hover:text-accent-light" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-premium-300 hover:text-accent-light" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-premium-700 pt-8 text-center text-sm text-premium-400">
          © {new Date().getFullYear()} CristalVitrier. Tous droits réservés.
        </div>
      </div>

      {/* Animation lumineuse discrète en fond */}
      <div className="relative h-24 overflow-hidden opacity-30">
        <div className="absolute -bottom-10 left-1/2 h-40 w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>
    </footer>
  )
}
