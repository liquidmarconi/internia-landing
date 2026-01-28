import { Card, CardContent } from "@/components/ui/card";

export default function Cases() {
  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10"></div>
      <div className="absolute inset-0 bg-[url('/images/case-study-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              A IA não é promessa. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">É Resultado Comprovado.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12">
              Empresas que investem em Inteligência Artificial não estão apenas se modernizando, estão saindo na frente. Os dados comprovam o impacto direto na receita e na eficiência.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-background/50 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-primary mb-2">+31%</p>
                  <p className="text-sm text-white font-medium">Aumento médio na receita</p>
                  <p className="text-xs text-muted-foreground mt-2">Reportado por empresas que adotam IA</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-primary mb-2">95%</p>
                  <p className="text-sm text-white font-medium">Crescimento de receita</p>
                  <p className="text-xs text-muted-foreground mt-2">Relatado após implementação</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 border-primary/20 backdrop-blur-sm sm:col-span-2">
                <CardContent className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">Até 30%</p>
                    <p className="text-sm text-white font-medium">Redução em custos operacionais</p>
                  </div>
                  <div className="h-12 w-[1px] bg-white/10"></div>
                  <p className="text-xs text-muted-foreground max-w-[150px]">
                    Através da automação inteligente de processos repetitivos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-primary relative group hover:translate-x-2 transition-transform duration-300">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-4 border-background z-20">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Caso: Fintech Base39</h3>
              <p className="text-muted-foreground mb-4">
                Redução de <span className="text-white font-bold">96% nos custos</span> de análise de crédito através de automação inteligente.
              </p>
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-full w-[96%]"></div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-secondary relative group hover:translate-x-2 transition-transform duration-300">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-secondary rounded-full flex items-center justify-center border-4 border-background z-20">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Caso: Cimed Remédios</h3>
              <p className="text-muted-foreground mb-4">
                Tempo de atendimento reduzido de <span className="text-white font-bold">3 horas para 30 segundos</span> com IA humanizada.
              </p>
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-secondary h-full w-[99%]"></div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-emerald-500 relative group hover:translate-x-2 transition-transform duration-300">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-background z-20">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Caso: Setor Sucroenergético</h3>
              <p className="text-muted-foreground mb-4">
                Ganho anual estimado de <span className="text-white font-bold">R$ 9 milhões</span> por usina com tecnologia de IA industrial.
              </p>
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[80%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
