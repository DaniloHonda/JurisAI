"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

type Category = "individual" | "estudante" | "corporativo"
type PlanPeriod = "gratis" | "mensal" | "trimestral" | "anual"

interface Plan {
  period: PlanPeriod
  name: string
  price: string
  priceValue: string
  features: string[]
}

export default function PrecosPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("individual")
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plansByCategory: Record<Category, Plan[]> = {
    individual: [
      {
        period: "gratis",
        name: "Grátis",
        price: "R$ 0",
        priceValue: "/mês",
        features: ["Workout Plan", "Customized Diet Chart", "Diet Chart", "Yummy Recipes", "Personal Assistant"],
      },
      {
        period: "mensal",
        name: "Mensal",
        price: "R$ 1.990",
        priceValue: "/mês",
        features: [
          "Workout Plan",
          "Customized Diet Chart",
          "Diet Chart",
          "Yummy Recipes",
          "Personal Assistant",
          "5 Free Packaged Meal",
          "Free Delivery",
        ],
      },
      {
        period: "anual",
        name: "Anual",
        price: "R$ 11.990",
        priceValue: "/mês",
        features: [
          "Workout Plan",
          "Customized Diet Chart",
          "Diet Chart",
          "Yummy Recipes",
          "Personal Assistant",
          "5 Free Packaged Meal",
          "Free Delivery",
          "2 Free Packaged Meal",
        ],
      },
    ],
    estudante: [
      {
        period: "mensal",
        name: "Mensal",
        price: "R$ 990",
        priceValue: "/mês",
        features: ["Workout Plan", "Customized Diet Chart", "Diet Chart", "Yummy Recipes", "Personal Assistant"],
      },
      {
        period: "trimestral",
        name: "Trimestral",
        price: "R$ 2.690",
        priceValue: "/trimestre",
        features: [
          "Workout Plan",
          "Customized Diet Chart",
          "Diet Chart",
          "Yummy Recipes",
          "Personal Assistant",
          "5 Free Packaged Meal",
        ],
      },
      {
        period: "anual",
        name: "Anual",
        price: "R$ 9.990",
        priceValue: "/ano",
        features: [
          "Workout Plan",
          "Customized Diet Chart",
          "Diet Chart",
          "Yummy Recipes",
          "Personal Assistant",
          "5 Free Packaged Meal",
          "Free Delivery",
        ],
      },
    ],
    corporativo: [
      {
        period: "mensal",
        name: "Mensal",
        price: "R$ 5.990",
        priceValue: "/mês",
        features: [
          "Workout Plan",
          "Customized Diet Chart",
          "Diet Chart",
          "Yummy Recipes",
          "Personal Assistant",
          "5 Free Packaged Meal",
        ],
      },
      {
        period: "trimestral",
        name: "Trimestral",
        price: "R$ 15.990",
        priceValue: "/trimestre",
        features: [
          "Workout Plan",
          "Customized Diet Chart",
          "Diet Chart",
          "Yummy Recipes",
          "Personal Assistant",
          "5 Free Packaged Meal",
          "Free Delivery",
        ],
      },
      {
        period: "anual",
        name: "Anual",
        price: "R$ 59.990",
        priceValue: "/ano",
        features: [
          "Workout Plan",
          "Customized Diet Chart",
          "Diet Chart",
          "Yummy Recipes",
          "Personal Assistant",
          "5 Free Packaged Meal",
          "Free Delivery",
          "2 Free Packaged Meal",
        ],
      },
    ],
  }

  const currentPlans = plansByCategory[selectedCategory]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Torne a pesquisa jurídica simples, rápida e inteligente.</h1>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para suas necessidades e tenha acesso completo à plataforma de pesquisa jurídica mais
            avançada do Brasil.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          <Button
            variant={selectedCategory === "individual" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSelectedCategory("individual")
              setSelectedPlan(null)
            }}
          >
            Individual
          </Button>
          <Button
            variant={selectedCategory === "estudante" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSelectedCategory("estudante")
              setSelectedPlan(null)
            }}
          >
            Estudante
          </Button>
          <Button
            variant={selectedCategory === "corporativo" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSelectedCategory("corporativo")
              setSelectedPlan(null)
            }}
          >
            Corporativo
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => {
            const planId = `${selectedCategory}-${plan.period}`
            const isHighlighted = index === 1 // Middle plan is highlighted

            return (
              <Card
                key={planId}
                className={`relative transition-all ${
                  isHighlighted
                    ? "border-primary border-2 shadow-lg scale-105"
                    : selectedPlan === planId
                      ? "border-primary border-2"
                      : "hover:border-primary/50"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.priceValue}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={selectedPlan === planId ? "default" : "outline"}
                    onClick={() => setSelectedPlan(planId)}
                  >
                    {selectedPlan === planId ? "Selecionado" : "Selecionar Plano"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {selectedPlan && (
          <div className="text-center mt-12">
            <Button size="lg" className="gap-2">
              Assinar Agora
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
