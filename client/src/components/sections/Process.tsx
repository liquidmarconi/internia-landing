import { Search, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico e Estratégia",
    description: "Realizamos uma imersão no seu negócio para entender seus desafios e identificar as oportunidades de maior impacto. Juntos, traçamos um plano estratégico claro."
  },
  {
    icon: Code2,
    title: "Desenvolvimento e Implementação",
    description: "Nossa equipe de especialistas desenvolve e integra as soluções de forma ágil e personalizada, garantindo uma transição suave e sem interrupções na sua operação."
  },
  {
    icon: Rocket,
    title: "Otimização e Crescimento",
    description: "Monitoramos os resultados continuamente, otimizamos os processos e acompanhamos sua empresa para garantir o máximo de ROI e identificar novas oportunidades."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background border-t border-white/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Nossa Rota para sua <span className="text-primary">Transformação</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo estruturado e transparente para levar sua empresa ao próximo nível com segurança e agilidade.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center mb-8 relative z-10 group-hover:border-primary group-hover:neon-glow transition-all duration-300">
                  <step.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-background font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
