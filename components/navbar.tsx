"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Scale } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-[#3C4361] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Scale className="h-6 w-6" />
            <span>JurisAI</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                isActive("/") ? "text-white" : "text-white/70"
              }`}
            >
              Home
            </Link>
            <Link
              href="/consulta"
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                isActive("/consulta") ? "text-white" : "text-white/70"
              }`}
            >
              Consulta de Jurisprudência
            </Link>
            <Link
              href="/precos"
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                isActive("/precos") ? "text-white" : "text-white/70"
              }`}
            >
              Preços
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
