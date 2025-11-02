"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Info } from "lucide-react"

export default function ConsultaPage() {
  const [searchType, setSearchType] = useState<"livre" | "campos">("livre")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Consulta de Jurisprudência</h1>
            <p className="text-muted-foreground">
              Pesquise acórdãos, decisões monocráticas e homologações de acordo utilizando filtros avançados para
              encontrar exatamente o que precisa.
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <CardTitle className="text-lg mb-2">Orientações</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    A Consulta de Jurisprudência agora permite a seleção do tipo de decisão que se deseja consultar.
                    Estão disponíveis os seguintes tipos: Acórdãos, Acórdãos do Colegiado Recursal, Decisões
                    Monocráticas e Homologações de Acordo. Para realizar sua pesquisa, lembre-se de selecionar o tipo de
                    decisão que deve ser considerado na busca.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex gap-4 mb-4">
                <Button variant={searchType === "livre" ? "default" : "outline"} onClick={() => setSearchType("livre")}>
                  Pesquisa Livre
                </Button>
                <Button
                  variant={searchType === "campos" ? "default" : "outline"}
                  onClick={() => setSearchType("campos")}
                >
                  Pesquisa por Campos Específicos
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {searchType === "livre" ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pesquisa-livre">Pesquisa Livre</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="pesquisa-livre"
                        placeholder="Digite palavras-chave, expressões ou termos jurídicos..."
                        className="flex-1"
                      />
                      <Button className="gap-2">
                        <Search className="h-4 w-4" />
                        Pesquisar
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Busca acórdãos que contenham as palavras/expressões desejadas no seu inteiro teor
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox id="sinonimos" />
                    <Label htmlFor="sinonimos" className="text-sm font-normal cursor-pointer">
                      Pesquisar por sinônimos
                    </Label>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ementa">Ementa</Label>
                      <Input id="ementa" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="numero-recurso">Número do Recurso</Label>
                      <Input id="numero-recurso" className="mt-2" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="numero-registro">Número do Registro</Label>
                      <Input id="numero-registro" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="relator">Relator(a)</Label>
                      <Input id="relator" className="mt-2" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="magistrado">Magistrado Prolator</Label>
                      <Input id="magistrado" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="classe">Classe</Label>
                      <Input id="classe" className="mt-2" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="assunto">Assunto</Label>
                      <Input id="assunto" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="comarca">Comarca</Label>
                      <Input id="comarca" className="mt-2" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="orgao">Órgão Julgador</Label>
                      <Input id="orgao" className="mt-2" />
                    </div>
                    <div>
                      <Label>Data do Julgamento</Label>
                      <div className="flex gap-2 mt-2">
                        <Input type="date" placeholder="dd/mm/aaaa" />
                        <span className="flex items-center">até</span>
                        <Input type="date" placeholder="dd/mm/aaaa" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Data de Publicação</Label>
                    <div className="flex gap-2 mt-2">
                      <Input type="date" placeholder="dd/mm/aaaa" />
                      <span className="flex items-center">até</span>
                      <Input type="date" placeholder="dd/mm/aaaa" />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Origem</Label>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Checkbox id="2grau" defaultChecked />
                        <Label htmlFor="2grau" className="text-sm font-normal cursor-pointer">
                          2º grau
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="colegios" />
                        <Label htmlFor="colegios" className="text-sm font-normal cursor-pointer">
                          Colégios Recursais
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Tipo de Publicação</Label>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Checkbox id="acordaos" defaultChecked />
                        <Label htmlFor="acordaos" className="text-sm font-normal cursor-pointer">
                          Acórdãos
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="homologacoes" />
                        <Label htmlFor="homologacoes" className="text-sm font-normal cursor-pointer">
                          Homologações de Acordo
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="decisoes" />
                        <Label htmlFor="decisoes" className="text-sm font-normal cursor-pointer">
                          Decisões Monocráticas
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Ordenar por</Label>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Checkbox id="data-pub" defaultChecked />
                        <Label htmlFor="data-pub" className="text-sm font-normal cursor-pointer">
                          Data de publicação
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="relevancia" />
                        <Label htmlFor="relevancia" className="text-sm font-normal cursor-pointer">
                          Relevância
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="gap-2">
                      <Search className="h-4 w-4" />
                      Pesquisar
                    </Button>
                    <Button variant="outline">Limpar</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
