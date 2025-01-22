import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Honda Twister 2008 - O Futuro em Duas Rodas",
  description:
    "Descubra a revolucionária Honda Twister 2008, uma moto que combina potência, agilidade e estilo futurista.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

