import "./globals.css"
import type { Metadata } from "next"


import { Inter, Fraunces } from "next/font/google"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-jakarta", weight: ["400","500","600"] })
// et dans <html className={`${inter.variable} ${fraunces.variable}`}>

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
