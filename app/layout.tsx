import "./globals.css"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })

export const metadata: Metadata = {
  title: "CristalVitrier | Vitrerie premium",
  description: "Installation de vitrages haut de gamme : baies vitrées, fenêtres aluminium, dépannage. Devis gratuit.",
  keywords: ["vitrier", "baie vitrée", "fenêtre aluminium", "vitrage"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white font-sans text-premium-900 antialiased">
        {children}
      </body>
    </html>
  )
}
