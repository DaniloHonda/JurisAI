import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Search, MessageSquare, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-6 rounded-full">
              <Scale className="h-16 w-16 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-balance">Encontre jurisprudências em segundos.</h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            A JurisAI combina a eficiência da tecnologia com a precisão da pesquisa jurídica. Nossa plataforma utiliza
            inteligência artificial para tornar a busca por jurisprudências simples, rápida e inteligente.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/consulta">
              <Button size="lg" className="gap-2">
                <Search className="h-5 w-5" />
                Buscar Jurisprudência
              </Button>
            </Link>
            <Link href="/chat">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <MessageSquare className="h-5 w-5" />
                Conversar com IA
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Como funciona a JurisAI?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Busca Convencional</h3>
                <p className="text-muted-foreground">
                  Pesquise jurisprudências usando filtros avançados como ementa, número do recurso, relator, classe e
                  muito mais. Resultados precisos em poucos cliques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Busca por Chat</h3>
                <p className="text-muted-foreground">
                  Converse com a IA em linguagem natural. Faça perguntas, refine sua busca e obtenha resultados
                  contextualizados. Histórico completo de conversas salvo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Explore os Resultados</h3>
                <p className="text-muted-foreground">
                  Visualize jurisprudências organizadas por relevância. Acesse decisões completas, ementas e informações
                  detalhadas sobre cada caso encontrado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para revolucionar sua pesquisa jurídica?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Escolha o plano ideal para você e comece a usar a JurisAI hoje mesmo.
          </p>
          <Link href="/precos">
            <Button size="lg" variant="secondary" className="gap-2">
              Ver Planos e Preços
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
