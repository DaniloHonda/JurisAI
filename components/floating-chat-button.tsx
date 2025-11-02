"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingChatButton() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  // Don't show on chat page
  if (pathname === "/chat") {
    return null
  }

  const handleClick = () => {
    router.push("/chat")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        onClick={handleClick}
        className="h-16 w-16 rounded-full shadow-2xl bg-[#3C4361] hover:bg-[#2d3350] transition-all hover:scale-110"
      >
        <MessageSquare className="h-7 w-7" />
        <span className="sr-only">Abrir Chat IA</span>
      </Button>
    </div>
  )
}
