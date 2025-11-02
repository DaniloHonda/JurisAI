"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Plus, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

type ChatSession = {
  id: string
  title: string
  messages: Message[]
}

export default function ChatPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "Busca sobre direito trabalhista",
      messages: [
        {
          id: "1",
          role: "user",
          content: "Preciso encontrar decisões sobre rescisão indireta por falta de pagamento de salários",
        },
        {
          id: "2",
          role: "assistant",
          content:
            "Encontrei 47 decisões relevantes sobre rescisão indireta. As principais jurisprudências do TST indicam que a falta de pagamento de salários por mais de 3 meses consecutivos caracteriza falta grave do empregador, justificando a rescisão indireta conforme art. 483 da CLT.\n\nGostaria que eu listasse as decisões mais recentes?",
        },
      ],
    },
    {
      id: "2",
      title: "Consulta sobre ICMS",
      messages: [],
    },
  ])

  const [activeSessionId, setActiveSessionId] = useState("1")
  const [inputValue, setInputValue] = useState("")

  const activeSession = sessions.find((s) => s.id === activeSessionId)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()

    // If current session has messages, create a new chat
    if (activeSession && activeSession.messages.length > 0) {
      const newSession: ChatSession = {
        id: Date.now().toString(),
        title: userMessage.length > 50 ? userMessage.substring(0, 50) + "..." : userMessage,
        messages: [],
      }

      const newMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: userMessage,
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Estou processando sua solicitação e buscando as jurisprudências mais relevantes. Por favor, aguarde um momento...",
      }

      newSession.messages = [newMessage, assistantMessage]
      setSessions([newSession, ...sessions])
      setActiveSessionId(newSession.id)
    } else {
      // First message in empty chat - update title and add messages
      const newMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: userMessage,
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Estou processando sua solicitação e buscando as jurisprudências mais relevantes. Por favor, aguarde um momento...",
      }

      setSessions(
        sessions.map((session) =>
          session.id === activeSessionId
            ? {
                ...session,
                title: userMessage.length > 50 ? userMessage.substring(0, 50) + "..." : userMessage,
                messages: [newMessage, assistantMessage],
              }
            : session,
        ),
      )
    }

    setInputValue("")
  }

  const handleExampleClick = (exampleText: string) => {
    setInputValue(exampleText)
    setTimeout(() => {
      // Create new chat if current has messages
      if (activeSession && activeSession.messages.length > 0) {
        const newSession: ChatSession = {
          id: Date.now().toString(),
          title: exampleText.length > 50 ? exampleText.substring(0, 50) + "..." : exampleText,
          messages: [],
        }

        const newMessage: Message = {
          id: Date.now().toString(),
          role: "user",
          content: exampleText,
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Estou processando sua solicitação e buscando as jurisprudências mais relevantes. Por favor, aguarde um momento...",
        }

        newSession.messages = [newMessage, assistantMessage]
        setSessions([newSession, ...sessions])
        setActiveSessionId(newSession.id)
      } else {
        // First message in empty chat
        const newMessage: Message = {
          id: Date.now().toString(),
          role: "user",
          content: exampleText,
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Estou processando sua solicitação e buscando as jurisprudências mais relevantes. Por favor, aguarde um momento...",
        }

        setSessions(
          sessions.map((session) =>
            session.id === activeSessionId
              ? {
                  ...session,
                  title: exampleText.length > 50 ? exampleText.substring(0, 50) + "..." : exampleText,
                  messages: [newMessage, assistantMessage],
                }
              : session,
          ),
        )
      }
      setInputValue("")
    }, 100)
  }

  const createNewChat = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: "Nova conversa",
      messages: [],
    }
    setSessions([newSession, ...sessions])
    setActiveSessionId(newSession.id)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-64 border-r bg-sidebar">
          <div className="p-4 border-b">
            <Button onClick={createNewChat} className="w-full gap-2">
              <Plus className="h-4 w-4" />
              Nova Conversa
            </Button>
          </div>

          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="p-2">
              {sessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={`w-full text-left p-3 rounded-lg mb-2 transition-colors ${
                    activeSessionId === session.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "hover:bg-sidebar-accent/50"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="text-sm line-clamp-2">{session.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {activeSession?.messages.length === 0 ? (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center max-w-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Como posso te ajudar?</h2>
                <p className="text-muted-foreground mb-8">
                  Faça perguntas sobre jurisprudências, peça para buscar decisões específicas ou solicite análises de
                  casos. Estou aqui para tornar sua pesquisa mais eficiente.
                </p>
                <div className="grid gap-3">
                  <Card
                    className="p-4 text-left hover:bg-accent/50 cursor-pointer transition-colors"
                    onClick={() => handleExampleClick("Encontre decisões sobre danos morais em relações de consumo")}
                  >
                    <p className="text-sm">Encontre decisões sobre danos morais em relações de consumo</p>
                  </Card>
                  <Card
                    className="p-4 text-left hover:bg-accent/50 cursor-pointer transition-colors"
                    onClick={() => handleExampleClick("Busque jurisprudências do STF sobre ICMS nos últimos 2 anos")}
                  >
                    <p className="text-sm">Busque jurisprudências do STF sobre ICMS nos últimos 2 anos</p>
                  </Card>
                  <Card
                    className="p-4 text-left hover:bg-accent/50 cursor-pointer transition-colors"
                    onClick={() => handleExampleClick("Analise precedentes sobre responsabilidade civil médica")}
                  >
                    <p className="text-sm">Analise precedentes sobre responsabilidade civil médica</p>
                  </Card>
                </div>
              </div>
            </div>
          ) : (
            <ScrollArea className="flex-1 p-6">
              <div className="max-w-3xl mx-auto space-y-6">
                {activeSession?.messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="max-w-3xl mx-auto flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Digite sua pergunta sobre jurisprudências..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
